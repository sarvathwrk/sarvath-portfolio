// ==== Lap Size == 1 ==== //
import aqaryprojectlap1large from 'assets/sarvath/aqary/aqaryproject1large.png';
import aqaryprojectlap1small from 'assets/sarvath/aqary/aqaryproject1large.png';

import aqaryprojectlap1olaceholder from 'assets/slice-app-placeholder.jpg';

// ==== Phone Size == 2 ==== //

import aqaryprojectphone2small1 from 'assets/sarvath/aqary/aqaryprojectphone2large1.png';
import aqaryprojectphone2large1 from 'assets/sarvath/aqary/aqaryprojectphone2large1.png';
import aqaryprojectphone2small2 from 'assets/sarvath/aqary/aqaryprojectphone2small1.png';
import aqaryprojectphone2large2 from 'assets/sarvath/aqary/aqaryprojectphone2small1.png';
import aqaryprojetphone2placeholder1 from 'assets/slice-sidebar-layers-placeholder.png';
import aqaryprojetphone2placeholder2 from 'assets/slice-sidebar-annotations-placeholder.png';

// ==== Lap Size == 3 ==== //
import aqaryprojectlap3large from 'assets/sarvath/aqary/aqaryproject3large.png';

import aqaryprojectlap3placeholder from 'assets/slice-app-placeholder.jpg';

// ==== Lap Size == 4 ==== //

import aqaryproject3large1 from 'assets/sarvath/aqary/aqaryproject3large1.png';
import aqaryproject3Placeholder1 from 'assets/slice-background-bar-placeholder.jpg';

// 5
import aqaryproject4large from 'assets/sarvath/aqary/aqaryproject4large.png';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';

//END ===

// ==== Lap Size == 6 ==== //
import aqaryproject5large from 'assets/sarvath/aqary/aqaryproject5large.png';

import aqaryprojectlap5placeholder from 'assets/slice-app-placeholder.jpg';

import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
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
          src={sliceBackground}
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
            <ProjectImage
              srcSet={[aqaryprojectlap1small, aqaryprojectlap1large]}
              placeholder={aqaryprojectlap1olaceholder}
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
              <Image
                className={styles.sidebarImage}
                srcSet={[aqaryprojectphone2small2, aqaryprojectphone2large2]}
                placeholder={aqaryprojetphone2placeholder2}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[aqaryprojectphone2small1, aqaryprojectphone2large1]}
                placeholder={aqaryprojetphone2placeholder1}
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
            <Image
              srcSet={[aqaryprojectlap3large, aqaryprojectlap3large]}
              placeholder={aqaryprojectlap3placeholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[aqaryproject3large1, aqaryproject3large1]}
                  placeholder={aqaryproject3Placeholder1}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              {/* <div className={styles.gridForeground}>
                                <Image
                                    srcSet={[aqaryproject3large2, aqaryproject3large2]}
                                    placeholder={aqaryproject3Placeholder2}
                                    alt="An annotation preview popover with statistics for shape perimeter and area."
                                    sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                                />
                            </div> */}
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
            <Image
              src={aqaryproject4large}
              placeholder={sliceIrlPlaceholder}
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
            <Image
              srcSet={[aqaryproject5large, aqaryproject5large]}
              placeholder={aqaryprojectlap5placeholder}
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
