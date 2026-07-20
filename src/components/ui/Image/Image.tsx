import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import type { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/Button';
import { Icon as IconBase } from '@/components/ui/Icon';
import { useTheme } from '@/components/ThemeProvider';
import { useReducedMotion } from 'framer-motion';
import { useHasMounted, useInViewport } from '@/hooks';
import { resolveSrcFromSrcSet, srcSetToString } from '@/lib/image';
import { classes, cssProps, numToMs } from '@/lib/style';
import styles from './Image.module.css';

// `Icon` is authored in an untyped module whose inferred props make `className`
// required. Re-type it locally (compile-time only) so it can be used without a
// `className`, exactly as before — the runtime reference is unchanged.
const Icon = IconBase as React.FC<{ icon: string; className?: string }>;

// `srcSetToString` is authored in an untyped module; re-type its signature so it
// accepts the `SrcSet` shapes this component works with.
const toSrcSetString = srcSetToString as (srcSet?: unknown) => string;

/**
 * A resolved image-like source with a URL and optional intrinsic dimensions.
 * `StaticImageData` (from static imports via `next/image`) is assignable to it.
 */
export interface ImageSource {
  src: string;
  width?: number;
  height?: number;
}

/** A single entry within a `srcSet` array. */
export type SrcSetItem = StaticImageData | string | { src: string; width?: number };

/** Either a ready-made `srcSet` string or an array of sources. */
export type SrcSet = string | SrcSetItem[];

export interface Props extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  style?: React.CSSProperties;
  reveal?: boolean;
  delay?: number;
  raised?: boolean;
  src?: ImageSource;
  srcSet?: SrcSet;
  placeholder?: ImageSource;
  priority?: boolean;
  alt?: string;
  sizes?: string;
  play?: boolean;
  restartOnPause?: boolean;
  noPauseButton?: boolean;
}

interface ImageElementsProps extends Props {
  src: ImageSource;
  delay: number;
  loaded?: boolean;
  inViewport?: boolean;
}

export const Image = ({
  className,
  style,
  reveal,
  delay = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder,
  priority,
  ...rest
}: Props) => {
  const [loaded, setLoaded] = useState(false);
  const { themeId } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const src = (baseSrc || (srcSet && srcSet[0])) as ImageSource;
  const inViewport = useInViewport(containerRef, !getIsVideo(src));

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={classes(styles.image, className)}
      data-visible={inViewport || loaded}
      data-reveal={reveal}
      data-raised={raised}
      data-theme={themeId}
      style={cssProps({ delay: numToMs(delay) }, style)}
      ref={containerRef}
    >
      <ImageElements
        delay={delay}
        onLoad={onLoad}
        loaded={loaded}
        inViewport={inViewport}
        reveal={reveal}
        src={src}
        srcSet={srcSet}
        placeholder={placeholder}
        priority={priority}
        {...rest}
      />
    </div>
  );
};

const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder,
  delay,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  noPauseButton,
  ...rest
}: ImageElementsProps) => {
  const reduceMotion = useReducedMotion();
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [playing, setPlaying] = useState(!reduceMotion);
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const [videoInteracted, setVideoInteracted] = useState(false);
  const placeholderRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = getIsVideo(src);
  const showFullRes = inViewport;
  const srcSetString = toSrcSetString(srcSet);
  const hasMounted = useHasMounted();

  useEffect(() => {
    const resolveVideoSrc = async () => {
      try {
        const resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
        setVideoSrc(resolvedVideoSrc);
      } catch (error) {
        console.error('Failed to resolve video source:', error);
      }
    };

    if (isVideo && srcSet) {
      resolveVideoSrc();
    } else if (isVideo) {
      setVideoSrc(src.src);
    }
  }, [isVideo, sizes, src, srcSet]);

  useEffect(() => {
    if (!videoRef.current || !videoSrc) return;

    const playVideo = () => {
      setPlaying(true);
      videoRef.current!.play();
    };

    const pauseVideo = () => {
      setPlaying(false);
      videoRef.current!.pause();
    };

    if (!play) {
      pauseVideo();

      if (restartOnPause) {
        videoRef.current!.currentTime = 0;
      }
    }

    if (videoInteracted) return;

    if (!inViewport) {
      pauseVideo();
    } else if (inViewport && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);

  const togglePlaying = (event: React.MouseEvent) => {
    event.preventDefault();
    setVideoInteracted(true);

    if (videoRef.current!.paused) {
      setPlaying(true);
      videoRef.current!.play();
    } else {
      setPlaying(false);
      videoRef.current!.pause();
    }
  };

  return (
    <div
      className={styles.elementWrapper}
      data-reveal={reveal}
      data-visible={inViewport || loaded}
      style={cssProps({ delay: numToMs(delay + 1000) })}
    >
      {isVideo && hasMounted && (
        <Fragment>
          <video
            muted
            loop
            playsInline
            className={styles.element}
            data-loaded={loaded}
            autoPlay={!reduceMotion}
            role="img"
            onLoadStart={onLoad}
            src={videoSrc}
            aria-label={alt}
            ref={videoRef}
            {...(rest as React.VideoHTMLAttributes<HTMLVideoElement>)}
          />
          {!noPauseButton && (
            <Button className={styles.button} onClick={togglePlaying}>
              <Icon icon={playing ? 'pause' : 'play'} />
              {playing ? 'Pause' : 'Play'}
            </Button>
          )}
        </Fragment>
      )}
      {!isVideo && (
        <img
          className={styles.element}
          data-loaded={loaded}
          onLoad={onLoad}
          decoding="async"
          src={showFullRes ? src.src : undefined}
          srcSet={showFullRes ? srcSetString : undefined}
          width={src.width}
          height={src.height}
          alt={alt}
          sizes={sizes}
          {...(rest as React.ImgHTMLAttributes<HTMLImageElement>)}
        />
      )}
      {showPlaceholder && (
        <img
          aria-hidden
          className={styles.placeholder}
          data-loaded={loaded}
          style={cssProps({ delay: numToMs(delay) })}
          ref={placeholderRef}
          src={placeholder!.src}
          width={placeholder!.width}
          height={placeholder!.height}
          onTransitionEnd={() => setShowPlaceholder(false)}
          decoding="async"
          alt=""
          role="presentation"
        />
      )}
    </div>
  );
};

function getIsVideo(src: ImageSource): boolean {
  return typeof src.src === 'string' && src.src.endsWith('.mp4');
}
