import sliceAnnotationLarge from 'assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceAnnotation from 'assets/slice-annotation.png';
import sliceAppLarge from 'assets/slice-app-large.jpg';

// ==== Lap Size == 1 ==== //
import difuzaproject1large from 'assets/sarvath/difuza/difuzaproject1large.png';
import difuzaprojectlap1olaceholder from 'assets/slice-app-placeholder.jpg';

// ==== Lap Size == 2 ==== //
import difuzaproject2large from 'assets/sarvath/difuza/difuzaproject2large.png';
import difuzaproject2ap1olaceholder from 'assets/slice-app-placeholder.jpg';

// ==== Lap Size == 3 ==== //
import difuzaproject3large2 from 'assets/sarvath/difuza/difuzaproject3large1.png';
import difuzaproject3large1 from 'assets/sarvath/difuza/difuzaproject3large2.png';

import difuzaproject3placeholder1 from 'assets/slice-sidebar-layers-placeholder.png';
import difuzaproject3placeholder2 from 'assets/slice-sidebar-annotations-placeholder.png';

// ==== Lap Size == 4 ==== //
import difuzaproject4large from 'assets/sarvath/difuza/difuzaproject4large.png';

import difuzaprojectlap4placeholder from 'assets/slice-app-placeholder.jpg';

// ==== Lap Size == 5 ==== //

import difuzaproject5large from 'assets/sarvath/difuza/difuzaproject5large.png';
import difuzaproject3Placeholder1 from 'assets/slice-background-bar-placeholder.jpg';

// ==== Lap Size == 6 ==== //

import difuzaproject6large from 'assets/sarvath/difuza/difuzaproject6large.png';
import difuzaproject6Placeholder from 'assets/slice-irl-placeholder.jpg';

// ==== Lap Size == 7 ==== //

import difuzaproject7large from 'assets/sarvath/difuza/difuzaproject7large.png';
import difuzaproject7Placeholder from 'assets/slice-app-placeholder.jpg';

// // ==== Lap Size == 6 ==== //
// import aqaryproject5large from 'assets/sarvath/aqary/aqaryproject5large.png';

// import aqaryprojectlap5placeholder from 'assets/slice-app-placeholder.jpg';

import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/slice-app.jpg';
import sliceBackgroundBarLarge from 'assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from 'assets/slice-background-bar.jpg';
import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';
import sliceIrl from 'assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from 'assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from 'assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from 'assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from 'assets/slice-sidebar-layers.png';
import sliceSlidesLarge from 'assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import sliceSlides from 'assets/slice-slides.jpg';
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
import styles from './Difuza.module.css';

const title = 'Difuza Service Dashboard';
const description =
  'Devoloped a Project for Selling Web Service like Website With Dashboard Access, Getting SiteData Reports, Getting Customer Enquiries, Listing Datas Etc..';
const roles = [
  'Difuza Dashboard',
  'Service provider',
  'Dynamic Site Genarator',
  'Super Admin Access',
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
          url="https://www.difuza.com"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Home Page</ProjectSectionHeading>
              <ProjectSectionText>
                Responsive Home Page with Logo,NavBar,Login Link,Slider,Social Media Links
                and Footer
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectImage
              srcSet={[difuzaproject1large, difuzaproject1large]}
              placeholder={difuzaprojectlap1olaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
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
              srcSet={[difuzaproject2large, difuzaproject2large]}
              placeholder={difuzaproject2ap1olaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>
                Responsive statistics Using Google looker Studio
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
                srcSet={[difuzaproject3large1, difuzaproject3large1]}
                placeholder={difuzaproject3placeholder1}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[difuzaproject3large2, difuzaproject3large2]}
                placeholder={difuzaproject3placeholder2}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Form with Datatable</ProjectSectionHeading>
              <ProjectSectionText>
                Our "Form with Datatable" seamlessly integrates a user-friendly form with
                a dynamic datatable, offering a cohesive experience for easy data entry,
                editing, and viewing. Enjoy the convenience of a responsive design that
                ensures optimal interaction on various devices.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[difuzaproject4large, difuzaproject4large]}
              placeholder={difuzaprojectlap4placeholder}
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
                  srcSet={[difuzaproject5large, difuzaproject5large]}
                  placeholder={difuzaproject3Placeholder1}
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
              src={difuzaproject6large}
              placeholder={difuzaproject6Placeholder}
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
              srcSet={[difuzaproject7large, difuzaproject7large]}
              placeholder={difuzaproject7Placeholder}
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
