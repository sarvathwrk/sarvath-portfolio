import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from 'react';
import { classes } from '@/lib/style';
import styles from './Section.module.css';

export interface SectionProps extends Omit<ComponentPropsWithoutRef<'div'>, 'ref'> {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ as: Component = 'div', children, className, ...rest }, ref) => (
    <Component className={classes(styles.section, className)} ref={ref} {...rest}>
      {children}
    </Component>
  )
);
