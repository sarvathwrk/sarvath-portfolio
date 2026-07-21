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
import styles from './teaworkdashboard.module.css';

const title = 'Teawork Admin Dashboard';
const description =
  'Admin dashboard for a food-products marketplace, covering orders, reports, analytics, and user management.';
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
          // url="http://52.15.38.12:55223/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Log In Page</ProjectSectionHeading>
              <ProjectSectionText>
                The login page authenticates administrators and staff into the TeaWork
                Dashboard. It validates email, username, and password fields and surfaces
                clear alerts for invalid input.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/Teawork-Dashboard/GHW6iSu.png',
                '/images/Teawork-Dashboard/GHW6iSu.png',
              ]}
              placeholder={'/images/Teawork-Dashboard/7Eof7aC.jpg'}
              alt="TeaWork Dashboard login page with email and password validation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Statistics and Reports</ProjectSectionHeading>
              <ProjectSectionText>
                The statistics and reports view visualizes marketplace activity through
                bar, line, and pie charts. Administrators get a clear overview of orders,
                sales, and other key metrics at a glance.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/Teawork-Dashboard/CNeYHyy.png',
                '/images/Teawork-Dashboard/CNeYHyy.png',
              ]}
              placeholder={'/images/Teawork-Dashboard/7Eof7aC.jpg'}
              alt="TeaWork Dashboard statistics and reports with data charts."
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
                The statistics and reports adapt to any device, presenting bar, line, and
                pie charts that stay legible across desktop, tablet, and mobile screens.
              </ProjectSectionText>
              <ProjectSectionText>
                Charts reflow and resize fluidly as screen size, resolution, and
                orientation change, keeping the analytics readable and usable on every
                device.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  '/images/Teawork-Dashboard/zlHHHD0.png',
                  '/images/Teawork-Dashboard/zlHHHD0.png',
                ]}
                placeholder={'/images/Teawork-Dashboard/7Eof7aC.jpg'}
                alt="Responsive statistics and reports charts on a smaller screen."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  '/images/Teawork-Dashboard/227RGq6.png',
                  '/images/Teawork-Dashboard/227RGq6.png',
                ]}
                placeholder={'/images/Teawork-Dashboard/7Eof7aC.jpg'}
                alt="Responsive reports dashboard adapted to a mobile layout."
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
            <ProjectNextImage
              srcSet={[
                '/images/Teawork-Dashboard/0gwTd1R.png',
                '/images/Teawork-Dashboard/0gwTd1R.png',
              ]}
              placeholder={'/images/Teawork-Dashboard/7Eof7aC.jpg'}
              alt="Tab-based navigation menus between dashboard sections."
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
                    '/images/Teawork-Dashboard/SLn3RgA.png',
                    '/images/Teawork-Dashboard/SLn3RgA.png',
                  ]}
                  placeholder={'/images/Teawork-Dashboard/7Eof7aC.jpg'}
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
                Records are presented in a clean tabular layout of rows and columns, with
                column-based sorting in ascending or descending order.
                <br />
                Users can filter data by specific criteria to narrow results, and large
                datasets are split into pages for quick navigation.
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
                across the TeaWork Dashboard. Consistent form components and built-in
                validation keep every entry reliable and easy to complete.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={['/images/Teawork-Dashboard/MoAHMRj.png']}
              placeholder={'/images/Teawork-Dashboard/7Eof7aC.jpg'}
              alt="TeaWork Dashboard form for collecting and submitting data."
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
            <ProjectNextImage
              srcSet={[
                '/images/Teawork-Dashboard/JMhH8Vh.png',
                '/images/Teawork-Dashboard/JMhH8Vh.png',
              ]}
              placeholder={'/images/Teawork-Dashboard/7Eof7aC.jpg'}
              alt="Enquiry management interface for categorizing and tracking inquiries."
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
