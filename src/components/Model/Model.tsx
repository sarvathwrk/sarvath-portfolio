import { animate, useReducedMotion, useSpring } from 'framer-motion';
import type { AnimationPlaybackControls } from 'framer-motion';
import { useInViewport } from '@/hooks';
import {
  createRef,
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  Dispatch,
  RefObject,
  SetStateAction,
} from 'react';
import {
  AmbientLight,
  Color,
  DirectionalLight,
  Group,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshDepthMaterial,
  OrthographicCamera,
  PerspectiveCamera,
  PlaneGeometry, // Updated name
  Scene,
  ShaderMaterial,
  SRGBColorSpace,
  Vector3,
  WebGLRenderTarget,
  WebGLRenderer,
} from 'three';
import type { Light, MeshStandardMaterial, Texture } from 'three';
import { HorizontalBlurShader, VerticalBlurShader } from 'three-stdlib';
import { resolveSrcFromSrcSet } from '@/lib/image';
import { classes, cssProps, numToMs } from '@/lib/style';
import {
  cleanRenderer,
  cleanScene,
  modelLoader,
  removeLights,
  textureLoader,
} from '@/lib/three';
import styles from './Model.module.css';
import { ModelAnimationType } from './deviceModels';
import type { DeviceModelConfig, Vector3Like } from './deviceModels';

/**
 * Screen texture data for a device model. `placeholder` is shown until the
 * full-resolution `srcSet`/`sizes` image is resolved and decoded.
 */
export interface ModelTexture {
  placeholder: { src: string };
  srcSet?: string;
  sizes?: string;
  src?: string;
}

/**
 * A device model to render: its static config plus a screen texture.
 */
export interface ModelData extends DeviceModelConfig {
  texture: ModelTexture;
}

/**
 * Props for the {@link Model} component.
 */
export interface Props extends Omit<ComponentPropsWithoutRef<'div'>, 'onLoad'> {
  /** Device models to render into the shared scene. */
  models: ModelData[];
  /** Whether the models should mount/animate in. */
  show?: boolean;
  /** Delay (ms) before the entrance animation begins. */
  showDelay?: number;
  /** Camera position in scene space. */
  cameraPosition?: Vector3Like;
  style?: CSSProperties;
  className?: string;
  /** Accessible label describing the rendered scene. */
  alt?: string;
  /** Called once the first model has loaded. */
  onLoad?: () => void;
}

const MeshType = {
  Frame: 'Frame',
  Logo: 'Logo',
  Screen: 'Screen',
};

const rotationSpringConfig = {
  stiffness: 40,
  damping: 20,
  mass: 1.4,
  restSpeed: 0.001,
};

