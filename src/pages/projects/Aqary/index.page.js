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
import { Fragment, Suspense } from 'react';
import { media } from 'utils/style';
import styles from './Aqary.module.css';

const title = 'Aqary International Group';
const description =
  'Developed a Project for Buying and Selling Real Estate Properties and Get All Types of Reports and User Details in Dashboard';
const roles = ['Aqary Dashboard', 'Statistics and Reports', 'Real Estate'];

// function Add_Posts()

function Details() {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <Suspense fallback={<div style={{ opacity: 0 }}>Loading model...</div>}>
          <ProjectBackground
            srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
            placeholder={sliceBackgroundPlaceholder}
            opacity={0.8}
          />
        </Suspense>
        <ProjectHeader
          title={title}
          description={description}
          url="https://dashboard.aqaryint.com/"
          roles={roles}
        />
        {/* <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Log In Page</ProjectSectionHeading>
              <ProjectSectionText>
                Secure login page for Aqary administrators and staff, with validation
                for email, username, and password fields plus clear error alerts.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/Aqary/ld0xzWa.png',
                '/images/Aqary/ld0xzWa.png',
              ]}
              placeholder={'/images/Aqary/7Eof7aC.jpg'}
              alt="Aqary dashboard login page"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection> */}
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Responsive statistics</ProjectSectionHeading>
              <ProjectSectionText>
                The Aqary dashboard presents key real-estate metrics through bar,
                line, and pie charts for at-a-glance insight.
              </ProjectSectionText>
              <ProjectSectionText>
                Each chart adapts fluidly across desktops, tablets, and phones, keeping
                statistics clear at any screen size or orientation.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  '/images/Aqary/VgI5B7s.png',
                  '/images/Aqary/VgI5B7s.png',
                ]}
                placeholder={'/images/Aqary/7Eof7aC.jpg'}
                alt="Aqary dashboard statistics charts in a responsive desktop layout"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  '/images/Aqary/YMFSEby.png',
                  '/images/Aqary/YMFSEby.png',
                ]}
                placeholder={'/images/Aqary/D1CDStb.jpg'}
                alt="Aqary dashboard statistics charts adapted for smaller screens"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Notification Functionality</ProjectSectionHeading>
              <ProjectSectionText>
                The dashboard surfaces real-time notifications for new activity,
                confirmation alerts, incoming mail, and file updates.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/Aqary/23AHmOf.png',
                '/images/Aqary/23AHmOf.png',
              ]}
              placeholder={'/images/Aqary/7Eof7aC.jpg'}
              alt="Aqary dashboard notification panel showing system alerts"
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
                    '/images/Aqary/dqTbAQ2.png',
                    '/images/Aqary/dqTbAQ2.png',
                  ]}
                  placeholder={'/images/Aqary/7Eof7aC.jpg'}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Data Tables (Listing Data's)</ProjectSectionHeading>
              <ProjectSectionText>
                Records appear in structured tables with column sorting, filtering, and
                pagination, letting administrators navigate large property and user
                datasets with ease.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        {/* <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Forms UI</ProjectSectionHeading>
              <ProjectSectionText>
                The Forms module in our project facilitates user interaction by providing
                a structured way to collect and submit data. This document outlines the
                various form components, their usage, validation mechanisms, and best
                practices for implementing forms.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/Aqary/02AueMh.png',
                '/images/Aqary/02AueMh.png',
              ]}
              placeholder={'/images/Aqary/7Eof7aC.jpg'}
              alt="Aqary dashboard data entry form"
            />
          </ProjectSectionContent>
        </ProjectSection> */}

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Statistics And Reports</ProjectSectionHeading>
              <ProjectSectionText>
                The Statistics and Reports module collects and analyzes platform data,
                generating detailed reports that reveal trends across properties, sales,
                and users.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/Aqary/vpjEZP1.png',
                '/images/Aqary/vpjEZP1.png',
              ]}
              placeholder={'/images/Aqary/7Eof7aC.jpg'}
              alt="Aqary dashboard statistics and reports analytics view"
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
