import { Button } from '@/components/ui/Button';
import { DecoderText } from '@/components/ui/DecoderText';
import { Divider } from '@/components/ui/Divider';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { Text } from '@/components/ui/Text';
import { Transition } from '@/components/ui/Transition';
import { ProjectNextImage } from '@/features/project';
import Link from 'next/link';
import { Fragment, useState, type Ref } from 'react';
import { media } from '@/lib/style';
import styles from './Profile.module.css';

interface ProfileTextProps {
  visible: boolean;
  titleId: string;
}

const ProfileText = ({ visible, titleId }: ProfileTextProps) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm Sarvath, a full-stack developer based in Dubai with 5+ years building
      scalable SaaS platforms, Web3 apps, and real-time systems — end to end, from
      Next.js frontends to NestJS backends and database design.
      <Link href="/about"> About Me</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I am passionate about pushing boundaries in web development and continuously
      expanding my skill set. If you're looking to collaborate on exciting projects or
      discuss opportunities, I welcome you to reach out.
    </Text>
  </Fragment>
);

export interface ProfileProps {
  id: string;
  visible?: boolean;
  sectionRef?: Ref<HTMLDivElement>;
}

export const Profile = ({ id, visible, sectionRef }: ProfileProps) => {
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
                  placeholder={'/images/profile/7Eof7aC.jpg'}
                  srcSet={[
                    { src: '/images/profile/32qoE9j.jpg', width: 480 },
                    { src: '/images/profile/XIRbVpx.jpg', width: 960 },
                  ]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="sarvath"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
