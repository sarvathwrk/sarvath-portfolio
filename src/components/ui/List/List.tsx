import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { classes } from '@/lib/style';
import styles from './List.module.css';

export interface ListProps extends ComponentPropsWithoutRef<'ul'> {
  ordered?: boolean;
  children?: ReactNode;
  className?: string;
}

export const List = ({ ordered, children, className, ...rest }: ListProps) => {
  const Element: ElementType = ordered ? 'ol' : 'ul';

  return (
    <Element className={classes(styles.list, className)} {...rest}>
      {children}
    </Element>
  );
};

export interface ListItemProps extends ComponentPropsWithoutRef<'li'> {
  children?: ReactNode;
}

export const ListItem = ({ children, ...rest }: ListItemProps) => {
  return (
    <li className={styles.item} {...rest}>
      {children}
    </li>
  );
};
