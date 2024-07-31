import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectNextImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './futurebank.module.css';

const title = 'KSA-FutureBank Summit';
const description =
  'Devoloped a Project for Buying and Selling Food Products, Whole Seller Dealer Login, Customer logged with Buying Ingredients';
const roles = ['KSA-FutureBank Summit', 'Mockup Website', 'Free Lance', 'Static Site'];

function Details() {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://sarvathwrk.github.io/ksa-futurebank/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Home Page</ProjectSectionHeading>
              <ProjectSectionText>
                Our "Home Page" is the central hub of our website, designed for easy
                navigation and quick access to essential information. With a clean and
                user-friendly layout, it ensures a seamless experience on various devices.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                'https://i.imgur.com/GqZkxU1.jpg',
                'https://i.imgur.com/GqZkxU1.jpg',
              ]}
              placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Who will you meet</ProjectSectionHeading>
              <ProjectSectionText>
                "Who will you meet" holds the promise of diverse encounters and
                experiences. Whether connecting with professionals, discovering new
                perspectives, or exploring opportunities, the possibilities are vast. It's
                an invitation to engage and embrace the richness of varied encounters.{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                'https://i.imgur.com/MwWHmhs.png',
                'https://i.imgur.com/MwWHmhs.png',
              ]}
              placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Login Page with Responsive</ProjectSectionHeading>
              <ProjectSectionText>
                Our "Login Page with Responsive" feature ensures a smooth and
                user-friendly experience, adapting seamlessly to different devices.
                Whether on desktop or mobile, users can securely log in with a consistent
                and optimized interface for enhanced accessibility and convenience.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  'https://i.imgur.com/8152EZw.png',
                  'https://i.imgur.com/8152EZw.png',
                ]}
                placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  'https://i.imgur.com/KJTcE97.png',
                  'https://i.imgur.com/KJTcE97.png',
                ]}
                placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Footer</ProjectSectionHeading>
              <ProjectSectionText>
                Our website footer is a user-friendly space, offering quick access.
                Connect with us easily through social media links for instant updates.
                Designed for seamless navigation, our footer provides a concise overview
                of our platform.{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                'https://i.imgur.com/cpxoIcR.png',
                'https://i.imgur.com/cpxoIcR.png',
              ]}
              placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <ProjectNextImage
                  srcSet={[
                    'https://i.imgur.com/0PaHi9z.png',
                    'https://i.imgur.com/0PaHi9z.png',
                  ]}
                  placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Topic Highlights</ProjectSectionHeading>
              <ProjectSectionText>
                Our "Topic Highlights" offers a brief yet comprehensive overview, ensuring
                easy access to key information on various subjects. Designed for
                efficiency, users can quickly explore and gain targeted insights.{' '}
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Responsive Cards</ProjectSectionHeading>
              <ProjectSectionText>
                "Responsive Cards" ensure a seamless and visually appealing experience
                across devices. These user-friendly cards dynamically adapt to different
                screen sizes, enhancing accessibility and providing optimal viewing on
                desktop, tablet, or mobile.{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={['https://i.imgur.com/cdijRpJ.png']}
              placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Contact Us</ProjectSectionHeading>
              <ProjectSectionText>
                Our "Contact Us" page includes a user-friendly map, making it easy to
                locate our address. This interactive feature enhances the user experience,
                providing a convenient way to find and connect with us.{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                'https://i.imgur.com/HmXWGYi.png',
                'https://i.imgur.com/HmXWGYi.png',
              ]}
              placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

export default Details;
