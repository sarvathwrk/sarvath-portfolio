import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';
import { Heading } from '@/components/ui/Heading';
import { deviceModels } from '@/components/Model/deviceModels';
import type { DeviceModelConfig, Vector3Like } from '@/components/Model/deviceModels';
import type { Props as ModelComponentProps } from '@/components/Model';
import { Section } from '@/components/ui/Section';
import { Text } from '@/components/ui/Text';
import { Transition } from '@/components/ui/Transition';
import { useHydrated, useWindowSize } from '@/hooks';
import {
  useState,
  useCallback,
  useMemo,
  useEffect,
  Suspense,
  lazy,
  type HTMLAttributes,
  type ReactNode,
  type Ref,
} from 'react';
import type { StaticImageData } from 'next/image';
import debounce from 'lodash/debounce';
import styles from './ProjectSummary.module.css';
import { LoaderAlt } from '@/components/ui/LoaderAlt';

/** Which device frame(s) a project preview renders into. */
export type ProjectModelType = 'laptop' | 'phone' | 'macwithphone';

/** A responsive screen texture for a device model. */
export interface ProjectTexture {
  srcSet: StaticImageData[];
  placeholder: StaticImageData;
}

/** The 3D preview configuration for a project. */
export interface ProjectModel {
  type: ProjectModelType;
  alt: string;
  textures: ProjectTexture[];
}

// Local shape of the props assembled for the `<Model>` component. `Model`'s
// exported `ModelTexture` types `srcSet` as an already-resolved `string`, but
// this component supplies the raw responsive `StaticImageData[]` that `Model`
// resolves internally at load time — hence the boundary cast on render.
interface PreviewModelData extends DeviceModelConfig {
  texture: ProjectTexture & { sizes: string };
}

interface PreviewModelProps {
  alt: string;
  show: boolean;
  showDelay: number;
  models: PreviewModelData[];
  cameraPosition?: Vector3Like;
}

// const Model = dynamic(() => import('@/components/Model').then(mod => mod.Model), {
//   ssr: false,
//   loading: () => <div style={{ opacity: 0 }}>Loading model...</div>,
// });

const Model = lazy(() =>
  import('@/components/Model').then(module => ({ default: module.Model }))
);

export interface ProjectSummaryProps extends HTMLAttributes<HTMLElement> {
  sectionRef?: Ref<HTMLDivElement>;
  visible?: boolean;
  index: number;
  title: string;
  description: string;
  model: ProjectModel;
  buttonText: string;
  buttonLink: string;
  alternate?: boolean;
}

export const ProjectSummary = ({
  id,
  visible: sectionVisible,
  sectionRef,
  index,
  title,
  description,
  model,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}: ProjectSummaryProps) => {
  const [focused, setFocused] = useState(false);
  const { width } = useWindowSize();
  const titleId = `${id}-title`;
  const isMobile = width <= 768; // Adjust the breakpoint as needed
  const isHydrated = useHydrated();
  const [modelLoaded, setModelLoaded] = useState(false);

  const indexText = useMemo(() => (index < 10 ? `0${index}` : index), [index]);

  const phoneSizes = useMemo(() => `(max-width: 768px) 30vw, 20vw`, []);
  const laptopSizes = useMemo(() => `(max-width: 768px) 80vw, 40vw`, []);
  function handleModelLoad() {
    setModelLoaded(true);
  }
  const renderDetails = useCallback(
    (visible: boolean): ReactNode => (
      <div className={styles.details}>
        <div aria-hidden className={styles.index}>
          <Divider
            notchWidth="64px"
            notchHeight="8px"
            collapsed={!visible}
            collapseDelay={1000}
          />
          <span className={styles.indexNumber} data-visible={visible}>
            {indexText}
          </span>
        </div>
        <Heading
          level={3}
          as="h2"
          className={styles.title}
          data-visible={visible}
          id={titleId}
        >
          {title}
        </Heading>
        <Text className={styles.description} data-visible={visible} as="p">
          {description}
        </Text>
        <div className={styles.button} data-visible={visible}>
          <Button iconHoverShift href={buttonLink} iconEnd="arrowRight">
            {buttonText}
          </Button>
        </div>
      </div>
    ),
    [indexText, title, description, buttonLink, buttonText, titleId]
  );

  const renderPreview = useCallback(
    (visible: boolean): ReactNode => {
      const modelProps: PreviewModelProps = {
        alt: model.alt,
        show: visible,
        showDelay: model.type === 'phone' ? 0 : 100,
        models: [],
      };

      if (model.type === 'laptop') {
        modelProps.cameraPosition = { x: 0, y: 0, z: 8 };
        modelProps.models.push({
          ...deviceModels.laptop,
          texture: {
            ...model.textures[0],
            sizes: laptopSizes,
          },
        });
      } else if (model.type === 'phone') {
        modelProps.cameraPosition = { x: 0, y: 0, z: 11.5 };
        modelProps.models.push({
          ...deviceModels.phone,
          position: { x: -0.6, y: 1.1, z: 0 },
          texture: {
            ...model.textures[0],
            sizes: phoneSizes,
          },
        });
        modelProps.models.push({
          ...deviceModels.phone,
          position: { x: 0.6, y: -0.5, z: 0.3 },
          texture: {
            ...model.textures[1],
            sizes: phoneSizes,
          },
        });
      } else if (model.type === 'macwithphone') {
        modelProps.cameraPosition = { x: 0, y: 0, z: 11 };
        modelProps.models.push({
          ...deviceModels.phone,
          position: { x: -0.9, y: 1.2, z: 0 },
          texture: {
            ...model.textures[0],
            sizes: phoneSizes,
          },
        });
        modelProps.models.push({
          ...deviceModels.laptop,
          position: { x: 0.6, y: -0.5, z: 0.3 },
          texture: {
            ...model.textures[1],
            sizes: laptopSizes,
          },
        });
      }

      return (
        <div className={styles.preview}>
          <div className={styles.model} data-device={model.type}>
            {isHydrated && visible && (
              <Suspense fallback={<div style={{ opacity: 0 }}>Loading model...</div>}>
                <Model
                  onLoad={handleModelLoad}
                  {...(modelProps as unknown as ModelComponentProps)}
                />
              </Suspense>
            )}
          </div>
        </div>
      );
    },
    [model.alt, model.type, model.textures, isHydrated, laptopSizes, phoneSizes]
  );

  const handleResize = useMemo(
    () =>
      debounce(() => {
        // Handle resize logic if necessary
      }, 300),
    []
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <Section
      className={styles.summary}
      data-alternate={alternate}
      data-first={index === 1}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      aria-labelledby={titleId}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
      {...rest}
    >
      <div className={styles.content}>
        <Transition in={sectionVisible || focused}>
          {visible => (
            <>
              {!modelLoaded && (
                <LoaderAlt center className={styles.loader} data-visible={visible} />
              )}
              {!alternate && !isMobile && (
                <>
                  {renderDetails(visible)}
                  {renderPreview(visible)}
                </>
              )}
              {(alternate || isMobile) && (
                <>
                  {renderPreview(visible)}
                  {renderDetails(visible)}
                </>
              )}
            </>
          )}
        </Transition>
      </div>
    </Section>
  );
};
