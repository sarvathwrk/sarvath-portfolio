import { Text } from 'components/Text';
import Link from 'next/link';
import { classes } from 'utils/style';
import styles from './Footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} Mohamed Sarvath Khan.`}
      </span>
      {/* Filter out non-DOM props like `secondary` */}
      <Link href="/humans.txt" target="_self">
        {/* Ensure Link component handles secondary internally */}
        <span className={styles.link}>Crafted by yours truly</span>
      </Link>
    </Text>
  </footer>
);
