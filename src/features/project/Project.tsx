import { Button } from '@/components/ui/Button';
import { Heading, type HeadingProps } from '@/components/ui/Heading';
import {
  Image,
  type ImageSource,
  type Props as ImageProps,
  type SrcSetItem,
} from '@/components/ui/Image';
import { Section } from '@/components/ui/Section';
import { Text, type TextProps } from '@/components/ui/Text';
import { tokens } from '@/components/ThemeProvider/theme';
import { Transition } from '@/components/ui/Transition';
import { useParallax, useWindowSize } from '@/hooks';
import { forwardRef, useRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { classes, cssProps, media, msToNum, numToMs } from '@/lib/style';
import styles from './Project.module.css';
import { DecoderText } from '@/components/ui/DecoderText';
import Link from 'next/link';

const initDelay = 300;

export interface ProjectHeaderProps {
  title?: string;
  description?: ReactNode;
  linkLabel?: string;
  url?: string;
  roles?: string[];
  className?: string;
}

export function ProjectHeader({
  title,
  description,
  linkLabel = 'Visit website',
  url,
  roles,
  className,
}: ProjectHeaderProps) {
  const windowSize = useWindowSize();

  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;

  return (
    <Section className={classes(styles.header, className)} as="section">
      <div
        className={styles.headerContent}
        style={cssProps({ initDelay: numToMs(initDelay) })}
      >
        <div className={styles.details}>
          <Heading className={styles.title} level={2} as="h1">
            <DecoderText
              text={`${title}`}
              delay={1000}
              style={{ fontSize: isMobile ? '1.4rem' : '50px' }}
            />
          </Heading>
          <Text className={styles.description} size={isMobile ? 'md' : 'xl'} as="p">
            {description}
          </Text>
          {!!url && (
            <Link href={url} target="_Blank">
              <Button
                secondary
                iconHoverShift
                className={styles.linkButton}
                icon="chevronRight"
              >
                {linkLabel}
              </Button>
            </Link>
          )}
        </div>
        {!!roles?.length && (
          <ul className={styles.meta}>
            {roles?.map((role, index) => (
              <li
                className={styles.metaItem}
                style={cssProps({ delay: numToMs(initDelay + 300 + index * 140) })}
                key={role}
              >
                <Text secondary>{role}</Text>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}

export interface ProjectContainerProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export const ProjectContainer = ({ className, ...rest }: ProjectContainerProps) => (
  <article className={classes(styles.project, className)} {...rest} />
);

export interface ProjectSectionProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  light?: boolean;
  padding?: string;
  fullHeight?: boolean;
  backgroundOverlayOpacity?: number;
  backgroundElement?: ReactNode;
  children?: ReactNode;
}

export const ProjectSection = forwardRef<HTMLElement, ProjectSectionProps>(
  (
    {
      className,
      light,
      padding = 'both',
      fullHeight,
      backgroundOverlayOpacity = 0.9,
      backgroundElement,
      children,
      ...rest
    },
    ref
  ) => (
    <section
      className={classes(styles.section, className)}
      data-light={light}
      data-full-height={fullHeight}
      ref={ref}
      {...rest}
    >
      {!!backgroundElement && (
        <div
          className={styles.sectionBackground}
          style={cssProps({ opacity: backgroundOverlayOpacity })}
        >
          {backgroundElement}
        </div>
      )}
      <Section className={styles.sectionInner} data-padding={padding}>
        {children}
      </Section>
    </section>
  )
);

export interface ProjectBackgroundProps extends ImageProps {
  opacity?: number;
}

export const ProjectBackground = ({
  opacity = 0.7,
  className,
  ...rest
}: ProjectBackgroundProps) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useParallax(0.6, value => {
    if (!imageRef.current) return;
    imageRef.current.style.setProperty('--offset', `${value}px`);
  });

  return (
    <Transition in timeout={msToNum(tokens.base.durationM)}>
      {visible => (
        <div
          className={classes(styles.backgroundImage, className)}
          data-visible={visible}
        >
          <div className={styles.backgroundImageElement} ref={imageRef}>
            <Image alt="dggd" {...rest} />
          </div>
          <div className={styles.backgroundScrim} style={cssProps({ opacity })} />
        </div>
      )}
    </Transition>
  );
};

export const ProjectBackgroundContact = ({
  opacity = 0.7,
  className,
  ...rest
}: ProjectBackgroundProps) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useParallax(0.6, value => {
    if (!imageRef.current) return;
    imageRef.current.style.setProperty('--offset', `${value}px`);
  });

  return (
    <Transition in timeout={msToNum(tokens.base.durationM)}>
      {visible => (
        <div
          className={classes(styles.backgroundImageContact, className)}
          data-visible={visible}
        >
          <div className={styles.backgroundImageElementContact} ref={imageRef}>
            <Image alt="" role="presentation" {...rest} />
          </div>
          <div className={styles.backgroundScrim} style={cssProps({ opacity })} />
        </div>
      )}
    </Transition>
  );
};

export type ProjectNextImageProps = Omit<ImageProps, 'srcSet' | 'placeholder'> & {
  srcSet?: SrcSetItem[];
  placeholder?: string;
};

export const ProjectNextImage = ({
  className,
  alt,
  srcSet,
  placeholder,
  ...rest
}: ProjectNextImageProps) => {
  let srcSetarray = (srcSet ?? []).map(ival => {
    const src = typeof ival !== 'string' && ival && ival.src ? ival.src : ival;
    const width = typeof ival !== 'string' && ival && ival.width ? ival.width : 480;
    return `${src} ${width}w`;
  });
  let placeholderImage: ImageSource | undefined = placeholder
    ? { src: placeholder }
    : undefined;

  return (
    <div className={classes(styles.image, className)}>
      <Image
        reveal
        alt={alt}
        delay={300}
        srcSet={srcSetarray.join(', ')}
        placeholder={placeholderImage}
        {...rest}
      />
    </div>
  );
};

export const ProjectImage = ({ className, alt, ...rest }: ImageProps) => (
  <div className={classes(styles.image, className)}>
    <Image reveal alt={alt} delay={300} {...rest} />
  </div>
);

export interface ProjectSectionContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  width?: string;
}

export const ProjectSectionContent = ({
  className,
  width = 'l',
  ...rest
}: ProjectSectionContentProps) => (
  <div
    className={classes(styles.sectionContent, className)}
    data-width={width}
    {...rest}
  />
);

export const ProjectSectionHeading = ({
  className,
  level = 3,
  as = 'h2',
  ...rest
}: HeadingProps) => (
  <Heading
    className={classes(styles.sectionHeading, className)}
    as={as}
    level={level}
    align="auto"
    {...rest}
  />
);

export const ProjectSectionText = ({ className, ...rest }: TextProps) => (
  <Text className={classes(styles.sectionText, className)} size="l" as="p" {...rest} />
);

export interface ProjectTextRowProps extends HTMLAttributes<HTMLDivElement> {
  center?: boolean;
  stretch?: boolean;
  justify?: string;
  width?: string;
  noMargin?: boolean;
  className?: string;
  centerMobile?: boolean;
}

export const ProjectTextRow = ({
  center,
  stretch,
  justify = 'center',
  width = 'm',
  noMargin,
  className,
  centerMobile,
  ...rest
}: ProjectTextRowProps) => (
  <div
    className={classes(styles.textRow, className)}
    data-center={center}
    data-stretch={stretch}
    data-center-mobile={centerMobile}
    data-no-margin={noMargin}
    data-width={width}
    data-justify={justify}
    {...rest}
  />
);

export interface ProjectSectionColumnsProps extends ProjectSectionContentProps {
  centered?: boolean;
}

export const ProjectSectionColumns = ({
  className,
  centered,
  ...rest
}: ProjectSectionColumnsProps) => (
  <ProjectSectionContent
    className={classes(styles.sectionColumns, className)}
    data-centered={centered}
    {...rest}
  />
);
