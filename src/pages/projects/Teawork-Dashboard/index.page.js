// ==== Lap Size == 1 ==== //
import teaworkdashboardproject1large from 'assets/sarvath/teawork-dashboard/teaworkdashboardproject1large.png';
import teaworkdashboardlap1olaceholder from 'assets/slice-app-placeholder.jpg';

// ==== Lap Size == 2 ==== //
import teaworkdashboardproject2large from 'assets/sarvath/teawork-dashboard/teaworkdashboardproject2large.png';
import teaworkdashboardproject2ap1olaceholder from 'assets/slice-app-placeholder.jpg';

// ==== Lap Size == 3 ==== //
import teaworkdashboardproject3large1 from 'assets/sarvath/teawork-dashboard/teaworkdashboardproject3large1.png';
import teaworkdashboardproject3large2 from 'assets/sarvath/teawork-dashboard/teaworkdashboardproject3large2.png';

import teaworkdashboardprojetphone3placeholder2 from 'assets/slice-sidebar-annotations-placeholder.png';
import teaworkdashboardprojetphone3placeholder1 from 'assets/slice-sidebar-layers-placeholder.png';

// ==== Lap Size == 4 ==== //
import teaworkdashboardproject4large from 'assets/sarvath/teawork-dashboard/teaworkdashboardproject4large.png';

import teaworkdashboardprojectlap4placeholder from 'assets/slice-app-placeholder.jpg';

// ==== Lap Size == 5 ==== //

import teaworkdashboardproject5large from 'assets/sarvath/teawork-dashboard/teaworkdashboardproject5large.png';
import teaworkdashboardproject3Placeholder1 from 'assets/slice-background-bar-placeholder.jpg';

// ==== Lap Size == 6 ==== //

import teaworkdashboardproject6large from 'assets/sarvath/teawork-dashboard/teaworkdashboardproject6large.png';
import teaworkdashboardproject6Placeholder from 'assets/slice-irl-placeholder.jpg';

// ==== Lap Size == 7 ==== //

import teaworkdashboardproject7large from 'assets/sarvath/teawork-dashboard/teaworkdashboardproject7large.png';
import teaworkdashboardproject7Placeholder from 'assets/slice-app-placeholder.jpg';

// // ==== Lap Size == 6 ==== //
// import aqaryproject5large from 'assets/sarvath/aqary/aqaryproject5large.png';

// import aqaryprojectlap5placeholder from 'assets/slice-app-placeholder.jpg';

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
import styles from './teaworkdashboard.module.css';

const title = 'Teawork Admin Dashboard';
const description =
  'Devoloped a Project for Buying Ingredients for making Foods and Selling Foods and Get All Types of Reports and User Details in Dashboard';
const roles = [
  'Teawork Dashboard',
  'Statistics and Reports',
  'VAT & Discount Management',
  'User Management',
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
          url="http://52.15.38.12:55223/"
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
              srcSet={[teaworkdashboardproject1large, teaworkdashboardproject1large]}
              placeholder={teaworkdashboardlap1olaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Statistics and Reports</ProjectSectionHeading>
              <ProjectSectionText>
                List and describe the types of statistics charts included in the
                responsive design. This may include bar charts, line charts, pie charts,
                etc.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectImage
              srcSet={[teaworkdashboardproject2large, teaworkdashboardproject2large]}
              placeholder={teaworkdashboardproject2ap1olaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>
                Responsive Statistics and Reports
              </ProjectSectionHeading>
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
                srcSet={[teaworkdashboardproject3large1, teaworkdashboardproject3large1]}
                placeholder={teaworkdashboardprojetphone3placeholder1}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[teaworkdashboardproject3large2, teaworkdashboardproject3large2]}
                placeholder={teaworkdashboardprojetphone3placeholder2}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Tab Type Page Menus</ProjectSectionHeading>
              <ProjectSectionText>
                Our "Tab Type Page Menus" offer an organized and intuitive interface,
                allowing users to navigate seamlessly between different sections. With a
                responsive design, this feature ensures a consistent and user-friendly
                experience on various devices.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[teaworkdashboardproject4large, teaworkdashboardproject4large]}
              placeholder={teaworkdashboardprojectlap4placeholder}
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
                  srcSet={[teaworkdashboardproject5large, teaworkdashboardproject5large]}
                  placeholder={teaworkdashboardproject3Placeholder1}
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
              src={teaworkdashboardproject6large}
              placeholder={teaworkdashboardproject6Placeholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Enquiry Management</ProjectSectionHeading>
              <ProjectSectionText>
                Our "Enquiry Management" system streamlines incoming inquiries, offering a
                user-friendly interface for efficient categorization, prioritization, and
                tracking. This ensures a prompt and organized approach to addressing and
                resolving user queries.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[teaworkdashboardproject7large, teaworkdashboardproject7large]}
              placeholder={teaworkdashboardproject7Placeholder}
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
