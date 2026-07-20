import { useTheme } from '@/components/ThemeProvider';
import { Transition } from '@/components/ui/Transition';
import { useReducedMotion, useSpring } from 'framer-motion';
import { useInViewport, useWindowSize } from '@/hooks';
import {
  useEffect,
  useRef,
  useCallback,
  type ComponentPropsWithoutRef,
} from 'react';
import {
  AmbientLight,
  Color,
  DirectionalLight,
  Light,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  SRGBColorSpace,
  Scene,
  SphereGeometry,
  UniformsUtils,
  WebGLRenderer,
} from 'three';
import { media, rgbToThreeColor } from '@/lib/style';
import { cleanRenderer, cleanScene } from '@/lib/three';
import styles from './DisplacementSphere.module.css';
import fragShader from './displacementSphereFragment.glsl';
import vertShader from './displacementSphereVertex.glsl';

const springConfig = {
  stiffness: 30,
  damping: 20,
  mass: 2,
};

/** A shader uniform whose `value` we mutate over time. */
type SphereUniforms = { [uniform: string]: { value: unknown } };

export interface Props extends ComponentPropsWithoutRef<'canvas'> {}

export const DisplacementSphere = (props: Props) => {
  const theme = useTheme();
  const { rgbBackground, themeId, colorWhite } = theme;
  const start = useRef(Date.now());
  // `null!` idiom: refs are populated in effects before any access.
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  const renderer = useRef<WebGLRenderer>(null!);
  const camera = useRef<PerspectiveCamera>(null!);
  const scene = useRef<Scene>(null!);
  const lights = useRef<Light[]>([]);
  const uniforms = useRef<SphereUniforms | null>(null);
  const material = useRef<MeshPhongMaterial>(null!);
  const geometry = useRef<SphereGeometry>(null!);
  const sphere = useRef<Mesh & { modifier?: number }>(null!);
  const reduceMotion = useReducedMotion();
  const isInViewport = useInViewport(canvasRef);
  const windowSize = useWindowSize();
  const rotationX = useSpring(0, springConfig);
  const rotationY = useSpring(0, springConfig);

  const initializeThree = useCallback(() => {
    if (typeof window === 'undefined') return;

    const { innerWidth, innerHeight } = window;

    // Initialize WebGLRenderer
    renderer.current = new WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.current.setSize(innerWidth, innerHeight);
    renderer.current.setPixelRatio(window.devicePixelRatio);
    renderer.current.outputColorSpace = SRGBColorSpace;

    // Initialize Camera
    camera.current = new PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100);
    camera.current.position.z = 52;

    // Initialize Scene
    scene.current = new Scene();

    // Initialize Material and Geometry
    material.current = new MeshPhongMaterial();
    material.current.onBeforeCompile = shader => {
      uniforms.current = UniformsUtils.merge([
        shader.uniforms,
        // Cast bridges the extra `type` field the runtime uses against the
        // stricter `IUniform` element type expected by `merge`.
        { time: { type: 'f', value: 0 } } as { [uniform: string]: { value: number } },
      ]);

      shader.uniforms = uniforms.current;
      shader.vertexShader = vertShader;
      shader.fragmentShader = fragShader;
    };

    geometry.current = new SphereGeometry(16, 16, 16); // Reduced complexity
    sphere.current = new Mesh(geometry.current, material.current);
    sphere.current.position.z = 0;
    sphere.current.modifier = Math.random();
    scene.current.add(sphere.current);

    // Initialize Lights
    // three r155+ uses physically-correct lighting (legacy lights were removed),
    // which is ~PI dimmer for these materials. Scale intensities by PI to match
    // the original brightness the scene was authored for.
    const dirLight = new DirectionalLight(colorWhite, 0.6 * Math.PI);
    const ambientLight = new AmbientLight(
      colorWhite,
      (themeId === 'light' ? 0.8 : 0.1) * Math.PI
    );

    dirLight.position.set(100, 100, 200);

    lights.current = [dirLight, ambientLight];
    // rgbToThreeColor yields sRGB-encoded 0-1 values; tag them as sRGB so
    // color management converts them correctly (otherwise the dark background
    // is treated as linear and renders washed-out gray).
    scene.current.background = new Color().setRGB(
      ...(rgbToThreeColor(rgbBackground) as [number, number, number]),
      SRGBColorSpace
    );
    lights.current.forEach(light => scene.current.add(light));

    return () => {
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
    };
  }, [colorWhite, rgbBackground, themeId]);

  useEffect(() => {
    initializeThree();
  }, [initializeThree]);

  const handleResize = useCallback(() => {
    const { width, height } = windowSize;
    const adjustedHeight = height + height * 0.3;
    if (renderer.current) {
      renderer.current.setSize(width, adjustedHeight);
      camera.current.aspect = width / adjustedHeight;
      camera.current.updateProjectionMatrix();

      // Update sphere position based on screen size
      if (width <= media.mobile) {
        sphere.current.position.set(14, 10, 0);
      } else if (width <= media.tablet) {
        sphere.current.position.set(18, 14, 0);
      } else {
        sphere.current.position.set(22, 16, 0);
      }
    }
  }, [windowSize]);

  useEffect(() => {
    handleResize(); // Initial resize
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onMouseMove = (event: MouseEvent) => {
      const position = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      };

      rotationX.set(position.y / 2);
      rotationY.set(position.x / 2);
    };

    if (!reduceMotion && isInViewport) {
      window.addEventListener('mousemove', onMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let animation: number | undefined;

    const animate = () => {
      animation = requestAnimationFrame(animate);

      if (uniforms.current) {
        uniforms.current.time.value = 0.00005 * (Date.now() - start.current);
      }

      sphere.current.rotation.z += 0.001;
      sphere.current.rotation.x = rotationX.get();
      sphere.current.rotation.y = rotationY.get();

      renderer.current.render(scene.current, camera.current);
    };

    if (!reduceMotion && isInViewport) {
      animate();
    } else {
      renderer.current.render(scene.current, camera.current);
    }

    return () => {
      if (animation !== undefined) {
        cancelAnimationFrame(animation);
      }
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);

  return (
    <Transition in timeout={500}>
      {visible => (
        <canvas
          aria-hidden
          className={styles.canvas}
          data-visible={visible}
          ref={canvasRef}
          {...props}
        />
      )}
    </Transition>
  );
};

export default DisplacementSphere;
