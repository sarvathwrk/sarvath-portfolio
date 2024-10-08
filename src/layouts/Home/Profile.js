import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { ProjectNextImage } from 'layouts/Project';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'am Sarvath, Skilled full stack web developer based in Abu Dhabi. With extensive
      experience in developing scalable web applications, I specialize in crafting
      intuitive user interfaces and robust backend solutions
      <Link href="/about"> About Me</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I am passionate about pushing boundaries in web development and continuously
      expanding my skill set. If you're looking to collaborate on exciting projects or
      discuss opportunities, I welcome you to reach out.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <ProjectNextImage
                  reveal
                  delay={100}
                  placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
                  srcSet={[
                    { src: 'https://i.imgur.com/32qoE9j.jpg', width: 480 },
                    { src: 'https://i.imgur.com/XIRbVpx.jpg', width: 960 },
                  ]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="sarvath"
                />
                {/* <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg> */}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
