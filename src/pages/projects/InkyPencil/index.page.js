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
import styles from './InkyPencil.module.css';

const title = 'InkyPencil';
const description =
  'Devoloped a Project for Showing Events, Translation Service. This is Author Website';
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
                'https://i.imgur.com/vh7FQxE.png',
                'https://i.imgur.com/vh7FQxE.png',
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
                'https://i.imgur.com/AXNC4mX.jpg',
                'https://i.imgur.com/AXNC4mX.jpg',
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
                  'https://i.imgur.com/FYLbsHK.png',
                  'https://i.imgur.com/FYLbsHK.png',
                ]}
                placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  'https://i.imgur.com/CL2Cft3.png',
                  'https://i.imgur.com/CL2Cft3.png',
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
              <ProjectSectionHeading>About Us</ProjectSectionHeading>
              <ProjectSectionText>
                Discover the reasons to choose us. From exceptional quality to outstanding
                customer service, our platform stands out. Explore the advantages that
                make us the ideal choice for your needs.{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                'https://i.imgur.com/1LcuiJf.png',
                'https://i.imgur.com/1LcuiJf.png',
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
                    'https://i.imgur.com/84nndBK.png',
                    'https://i.imgur.com/84nndBK.png',
                  ]}
                  placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
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
                'https://i.imgur.com/dRy5bez.png',
                'https://i.imgur.com/dRy5bez.png',
              ]}
              placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
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
                'https://i.imgur.com/JZsPTgC.png',
                'https://i.imgur.com/JZsPTgC.png',
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
