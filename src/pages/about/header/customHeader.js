import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Heading } from 'components/Heading';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import Link from 'next/link';
import { classes, cssProps, numToMs } from 'utils/style';
import styles from './../about.module.css';

const initDelay = 300;

export function CustomAboutHeader({
  title,
  description,
  linkLabel = 'Visit website',
  linkLabel2 = 'Visit website',
  url,
  url2,
  className,
}) {
  return (
    <Section className={classes(styles.header, className)} as="section">
      <div
        className={styles.headerContent}
        style={cssProps({ initDelay: numToMs(initDelay) })}
      >
        <div className={styles.details}>
          <Heading className={styles.title} level={2} as="h1">
            <DecoderText text={`${title}`} delay={1000} style={{ fontSize: '50px' }} />
          </Heading>
          <Text className={styles.description} size="xl" as="p">
            {description}
          </Text>
          <div className={styles.headcontentButton}>
            {!!url && (
              <Link href={url} target="_Blank">
                <Button
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
