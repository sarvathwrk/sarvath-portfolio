import { Button } from 'components/Button';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { deviceModels } from 'components/Model/deviceModels';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { useHydrated, useWindowSize } from 'hooks';
import { useState, useCallback, useMemo, useEffect, Suspense, lazy } from 'react';
import debounce from 'lodash/debounce';
import styles from './ProjectSummary.module.css';
import { LoaderAlt } from 'components/LoaderAlt';

// const Model = dynamic(() => import('components/Model').then(mod => mod.Model), {
//   ssr: false,
//   loading: () => <div style={{ opacity: 0 }}>Loading model...</div>,
// });

const Model = lazy(() =>
  import('components/Model').then(module => ({ default: module.Model }))
);

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
}) => {
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
    visible => (
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
    visible => {
      const modelProps = {
        alt: model.alt,
        show: visible,
        showDelay: model.type === 'phone' ? 300 : 500,
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
                <Model onLoad={handleModelLoad} {...modelProps} />
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
