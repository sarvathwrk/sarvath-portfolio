import ArrowDown from '@/assets/arrow-down.svg'; // Ensure this is used if not, remove it
import { DecoderText } from '@/components/ui/DecoderText';
import { Section } from '@/components/ui/Section';
import { useTheme } from '@/components/ThemeProvider';
import { tokens } from '@/components/ThemeProvider/theme';
import { Transition } from '@/components/ui/Transition';
import { VisuallyHidden } from '@/components/ui/VisuallyHidden';
import { AnimatePresence } from 'framer-motion';
import {
  useHydrated,
  useInterval,
  usePrevious,
  useScrollToHash,
  useWindowSize,
} from '@/hooks';
import {
  Fragment,
  lazy,
  Suspense,
  useEffect,
  useState,
  type HTMLAttributes,
  type Ref,
} from 'react';
import { cssProps, media } from '@/lib/style';
import styles from './Intro.module.css';

// Dynamic import of DisplacementSphere with a loading state
// const DisplacementSphere = dynamic(
//   () => import('@/features/home/DisplacementSphere').then(mod => mod.DisplacementSphere),
//   { ssr: false, loading: () => <div style={{ opacity: 0 }}>Loading model...</div> }
// );
const DisplacementSphere = lazy(() =>
  import('@/features/home/DisplacementSphere').then(module => ({
    default: module.DisplacementSphere,
  }))
);
export interface IntroProps extends HTMLAttributes<HTMLElement> {
  sectionRef?: Ref<HTMLDivElement>;
  disciplines: string[];
  scrollIndicatorHidden?: boolean;
}

export function Intro({
  id,
  sectionRef,
  disciplines,
  scrollIndicatorHidden,
  ...rest
}: IntroProps) {
  const theme = useTheme();
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const currentDiscipline = disciplines[disciplineIndex];
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();
  const windowSize = useWindowSize();

  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;

  // Cycle through disciplines every 5 seconds
  useInterval(
    () => {
      setDisciplineIndex((disciplineIndex + 1) % disciplines.length);
    },
    5000,
    theme.themeId
  );

  // Reset discipline index when theme changes
  useEffect(() => {
    if (prevTheme && prevTheme.themeId !== theme.themeId) {
      setDisciplineIndex(0);
    }
  }, [theme.themeId, prevTheme]);

  // Handle scroll to section on click
  const handleScrollClick = (href: string) => {
    scrollToHash(href);
    event?.preventDefault();
  };

  return (
    <Section
      className={styles.intro}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition in key={theme.themeId} timeout={3000}>
        {(visible, status) => (
          <Fragment>
            {isHydrated && (
              <Suspense fallback={<div style={{ opacity: 0 }}>Loading model...</div>}>
                <DisplacementSphere />
              </Suspense>
            )}
            <header className={styles.text}>
              <h1 className={styles.name} data-visible={visible} id={titleId}>
                <DecoderText text="Mohamed Sarvath Khan" delay={1000} />
              </h1>
              <span className={styles.title}>
                <span aria-hidden className={styles.row}>
                  <span
                    className={styles.word}
                    data-status={status}
                    style={cssProps({ delay: tokens.base.durationXS })}
                  >
                    Full Stack Developer
                  </span>
                  <span className={styles.line} data-status={status} />
                </span>
                <div className={styles.row}>
                  <AnimatePresence>
                    {disciplines.map(item => (
                      <Transition
                        unmount
                        in={item === currentDiscipline}
                        timeout={{ enter: 3000, exit: 2000 }}
                        key={item}
                      >
                        {(visible, status) => (
                          <span
                            aria-hidden
                            className={styles.word}
                            data-plus={true}
                            data-status={status}
                            style={cssProps({ delay: tokens.base.durationL })}
                          >
                            <DecoderText
                              text={item}
                              delay={2000}
                              style={{ fontSize: isMobile ? '1.5rem' : '50px' }}
                            />
                          </span>
                        )}
                      </Transition>
                    ))}
                  </AnimatePresence>
                </div>
              </span>
            </header>
            <span
              className={styles.scrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={() => handleScrollClick('/#project-1')}
            >
              <VisuallyHidden>Scroll to projects</VisuallyHidden>
            </span>
            <span
              className={styles.mobileScrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={() => handleScrollClick('/#project-1')}
            >
              <VisuallyHidden>Scroll to projects</VisuallyHidden>
              <ArrowDown aria-hidden />
            </span>
          </Fragment>
        )}
      </Transition>
    </Section>
  );
}
