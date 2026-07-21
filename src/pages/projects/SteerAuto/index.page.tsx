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
import styles from './steerauto.module.css';

const title = 'SteerAuto Kun Group';
const description =
  'A used-car marketplace with auctions, maintenance booking, and advanced search filters.';
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
            <ProjectNextImage
              srcSet={[
                '/images/SteerAuto/eMoLuUV.jpg',
                '/images/SteerAuto/eMoLuUV.jpg',
              ]}
              placeholder={'/images/SteerAuto/7Eof7aC.jpg'}
              alt="SteerAuto Kun home page with quick navigation and key services."
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
            <ProjectNextImage
              srcSet={[
                '/images/SteerAuto/30IVUQL.jpg',
                '/images/SteerAuto/30IVUQL.jpg',
              ]}
              placeholder={'/images/SteerAuto/7Eof7aC.jpg'}
              alt="Used car listings showing make, model, year, mileage, and price."
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
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  '/images/SteerAuto/PaJ7aM6.png',
                  '/images/SteerAuto/PaJ7aM6.png',
                ]}
                placeholder={'/images/SteerAuto/7Eof7aC.jpg'}
                alt="Responsive car filter refining results by make, model, and price."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  '/images/SteerAuto/uptqxK1.png',
                  '/images/SteerAuto/uptqxK1.png',
                ]}
                placeholder={'/images/SteerAuto/7Eof7aC.jpg'}
                alt="Car search filter panel adapting to mobile screens."
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
            <ProjectNextImage
              srcSet={[
                '/images/SteerAuto/qkKZN5e.png',
                '/images/SteerAuto/qkKZN5e.png',
              ]}
              placeholder={'/images/SteerAuto/7Eof7aC.jpg'}
              alt="Sell cars flow guiding users through listing their vehicle."
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
                    '/images/SteerAuto/lKMIDzr.jpg',
                    '/images/SteerAuto/lKMIDzr.jpg',
                  ]}
                  placeholder={'/images/SteerAuto/7Eof7aC.jpg'}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
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
            <ProjectNextImage
              srcSet={['/images/SteerAuto/6mtqqG5.png']}
              placeholder={'/images/SteerAuto/7Eof7aC.jpg'}
              alt="Contact page with contact details and inquiry interface."
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
            <ProjectNextImage
              srcSet={[
                '/images/SteerAuto/rRrAQ2t.png',
                '/images/SteerAuto/rRrAQ2t.png',
              ]}
              placeholder={'/images/SteerAuto/7Eof7aC.jpg'}
              alt="Site footer showcasing featured car listings."
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
