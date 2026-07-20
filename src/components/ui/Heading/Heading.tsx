import { ElementType, Fragment, HTMLAttributes, ReactNode } from 'react';
import { classes } from '@/lib/style';
import styles from './Heading.module.css';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  level?: number;
  as?: ElementType;
  align?: string;
  weight?: string;
  className?: string;
}

export const Heading = ({
  children,
  level = 1,
  as,
  align = 'auto',
  weight = 'medium',
  className,
  ...rest
}: HeadingProps) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || (`h${Math.max(clampedLevel, 1)}` as ElementType);

  return (
    <Fragment>
      <Component
        className={classes(styles.heading, className)}
        data-align={align}
        data-weight={weight}
        data-level={clampedLevel}
        {...rest}
      >
        {children}
      </Component>
    </Fragment>
  );
};
