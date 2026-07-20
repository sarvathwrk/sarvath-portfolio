import { Button } from '@/components/ui/Button';
import { DecoderText } from '@/components/ui/DecoderText';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { Text } from '@/components/ui/Text';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { classes, cssProps, media, numToMs } from '@/lib/style';
import styles from './../about.module.css';
import { useWindowSize } from '@/hooks';

const initDelay = 300;

export interface CustomAboutHeaderProps {
  title: string;
  description: ReactNode;
  /** Label for the first (optional) link button. Defaults to 'Visit website'. */
  linkLabel?: string;
  /** Label for the second (optional) link button. Defaults to 'Visit website'. */
  linkLabel2?: string;
  /** Href for the first link button; the button only renders when provided. */
  url?: string;
  /** Href for the second link button; the button only renders when provided. */
  url2?: string;
  className?: string;
}

export function CustomAboutHeader({
  title,
  description,
  linkLabel = 'Visit website',
  linkLabel2 = 'Visit website',
  url,
  url2,
  className,
}: CustomAboutHeaderProps) {
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
              style={{ fontSize: isMobile ? '1.5rem' : '50px' }}
            />
          </Heading>
          <Text
            // style={{ fontSize: '10px' }}
            className={styles.description}
            size={isMobile ? 'md' : 'xl'}
            as="p"
          >
            {description}
          </Text>
          <div className={styles.headcontentButton}>
            {!!url && (
              <Link href={url} target="_Blank">
                <Button
                  fontSize={isMobile ? '.8rem' : false}
                  secondary
                  iconHoverShift
                  className={styles.linkButton}
                  icon="chevronRight"
                >
                  {linkLabel}
                </Button>
              </Link>
            )}
            {!!url2 && (
              <Link href={url2}>
                <Button
                  secondary
                  fontSize={isMobile ? '.8rem' : false}
                  iconHoverShift
                  className={styles.linkButton}
                  icon="chevronRight"
                >
                  {linkLabel2}
                </Button>
              </Link>
            )}
          </div>
        </div>
        {/* {!!roles?.length && (
          <ul className={styles.quicklink}>
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
        )} */}
      </div>
    </Section>
  );
}