export const Model = ({
  models,
  show = true,
  showDelay = 0,
  cameraPosition = { x: 0, y: 0, z: 8 },
  style,
  onLoad,

  className,
  alt,
  ...rest
}: Props) => {
  const [loaded, setLoaded] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  // Three.js objects created in the mount effect below; typed non-null via the
  // `null!` idiom since they're always assigned before any consumer reads them.
  const camera = useRef<PerspectiveCamera>(null!);
  const modelGroup = useRef<Group>(null!);
  const scene = useRef<Scene>(null!);
  const renderer = useRef<WebGLRenderer>(null!);
  const shadowGroup = useRef<Group>(null!);
  const renderTarget = useRef<WebGLRenderTarget>(null!);
  const renderTargetBlur = useRef<WebGLRenderTarget>(null!);
  const shadowCamera = useRef<OrthographicCamera>(null!);
  const depthMaterial = useRef<MeshDepthMaterial>(null!);
  const horizontalBlurMaterial = useRef<ShaderMaterial>(null!);
  const verticalBlurMaterial = useRef<ShaderMaterial>(null!);
  const plane = useRef<Mesh>(null!);
  const lights = useRef<Light[]>(null!);
  const blurPlane = useRef<Mesh>(null!);
  const fillPlane = useRef<Mesh>(null!);
  const isInViewport = useInViewport(container, false, { threshold: 0.2 });
  const reduceMotion = useReducedMotion();
  const rotationX = useSpring(0, rotationSpringConfig);
  const rotationY = useSpring(0, rotationSpringConfig);

  useEffect(() => {
    const { clientWidth, clientHeight } = container.current!;

    renderer.current = new WebGLRenderer({
      canvas: canvas.current!,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: true,
    });

    renderer.current.setPixelRatio(2);
    renderer.current.setSize(clientWidth, clientHeight);
    renderer.current.outputColorSpace = SRGBColorSpace;

    camera.current = new PerspectiveCamera(36, clientWidth / clientHeight, 0.1, 100);
    camera.current.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    scene.current = new Scene();

    modelGroup.current = new Group();
    scene.current.add(modelGroup.current);

    // Lighting
    const ambientLight = new AmbientLight(0xffffff, 1.2);
    const keyLight = new DirectionalLight(0xffffff, 1.1);
    const fillLight = new DirectionalLight(0xffffff, 0.8);

    fillLight.position.set(-6, 2, 2);
    keyLight.position.set(0.5, 0, 0.866);
    lights.current = [ambientLight, keyLight, fillLight];
    lights.current.forEach(light => scene.current.add(light));

    // The shadow container, if you need to move the plane just move this
    shadowGroup.current = new Group();
    scene.current.add(shadowGroup.current);
    shadowGroup.current.position.set(0, 0, -0.8);
    shadowGroup.current.rotateX(Math.PI / 2);

    const renderTargetSize = 512;
    const planeWidth = 8;
    const planeHeight = 8;
    const cameraHeight = 1.5;
    const shadowOpacity = 0.8;
    const shadowDarkness = 3;

    // The render target that will show the shadows in the plane texture
    renderTarget.current = new WebGLRenderTarget(renderTargetSize, renderTargetSize);
    renderTarget.current.texture.generateMipmaps = false;

    // The render target that we will use to blur the first render target
    renderTargetBlur.current = new WebGLRenderTarget(renderTargetSize, renderTargetSize);
    renderTargetBlur.current.texture.generateMipmaps = false;

    // Make a plane and make it face up
    const planeGeometry = new PlaneGeometry(planeWidth, planeHeight).rotateX(Math.PI / 2);

    const planeMaterial = new MeshBasicMaterial({
      map: renderTarget.current.texture,
      opacity: shadowOpacity,
      transparent: true,
    });

    plane.current = new Mesh(planeGeometry, planeMaterial);
    // The y from the texture is flipped!
    plane.current.scale.y = -1;
    shadowGroup.current.add(plane.current);

    // The plane onto which to blur the texture
    blurPlane.current = new Mesh(planeGeometry);
    blurPlane.current.visible = false;
    shadowGroup.current.add(blurPlane.current);

    // The plane with the color of the ground
    const fillMaterial = new MeshBasicMaterial({
      color: 0xffffff,
      opacity: 0,
      transparent: true,
    });

    fillPlane.current = new Mesh(planeGeometry, fillMaterial);
    fillPlane.current.rotateX(Math.PI);
    fillPlane.current.position.y -= 0.00001;
    shadowGroup.current.add(fillPlane.current);

    // The camera to render the depth material from
    shadowCamera.current = new OrthographicCamera(
      -planeWidth / 2,
      planeWidth / 2,
      planeHeight / 2,
      -planeHeight / 2,
      0,
      cameraHeight
    );
    // Get the camera to look up
    shadowCamera.current.rotation.x = Math.PI / 2;
    shadowGroup.current.add(shadowCamera.current);

    // Like MeshDepthMaterial, but goes from black to transparent
    depthMaterial.current = new MeshDepthMaterial();
    depthMaterial.current.userData.darkness = { value: shadowDarkness };
    depthMaterial.current.onBeforeCompile = shader => {
      shader.uniforms.darkness = depthMaterial.current.userData.darkness;
      shader.fragmentShader = `
        uniform float darkness;
        ${shader.fragmentShader.replace(
          'gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );',
          'gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );'
        )}
      `;
    };
    depthMaterial.current.depthTest = false;
    depthMaterial.current.depthWrite = false;

    horizontalBlurMaterial.current = new ShaderMaterial(HorizontalBlurShader);
    horizontalBlurMaterial.current.depthTest = false;

    verticalBlurMaterial.current = new ShaderMaterial(VerticalBlurShader);
    verticalBlurMaterial.current.depthTest = false;

    const unsubscribeX = rotationX.on('change', renderFrame);
    const unsubscribeY = rotationY.on('change', renderFrame);

    return () => {
      renderTarget.current.dispose();
      renderTargetBlur.current.dispose();
      removeLights(lights.current);
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
      unsubscribeX();
      unsubscribeY();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const blurShadow = useCallback((amount: number) => {
    blurPlane.current.visible = true;

    // Blur horizontally and draw in the renderTargetBlur
    blurPlane.current.material = horizontalBlurMaterial.current;
    (blurPlane.current.material as ShaderMaterial).uniforms.tDiffuse.value =
      renderTarget.current.texture;
    horizontalBlurMaterial.current.uniforms.h.value = amount * (1 / 256);

    renderer.current.setRenderTarget(renderTargetBlur.current);
    renderer.current.render(blurPlane.current, shadowCamera.current);

    // Blur vertically and draw in the main renderTarget
    blurPlane.current.material = verticalBlurMaterial.current;
    (blurPlane.current.material as ShaderMaterial).uniforms.tDiffuse.value =
      renderTargetBlur.current.texture;
    verticalBlurMaterial.current.uniforms.v.value = amount * (1 / 256);

    renderer.current.setRenderTarget(renderTarget.current);
    renderer.current.render(blurPlane.current, shadowCamera.current);

    blurPlane.current.visible = false;
  }, []);

  // Handle render passes for a single frame
  const renderFrame = useCallback(() => {
    const blurAmount = 5;

    // Remove the background
    const initialBackground = scene.current.background;
    scene.current.background = null;

    // Force the depthMaterial to everything
    // cameraHelper.visible = false;
    scene.current.overrideMaterial = depthMaterial.current;

    // Render to the render target to get the depths
    renderer.current.setRenderTarget(renderTarget.current);
    renderer.current.render(scene.current, shadowCamera.current);

    // And reset the override material
    scene.current.overrideMaterial = null;

    blurShadow(blurAmount);

    // A second pass to reduce the artifacts
    // (0.4 is the minimum blur amount so that the artifacts are gone)
    blurShadow(blurAmount * 0.4);

    // Reset and render the normal scene
    renderer.current.setRenderTarget(null);
    scene.current.background = initialBackground;

    modelGroup.current.rotation.x = rotationX.get();
    modelGroup.current.rotation.y = rotationY.get();

    renderer.current.render(scene.current, camera.current);
  }, [blurShadow, rotationX, rotationY]);

  // Handle mouse move animation
  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      const position = {
        x: (event.clientX - innerWidth / 2) / innerWidth,
        y: (event.clientY - innerHeight / 2) / innerHeight,
      };

      rotationY.set(position.x / 2);
      rotationX.set(position.y / 2);
    };

    if (isInViewport && !reduceMotion) {
      window.addEventListener('mousemove', onMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!container.current) return;

      const { clientWidth, clientHeight } = container.current;

      renderer.current.setSize(clientWidth, clientHeight);
      camera.current.aspect = clientWidth / clientHeight;
      camera.current.updateProjectionMatrix();

      renderFrame();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [renderFrame]);

  return (
    <div
      className={classes(styles.model, className)}
      data-loaded={loaded}
      style={cssProps({ delay: numToMs(showDelay) }, style)}
      ref={container}
      role="img"
      aria-label={alt}
      {...rest}
    >
      <canvas className={styles.canvas} ref={canvas} />
      {models.map((model, index) => (
        <Device
          key={JSON.stringify(model.position)}
          renderer={renderer}
          modelGroup={modelGroup}
          show={show}
          showDelay={showDelay}
          renderFrame={renderFrame}
          index={index}
          setLoaded={setLoaded}
          onLoad={onLoad}
          model={model}
        />
      ))}
    </div>
  );
};

/**
 * Runs a model's entrance animation. Returns playback controls when the
 * variant is interruptible (laptop lid), otherwise nothing (spring up).
 */
type PlayAnimation = () => AnimationPlaybackControls | void;

/**
 * Deferred loaders returned once a device's assets are fetched.
 */
interface DeviceLoadResult {
  loadFullResTexture?: () => Promise<void>;
  playAnimation?: PlayAnimation;
}

interface DeviceLoader {
  start: () => Promise<DeviceLoadResult>;
}

interface DeviceProps {
  renderer: RefObject<WebGLRenderer>;
  model: ModelData;
  modelGroup: RefObject<Group>;
  renderFrame: () => void;
  index: number;
  showDelay: number;
  setLoaded: Dispatch<SetStateAction<boolean>>;
  onLoad?: () => void;
  show: boolean;
}

const Device = ({
  renderer,
  model,
  modelGroup,
  renderFrame,
  index,
  showDelay,
  setLoaded,
  onLoad,

  show,
}: DeviceProps) => {
  const [loadDevice, setLoadDevice] = useState<DeviceLoader>();
  const reduceMotion = useReducedMotion();
  const placeholderScreen = createRef<Mesh>();

  useEffect(() => {
    const applyScreenTexture = async (texture: Texture, node: Mesh) => {
      texture.colorSpace = SRGBColorSpace;
      texture.flipY = false;
      texture.anisotropy = renderer.current.capabilities.getMaxAnisotropy();
      texture.generateMipmaps = false;

      // Decode the texture to prevent jank on first render
      await renderer.current.initTexture(texture);

      // GLTF screen meshes use a standard material; narrow so we can set
      // color/opacity/map, which don't exist on the base Material type.
      const material = node.material as MeshStandardMaterial;
      material.color = new Color(0xffffff);
      material.transparent = true;
      material.map = texture;
    };

    // Generate promises to await when ready
    const load = async (): Promise<DeviceLoadResult> => {
      const { texture, position, url } = model;
      let loadFullResTexture: (() => Promise<void>) | undefined;
      let playAnimation: PlayAnimation | undefined;

      const [placeholder, gltf] = await Promise.all([
        await textureLoader.loadAsync(texture.placeholder.src),
        await modelLoader.loadAsync(url),
      ]);

      modelGroup.current.add(gltf.scene);

      gltf.scene.traverse(async node => {
        // `traverse` yields base Object3D nodes; treat meshes as such so we can
        // reach `.material`, which only exists on Mesh subclasses.
        const mesh = node as Mesh;

        if (mesh.material) {
          // Color management is enabled by default since three r152, so a hex
          // color is treated as sRGB and converted to linear automatically.
          (mesh.material as MeshStandardMaterial).color = new Color(0x1f2025);
        }

        if (node.name === MeshType.Screen) {
          // Create a copy of the screen mesh so we can fade it out
          // over the full resolution screen texture
          placeholderScreen.current = mesh.clone();
          placeholderScreen.current.material = (mesh.material as MeshStandardMaterial).clone();
          node.parent!.add(placeholderScreen.current);
          (placeholderScreen.current.material as MeshStandardMaterial).opacity = 1;
          placeholderScreen.current.position.z += 0.001;

          applyScreenTexture(placeholder, placeholderScreen.current);

          loadFullResTexture = async () => {
            const image = await resolveSrcFromSrcSet(texture);
            const fullSize = await textureLoader.loadAsync(image);
            await applyScreenTexture(fullSize, mesh);

            animate(1, 0, {
              onUpdate: value => {
                (placeholderScreen.current!.material as MeshStandardMaterial).opacity =
                  value;
                renderFrame();
              },
            });
          };
        }
      });

      const targetPosition = new Vector3(position.x, position.y, position.z);

      if (reduceMotion) {
        gltf.scene.position.set(...(targetPosition.toArray() as [number, number, number]));
      }

      // Simple slide up animation
      if (model.animation === ModelAnimationType.SpringUp) {
        playAnimation = () => {
          const startPosition = new Vector3(
            targetPosition.x,
            targetPosition.y - 1,
            targetPosition.z
          );

          gltf.scene.position.set(...(startPosition.toArray() as [number, number, number]));

          animate(startPosition.y, targetPosition.y, {
            type: 'spring',
            delay: (300 * index + showDelay) / 1000,
            stiffness: 60,
            damping: 20,
            mass: 1,
            restSpeed: 0.0001,
            restDelta: 0.0001,
            onUpdate: value => {
              gltf.scene.position.y = value;
              renderFrame();
            },
          });
        };
      }

      // Swing the laptop lid open
      if (model.animation === ModelAnimationType.LaptopOpen) {
        playAnimation = () => {
          const frameNode = gltf.scene.children.find(
            node => node.name === MeshType.Frame
          );
          const startRotation = new Vector3(MathUtils.degToRad(90), 0, 0);
          const endRotation = new Vector3(0, 0, 0);

          gltf.scene.position.set(...(targetPosition.toArray() as [number, number, number]));
          frameNode!.rotation.set(...(startRotation.toArray() as [number, number, number]));

          return animate(startRotation.x, endRotation.x, {
            type: 'spring',
            delay: (300 * index + showDelay + 300) / 1000,
            stiffness: 80,
            damping: 20,
            restSpeed: 0.0001,
            restDelta: 0.0001,
            onUpdate: value => {
              frameNode!.rotation.x = value;
              renderFrame();
            },
          });
        };
      }

      return { loadFullResTexture, playAnimation };
    };

    setLoadDevice({ start: load });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loadDevice || !show) return;
    let animation: AnimationPlaybackControls | undefined;

    const onModelLoad = async () => {
      const { loadFullResTexture, playAnimation } = await loadDevice.start();

      setLoaded(true);
      onLoad?.();

      if (!reduceMotion) {
        animation = playAnimation!() as AnimationPlaybackControls | undefined;
      }

      await loadFullResTexture!();

      if (reduceMotion) {
        renderFrame();
      }
    };

    startTransition(() => {
      onModelLoad();
    });

    return () => {
      animation?.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadDevice, show]);

  return null;
};
