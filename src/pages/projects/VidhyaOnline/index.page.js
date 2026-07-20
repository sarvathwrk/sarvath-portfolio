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
import styles from './vidhyaonline.module.css';

const title = 'Vidhyaonline Coromandel Group';
const description =
  'Developed a Project for Learning Company Related Courses Provided by VidhyaOnline. We Have Quiz Questions in Middle of Video, Getting Reports At the Last of Video and Download Certificate After Finished Course';
const roles = [
  'Vidhyaonline',
  'Employee Login',
  'Learning Courses',
  'Get Reports',
  'Download Certificate',
];

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
          url="https://vidhyaonline.biz/"
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
                '/images/VidhyaOnline/GTn7ESy.jpg',
                '/images/VidhyaOnline/GTn7ESy.jpg',
              ]}
              placeholder={'/images/VidhyaOnline/7Eof7aC.jpg'}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Own Ad Video Listing</ProjectSectionHeading>
              <ProjectSectionText>
                Discover a curated collection of tech tutorials, project demos, and
                innovation insights in my Video Hub. Explore categories, search for
                specific content, and join me in the fusion of code and creativity! 🚀
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/VidhyaOnline/FQIOf8V.jpg',
                '/images/VidhyaOnline/FQIOf8V.jpg',
              ]}
              placeholder={'/images/VidhyaOnline/7Eof7aC.jpg'}
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
                  '/images/VidhyaOnline/WlaZkPa.png',
                  '/images/VidhyaOnline/WlaZkPa.png',
                ]}
                placeholder={'/images/VidhyaOnline/7Eof7aC.jpg'}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  '/images/VidhyaOnline/RuBQNCm.png',
                  '/images/VidhyaOnline/RuBQNCm.png',
                ]}
                placeholder={'/images/VidhyaOnline/7Eof7aC.jpg'}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Courses List</ProjectSectionHeading>
              <ProjectSectionText>
                Explore our courses effortlessly with key details at your fingertips. Each
                course, succinctly presented with instructor names, durations, and
                prerequisites, offers a quick snapshot for informed decisions. Streamlined
                enrollment links ensure a seamless journey from exploration to
                registration, creating an efficient and user-friendly experience.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/VidhyaOnline/t43jqGC.png',
                '/images/VidhyaOnline/t43jqGC.png',
              ]}
              placeholder={'/images/VidhyaOnline/7Eof7aC.jpg'}
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
                    '/images/VidhyaOnline/jSlEb7w.png',
                    '/images/VidhyaOnline/jSlEb7w.png',
                  ]}
                  placeholder={'/images/VidhyaOnline/7Eof7aC.jpg'}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Course Completion Progress</ProjectSectionHeading>
              <ProjectSectionText>
                The "Course Completion Percentage" offers users a clear visual indicator
                of their progress in a course. This feature provides a quick overview of
                the percentage of the course that users have completed, aiding in tracking
                their advancement. This visual feedback promotes motivation and
                engagement, enhancing the overall learning experience.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Sub Course List</ProjectSectionHeading>
              <ProjectSectionText>
                In the Sub Course List we see the attend and Last Seen Report at the
                middle of Card, Resume the Course and View Certificate For the Course
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/VidhyaOnline/XlwrnpT.png',
                '/images/VidhyaOnline/XlwrnpT.png',
              ]}
              placeholder={'/images/VidhyaOnline/7Eof7aC.jpg'}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Overall Course Report</ProjectSectionHeading>
              <ProjectSectionText>
                The "Overall Course Report" succinctly captures a user's performance,
                detailing metrics such as total time spent, quiz scores, and completed
                assignments{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/VidhyaOnline/BYBUCJm.png',
                '/images/VidhyaOnline/BYBUCJm.png',
              ]}
              placeholder={'/images/VidhyaOnline/7Eof7aC.jpg'}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
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
                '/images/VidhyaOnline/rgMLeuC.png',
                '/images/VidhyaOnline/rgMLeuC.png',
              ]}
              placeholder={'/images/VidhyaOnline/7Eof7aC.jpg'}
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
