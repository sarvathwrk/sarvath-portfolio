import sliceBackgroundLarge from '@/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '@/assets/slice-background-placeholder.jpg';
import sliceBackground from '@/assets/slice-background.jpg';
import { Footer } from '@/components/Footer';
import { Meta } from '@/components/Meta';
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
} from '@/features/project';
import { Fragment } from 'react';
import { media } from '@/lib/style';
import styles from './InkyPencil.module.css';

const title = 'InkyPencil';
const description =
  'Developed a Project for Showing Events, Translation Service. This is Author Website';
const roles = ['InkyPencil', 'Auther', 'Events', 'Translation'];

// function Add_Posts()

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
          url="https://inkypencil.com/"
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
                '/images/InkyPencil/vh7FQxE.png',
                '/images/InkyPencil/vh7FQxE.png',
              ]}
              placeholder={'/images/InkyPencil/7Eof7aC.jpg'}
              alt="The InkyPencil home page with event listings and translation services."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Explore</ProjectSectionHeading>
              <ProjectSectionText>
                Explore a world of possibilities with our user-friendly "Explore" feature.
                Whether you're discovering products, reading articles, or navigating
                courses, this section is designed for an enriching experience. Make the
                most of what our platform offers in a concise and engaging format.{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/InkyPencil/AXNC4mX.jpg',
                '/images/InkyPencil/AXNC4mX.jpg',
              ]}
              placeholder={'/images/InkyPencil/7Eof7aC.jpg'}
              alt="The InkyPencil Explore page for discovering events and content."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Responsive Menu</ProjectSectionHeading>
              <ProjectSectionText>
                Experience seamless navigation with our "Responsive Menu." Designed for
                easy access on any device, it adapts effortlessly to different screen
                sizes. This user-friendly feature ensures a consistent and enjoyable
                browsing experience for everyone.{' '}
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  '/images/InkyPencil/FYLbsHK.png',
                  '/images/InkyPencil/FYLbsHK.png',
                ]}
                placeholder={'/images/InkyPencil/7Eof7aC.jpg'}
                alt="The InkyPencil responsive navigation menu on a mobile device."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  '/images/InkyPencil/CL2Cft3.png',
                  '/images/InkyPencil/CL2Cft3.png',
                ]}
                placeholder={'/images/InkyPencil/7Eof7aC.jpg'}
                alt="The responsive menu adapting across different screen sizes."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>About Us</ProjectSectionHeading>
              <ProjectSectionText>
                Discover the reasons to choose us. From exceptional quality to outstanding
                customer service, our platform stands out. Explore the advantages that
                make us the ideal choice for your needs.{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/InkyPencil/1LcuiJf.png',
                '/images/InkyPencil/1LcuiJf.png',
              ]}
              placeholder={'/images/InkyPencil/7Eof7aC.jpg'}
              alt="The InkyPencil About Us page introducing the author."
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
                    '/images/InkyPencil/84nndBK.png',
                    '/images/InkyPencil/84nndBK.png',
                  ]}
                  placeholder={'/images/InkyPencil/7Eof7aC.jpg'}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Hovered Explore Page</ProjectSectionHeading>
              <ProjectSectionText>
                Experience enhanced exploration with our "Hovered Explore Card" feature.
                Get additional details or visual cues as you hover over cards, creating a
                dynamic and informative user experience. Engage effortlessly with content,
                whether it's exploring products, articles, or courses.{' '}
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Contact Us</ProjectSectionHeading>
              <ProjectSectionText>
                Visit our "Contact Us" page for quick and direct communication. Accessible
                from the main menu, it provides essential contact information and a
                user-friendly form for inquiries or feedback. We prioritize prompt and
                secure responses to ensure a seamless user experience.{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/InkyPencil/dRy5bez.png',
                '/images/InkyPencil/dRy5bez.png',
              ]}
              placeholder={'/images/InkyPencil/7Eof7aC.jpg'}
              alt="The InkyPencil Contact Us page with an inquiry form."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Footer</ProjectSectionHeading>
              <ProjectSectionText>
                Our website footer is a user-friendly space, offering quick access to
                essential links such as Home, About Us, Products, and Contact Us. Connect
                with us easily through social media links for instant updates. Designed
                for seamless navigation, our footer provides a concise overview of our
                platform.{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/InkyPencil/JZsPTgC.png',
                '/images/InkyPencil/JZsPTgC.png',
              ]}
              placeholder={'/images/InkyPencil/7Eof7aC.jpg'}
              alt="The InkyPencil website footer with navigation and social links."
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
