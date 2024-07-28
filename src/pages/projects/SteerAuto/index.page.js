// ==== Lap Size == 1 ==== //
import steerautoproject1large from 'assets/sarvath/steerauto/steerautoproject1large.png';
import steerautoprojectlap1olaceholder from 'assets/slice-app-placeholder.jpg';

// ==== Lap Size == 2 ==== //
import steerautoproject2large from 'assets/sarvath/steerauto/steerautoproject2large.png';
import steerautoproject2ap1olaceholder from 'assets/slice-app-placeholder.jpg';

// ==== Lap Size == 3 ==== //
import steerautoproject3large2 from 'assets/sarvath/steerauto/steerautoproject3large1.png';
import steerautoproject3large1 from 'assets/sarvath/steerauto/steerautoproject3large2.png';

import steerautoprojectphone3placeholder1 from 'assets/slice-sidebar-layers-placeholder.png';
import steerautoprojectphone3placeholder2 from 'assets/slice-sidebar-annotations-placeholder.png';

// ==== Lap Size == 4 ==== //
import steerautoproject4large from 'assets/sarvath/steerauto/steerautoproject4large.png';

import steerautoprojectlap4placeholder from 'assets/slice-app-placeholder.jpg';

// ==== Lap Size == 5 ==== //

import steerautoproject5large from 'assets/sarvath/steerauto/steerautoproject5large.png';
import steerautoproject3Placeholder1 from 'assets/slice-background-bar-placeholder.jpg';

// ==== Lap Size == 6 ==== //

import steerautoproject6large from 'assets/sarvath/steerauto/steerautoproject6large.png';
import steerautoproject6Placeholder from 'assets/slice-irl-placeholder.jpg';

// ==== Lap Size == 7 ==== //

import steerautoproject7large from 'assets/sarvath/steerauto/steerautoproject7large.png';
import steerautoproject7Placeholder from 'assets/slice-app-placeholder.jpg';

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
import styles from './steerauto.module.css';

const title = 'SteerAuto Kun Group';
const description =
  'Devoloped a Project for Buying and Selling Used Cars, Auctions, Maintanence Works, Filter Feature for Buying Car Page etc';
const roles = [
  'SteerAuto Site',
  'Buying and Selling Cars',
  'Maintanance Works',
  'Auction Cars',
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
          url="https://steerauto.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Home Page</ProjectSectionHeading>
              <ProjectSectionText>
                Our home page is a concise, user-friendly gateway to our website. It
                offers quick navigation, featuring essential information and services in a
                minimalist design. With a focus on simplicity, users can easily access key
                sections for a streamlined and efficient browsing experience.{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectImage
              srcSet={[steerautoproject1large, steerautoproject1large]}
              placeholder={steerautoprojectlap1olaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Used Car listing</ProjectSectionHeading>
              <ProjectSectionText>
                Our "Used Car Listing" feature presents a curated collection of pre-owned
                vehicles, complete with essential details such as make, model, year,
                mileage, and pricing. Users can easily browse and compare listings with a
                straightforward, user-friendly interface, ensuring a seamless experience
                across devices.{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectImage
              srcSet={[steerautoproject2large, steerautoproject2large]}
              placeholder={steerautoproject2ap1olaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Responsive Car Filter </ProjectSectionHeading>
              <ProjectSectionText>
                Our "Responsive Car Filter" offers users a seamless and adaptable way to
                refine their car search across all devices. Whether on a desktop or
                mobile, the filter provides a user-friendly experience, allowing easy
                customization based on criteria such as make, model, year, and price
                range.{' '}
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[steerautoproject3large1, steerautoproject3large1]}
                placeholder={steerautoprojectphone3placeholder1}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[steerautoproject3large2, steerautoproject3large2]}
                placeholder={steerautoprojectphone3placeholder2}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Sell Cars</ProjectSectionHeading>
              <ProjectSectionText>
                "Sell Cars" on our platform is a streamlined experience, guiding users
                through each step of the selling process with simplicity and security. The
                user-friendly interface ensures easy navigation and responsive design,
                making it accessible across various devices.{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[steerautoproject4large, steerautoproject4large]}
              placeholder={steerautoprojectlap4placeholder}
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
                  srcSet={[steerautoproject5large, steerautoproject5large]}
                  placeholder={steerautoproject3Placeholder1}
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
              <ProjectSectionHeading>Testimonials</ProjectSectionHeading>
              <ProjectSectionText>
                Our "Testimonials" section highlights positive feedback from satisfied
                users, providing valuable insights into their experiences with our
                platform. It's a concise showcase of real-life success stories,
                emphasizing trust and credibility.{' '}
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Contact Us</ProjectSectionHeading>
              <ProjectSectionText>
                "Contact Us" is your direct link to us. Accessible from the main menu, it
                offers essential contact information and a user-friendly interface,
                ensuring easy communication for inquiries or support.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={steerautoproject6large}
              placeholder={steerautoproject6Placeholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                Footer with Featured Car Listing
              </ProjectSectionHeading>
              <ProjectSectionText>
                Explore standout vehicles effortlessly with our footer's featured car
                listings. Seamlessly integrated, these curated selections offer a quick
                glimpse of noteworthy cars for an enhanced browsing experience.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[steerautoproject7large, steerautoproject7large]}
              placeholder={steerautoproject7Placeholder}
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
