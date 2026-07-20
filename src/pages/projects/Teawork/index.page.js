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
import styles from './teawork.module.css';

const title = 'Teawork LTD';
const description =
  'Developed a Project for Buying and Selling Food Products, Whole Seller Dealer Login, Customer logged with Buying Ingredients';
const roles = ['Teawork', 'WholeSeller Login', 'Customer login', 'ECommerce', 'Cart'];

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
          // url="http://52.15.38.12:55224/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Home Page</ProjectSectionHeading>
              <ProjectSectionText>
                Our "Home Page" is the central hub of our website, designed for easy
                navigation and quick access to essential information. With a clean and
                user-friendly layout, it ensures a seamless experience on various devices.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/Teawork/7GQJVKL.jpg',
                '/images/Teawork/7GQJVKL.jpg',
              ]}
              placeholder={'/images/Teawork/7Eof7aC.jpg'}
              alt="Teawork home page for buying and selling food products."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Product Listing with Filter</ProjectSectionHeading>
              <ProjectSectionText>
                Explore our products effortlessly with the "Product Listing with Filter"
                feature. Tailor your search with easy-to-use filters, ensuring a
                personalized and efficient shopping experience. Responsive and
                user-friendly, this feature provides a seamless journey across devices.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/Teawork/TWae4CM.png',
                '/images/Teawork/TWae4CM.png',
              ]}
              placeholder={'/images/Teawork/7Eof7aC.jpg'}
              alt="Product listing page with filters for browsing food ingredients."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Login Page with Responsive</ProjectSectionHeading>
              <ProjectSectionText>
                Our "Login Page with Responsive" feature ensures a smooth and
                user-friendly experience, adapting seamlessly to different devices.
                Whether on desktop or mobile, users can securely log in with a consistent
                and optimized interface for enhanced accessibility and convenience.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  '/images/Teawork/RrFUI47.png',
                  '/images/Teawork/RrFUI47.png',
                ]}
                placeholder={'/images/Teawork/7Eof7aC.jpg'}
                alt="Responsive login page for wholesalers and customers."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  '/images/Teawork/uWzFZHn.png',
                  '/images/Teawork/uWzFZHn.png',
                ]}
                placeholder={'/images/Teawork/7Eof7aC.jpg'}
                alt="Login screen adapting seamlessly across desktop and mobile devices."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Product Details</ProjectSectionHeading>
              <ProjectSectionText>
                Our "Product Detail Page" offers a detailed view of each product,
                including specifications, Ingredients, pricing, and availability. With
                high-quality images and clear descriptions, users can easily understand
                the product. The page is designed for seamless navigation and
                responsiveness across devices, allowing users to explore additional
                details and make informed decisions.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/Teawork/VNjNPKk.png',
                '/images/Teawork/VNjNPKk.png',
              ]}
              placeholder={'/images/Teawork/7Eof7aC.jpg'}
              alt="Product detail page showing ingredients, pricing, and availability."
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
                    '/images/Teawork/UxeeuVT.png',
                    '/images/Teawork/UxeeuVT.png',
                  ]}
                  placeholder={'/images/Teawork/7Eof7aC.jpg'}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Recipe of the Week</ProjectSectionHeading>
              <ProjectSectionText>
                Our "Recipe of the Week" Page is for Showing a Special Ingredients with
                Deals
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Product Reservation</ProjectSectionHeading>
              <ProjectSectionText>
                Our system simplifies product reservations, allowing users to seamlessly
                select items, specify quantities, and complete the reservation form. With
                real-time availability updates and integration with user accounts, it
                provides a convenient and secure way for customers to reserve their
                preferred products effortlessly.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={['/images/Teawork/Zrl6AhN.png']}
              placeholder={'/images/Teawork/7Eof7aC.jpg'}
              alt="Product reservation form for selecting items and quantities."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Customer Profile Page</ProjectSectionHeading>
              <ProjectSectionText>
                The "Customer Profile Page" is a personalized space for users to manage
                account details, preferences, and order history. With a user-friendly
                design, customers can easily navigate, update information, and track
                orders. The responsive layout ensures accessibility across devices,
                providing a seamless and convenient user experience.
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                '/images/Teawork/FfVSdek.png',
                '/images/Teawork/FfVSdek.png',
              ]}
              placeholder={'/images/Teawork/7Eof7aC.jpg'}
              alt="Customer profile page managing account details and order history."
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
