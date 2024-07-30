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
import styles from './Aqary.module.css';

const title = 'Aqary International Group';
const description =
  'Devoloped a Project for Buying and Selling Real Estate Properties and Get All Types of Reports and User Details in Dashboard';
const roles = ['Aqary Dashboard', 'Statistics and Reports', 'Real Estate'];

// function Add_Posts()

function Details() {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={'sliceBackground'}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="http://20.203.31.58/dashboard/pages/authentication/portal_registration/login"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Log In Page</ProjectSectionHeading>
              <ProjectSectionText>
                Identify the primary users or audience who will interact with the
                dashboard login page. This may include administrators, employees, or
                specific user roles with lots of Validation for Email,Username and
                Password and Alerts
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                'https://i.imgur.com/ld0xzWa.png',
                'https://i.imgur.com/ld0xzWa.png',
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
              <ProjectSectionHeading>Responsive statistics</ProjectSectionHeading>
              <ProjectSectionText>
                List and describe the types of statistics charts included in the
                responsive design. This may include bar charts, line charts, pie charts,
                etc.
              </ProjectSectionText>
              <ProjectSectionText>
                Detail how the charts adapt to different screen sizes, resolutions, and
                orientations. Explain the responsive design principles implemented.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  'https://i.imgur.com/VgI5B7s.png',
                  'https://i.imgur.com/VgI5B7s.png',
                ]}
                placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  'https://i.imgur.com/YMFSEby.png',
                  'https://i.imgur.com/YMFSEby.png',
                ]}
                placeholder={'https://i.imgur.com/D1CDStb.jpg'}
                alt="The layers sidebar design, now with user profiles."
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
                Describe notifications generated by the system, such as New, Confirmation
                alerts, Mail information or File.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                'https://i.imgur.com/23AHmOf.png',
                'https://i.imgur.com/23AHmOf.png',
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
                    'https://i.imgur.com/dqTbAQ2.png',
                    'https://i.imgur.com/dqTbAQ2.png',
                  ]}
                  placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Data Tables (Listing Data's)</ProjectSectionHeading>
              <ProjectSectionText>
                Detail how data is presented in a tabular format, including rows and
                columns.
                <br />
                Explain how users can sort data in ascending or descending order based on
                specific columns.
                <br />
                Describe the filtering options available to users to narrow down the
                displayed data based on specific criteria.
                <br />
                Explain how large datasets are divided into pages, and users can navigate
                through them.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
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
                'https://i.imgur.com/02AueMh.png',
                'https://i.imgur.com/02AueMh.png',
              ]}
              placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Statistics And Reports</ProjectSectionHeading>
              <ProjectSectionText>
                The Statistics and Reports module in our project enables the collection,
                processing, and analysis of data to derive meaningful insights. This
                document provides an overview of the processes involved in data
                collection, processing, analysis, and the generation of reports.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                'https://i.imgur.com/vpjEZP1.png',
                'https://i.imgur.com/vpjEZP1.png',
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
