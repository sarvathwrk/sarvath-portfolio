import { useReducedMotion } from 'framer-motion';
import { ComponentPropsWithoutRef, CSSProperties, forwardRef } from 'react';
import styles from './Loader.module.css';
import { Text } from '@/components/ui/Text';
import { classes, cssProps } from '@/lib/style';

export interface LoaderAltProps extends Omit<ComponentPropsWithoutRef<'div'>, 'ref'> {
  className?: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
  text?: string;
  center?: boolean;
}

export const LoaderAlt = forwardRef<HTMLDivElement, LoaderAltProps>(
  (
    { className, style, width = 32, height = 4, text = 'Loading...', center, ...rest },
    ref
  ) => {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
      return (
        <Text className={classes(styles.text, className)} weight="medium" {...rest}>
          {text}
        </Text>
      );
    }

    return (
      <div
        ref={ref}
        className={classes(styles.loader, className)}
        data-center={center}
        style={cssProps({ width, height }, style)}
        {...rest}
      >
        <div className={styles.span} />
      </div>
    );
  }
);
