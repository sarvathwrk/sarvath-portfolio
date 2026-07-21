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
import styles from './Foodtekco.module.css';

const title = 'Foodtekco LTD';
const description =
  'An e-commerce platform for buying and selling food ingredients, with a dashboard for reports and user management.';
const roles = [
  'Foodtekco Site',
  'Foodtekco Dashboard',
  'Statistics and Reports',
  'Food Industry',
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
          // url="https://www.foodtekco.com/"
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
                '/images/Foodtekco/jjBwowO.jpg',
                '/images/Foodtekco/jjBwowO.jpg',
              ]}
              placeholder={'/images/Foodtekco/7Eof7aC.jpg'}
              alt="Foodtekco responsive home page with slider and navigation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Log In Page</ProjectSectionHeading>
              <ProjectSectionText>
                Secure login page for Foodtekco administrators and staff, with validation
                for email, username, and password plus clear inline error alerts.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/Foodtekco/kaZBQQA.png',
                '/images/Foodtekco/kaZBQQA.png',
              ]}
              placeholder={'/images/Foodtekco/7Eof7aC.jpg'}
              alt="Foodtekco dashboard login page."
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
                Interactive statistics presented through bar, line, and pie charts to
                track sales, orders, and ingredient trends across the platform.
              </ProjectSectionText>
              <ProjectSectionText>
                The Looker Studio charts reflow across screen sizes and orientations,
                keeping reports readable on desktop, tablet, and mobile.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  '/images/Foodtekco/eimC3ow.png',
                  '/images/Foodtekco/eimC3ow.png',
                ]}
                placeholder={'/images/Foodtekco/7Eof7aC.jpg'}
                alt="Foodtekco statistics dashboard built with Google Looker Studio."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  '/images/Foodtekco/eimC3ow.png',
                  '/images/Foodtekco/eimC3ow.png',
                ]}
                placeholder={'/images/Foodtekco/7Eof7aC.jpg'}
                alt="Responsive Foodtekco statistics charts across screen sizes."
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
                System notifications keep users informed with new alerts, confirmation
                messages, and email or file updates.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/Foodtekco/bNdupMv.png',
                '/images/Foodtekco/bNdupMv.png',
              ]}
              placeholder={'/images/Foodtekco/7Eof7aC.jpg'}
              alt="Foodtekco dashboard notification panel with alerts."
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
                    '/images/Foodtekco/exOxopH.png',
                    '/images/Foodtekco/exOxopH.png',
                  ]}
                  placeholder={'/images/Foodtekco/7Eof7aC.jpg'}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Data Tables (Listing Data's)</ProjectSectionHeading>
              <ProjectSectionText>
                Records are displayed in sortable, filterable tables with pagination, so
                administrators can quickly navigate and analyze large datasets.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Forms UI</ProjectSectionHeading>
              <ProjectSectionText>
                The forms module provides a structured way to collect and submit data
                across Foodtekco, with validated inputs and clear submission feedback.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={['/images/Foodtekco/DTNKXqG.png']}
              placeholder={'/images/Foodtekco/7Eof7aC.jpg'}
              alt="Foodtekco data entry form with validated fields."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Statistics And Reports</ProjectSectionHeading>
              <ProjectSectionText>
                The statistics and reports module collects and analyzes platform data to
                surface meaningful insights and generate detailed reports for administrators.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/Foodtekco/VLUrGll.png',
                '/images/Foodtekco/VLUrGll.png',
              ]}
              placeholder={'/images/Foodtekco/7Eof7aC.jpg'}
              alt="Foodtekco statistics and reports dashboard view."
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
