import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import type { ButtonHTMLAttributes } from 'react';
import styles from './NavToggle.module.css';

export interface NavToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  menuOpen?: boolean;
}

export const NavToggle = ({ menuOpen, ...rest }: NavToggleProps) => {
  return (
    <Button
      iconOnly
      className={styles.toggle}
      aria-label="Menu"
      aria-expanded={menuOpen}
      {...rest}
    >
      <div className={styles.inner}>
        <Icon className={styles.icon} data-menu={true} data-open={menuOpen} icon="menu" />
        <Icon
          className={styles.icon}
          data-close={true}
          data-open={menuOpen}
          icon="close"
        />
      </div>
    </Button>
  );
};
