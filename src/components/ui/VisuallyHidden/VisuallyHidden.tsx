import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from 'react';
import { classes } from '@/lib/style';
import styles from './VisuallyHidden.module.css';

export interface VisuallyHiddenProps extends Omit<ComponentPropsWithoutRef<'span'>, 'ref'> {
  as?: ElementType;
  showOnFocus?: boolean;
  visible?: boolean;
  className?: string;
  children?: ReactNode;
}

export const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  (
    { className, showOnFocus, as: Component = 'span', children, visible, ...rest },
    ref
  ) => {
    return (
      <Component
        className={classes(styles.hidden, className)}
        data-hidden={!visible && !showOnFocus}
        data-show-on-focus={showOnFocus}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);
