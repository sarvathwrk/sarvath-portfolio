import { Text } from '@/components/ui/Text';
import Link from 'next/link';
import { classes } from '@/lib/style';
import styles from './Footer.module.css';

export interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} Mohamed Sarvath Khan.`}
      </span>
      <Link href="/humans.txt" target="_self">
        <span className={styles.link}>Created by @Me</span>
      </Link>
    </Text>
  </footer>
);
