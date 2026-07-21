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
import styles from './Difuza.module.css';

const title = 'Difuza Service Dashboard';
const description =
  'A web-service platform with dashboard access, site-data reports, and customer-enquiry management.';
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
            <ProjectNextImage
              srcSet={[
                '/images/Difuza/05Enef2.png',
                '/images/Difuza/05Enef2.png',
              ]}
              placeholder={'/images/Difuza/7Eof7aC.jpg'}
              alt="Difuza responsive home page with navigation, slider, and footer"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Log In Page</ProjectSectionHeading>
              <ProjectSectionText>
                The login page authenticates administrators and dashboard users, with
                validation across the email, username, and password fields plus clear
                error alerts.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/Difuza/58IYq1y.png',
                '/images/Difuza/58IYq1y.png',
              ]}
              placeholder={'/images/Difuza/7Eof7aC.jpg'}
              alt="Difuza dashboard login page with email and password validation"
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
                Interactive dashboards present site data through bar, line, and pie
                charts embedded from Google Looker Studio.
              </ProjectSectionText>
              <ProjectSectionText>
                The charts adapt fluidly to different screen sizes, resolutions, and
                orientations for a consistent responsive experience.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  '/images/Difuza/gjPfll2.png',
                  '/images/Difuza/gjPfll2.png',
                ]}
                placeholder={'/images/Difuza/7Eof7aC.jpg'}
                alt="Difuza site-data statistics dashboard built with Google Looker Studio"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  '/images/Difuza/bJeAwGC.png',
                  '/images/Difuza/bJeAwGC.png',
                ]}
                placeholder={'/images/Difuza/7Eof7aC.jpg'}
                alt="Difuza analytics report charts rendered on a responsive layout"
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
            <ProjectNextImage
              srcSet={[
                '/images/Difuza/OwQUFty.png',
                '/images/Difuza/OwQUFty.png',
              ]}
              placeholder={'/images/Difuza/7Eof7aC.jpg'}
              alt="Difuza form integrated with a dynamic data table"
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
                    '/images/Difuza/eoighVl.png',
                    '/images/Difuza/eoighVl.png',
                  ]}
                  placeholder={'/images/Difuza/7Eof7aC.jpg'}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Data Tables (Listing Data's)</ProjectSectionHeading>
              <ProjectSectionText>
                Listed records are presented in a tabular format with sortable columns
                for ascending or descending order.
                <br />
                Filtering options let users narrow results by specific criteria, while
                pagination breaks large datasets into navigable pages.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Forms UI</ProjectSectionHeading>
              <ProjectSectionText>
                The Forms module provides a structured way to collect and submit data,
                combining reusable form components with built-in validation for reliable
                user input.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/Difuza/bSP0jUy.png',
                '/images/Difuza/bSP0jUy.png',
              ]}
              placeholder={'/images/Difuza/7Eof7aC.jpg'}
              alt="Difuza forms UI with structured inputs and validation"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Statistics And Reports</ProjectSectionHeading>
              <ProjectSectionText>
                The Statistics and Reports module collects, processes, and analyses site
                data to derive meaningful insights and generate detailed reports.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/Difuza/7NVrNlG.png',
                '/images/Difuza/7NVrNlG.png',
              ]}
              placeholder={'/images/Difuza/7Eof7aC.jpg'}
              alt="Difuza statistics and reports view with data insights"
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
