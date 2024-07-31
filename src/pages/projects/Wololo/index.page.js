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
import styles from './Wololo.module.css';

const title = 'Wololo LTD';
const description = 'Devoloped a Project for Selling a Cloths,Shoes,Essentials';
const roles = ['Wololo', 'ECommerce'];

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
          url="https://wololo.co.uk/"
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
                'https://i.imgur.com/FUffDfr.jpg',
                'https://i.imgur.com/FUffDfr.jpg',
              ]}
              placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Blogs</ProjectSectionHeading>
              <ProjectSectionText>
                Dive into our concise yet informative "Blogs" section. Updated regularly,
                it covers a variety of topics, offering valuable insights in a digestible
                format. Explore thought-provoking content and stay informed with our
                dynamic blog posts.{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                'https://i.imgur.com/nfyFKYj.jpg',
                'https://i.imgur.com/nfyFKYj.jpg',
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
              <ProjectSectionHeading>Product Listing</ProjectSectionHeading>
              <ProjectSectionText>
                Our "Product Listing" page offers a curated selection, facilitating quick
                decision-making with key details. Featuring a user-friendly design,
                customers can easily navigate, explore, and compare products seamlessly.
                High-quality images and concise descriptions enhance the overall shopping
                experience.{' '}
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  'https://i.imgur.com/2DvIfmz.png',
                  'https://i.imgur.com/2DvIfmz.png',
                ]}
                placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <ProjectNextImage
                className={styles.sidebarImage}
                srcSet={[
                  'https://i.imgur.com/IdvcoUH.png',
                  'https://i.imgur.com/IdvcoUH.png',
                ]}
                placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Articles</ProjectSectionHeading>
              <ProjectSectionText>
                Explore our concise and diverse "Articles" section for insightful and
                engaging content. Regularly updated, it offers valuable insights across a
                range of topics, ensuring a dynamic and informative reading experience.
                Stay informed and entertained with our thought-provoking articles.{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                'https://i.imgur.com/jb1fkSu.jpg',
                'https://i.imgur.com/jb1fkSu.jpg',
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
                    'https://i.imgur.com/uTZsddm.png',
                    'https://i.imgur.com/uTZsddm.png',
                  ]}
                  placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>About Us</ProjectSectionHeading>
              <ProjectSectionText>
                Explore our brief "About" page to get a quick overview of our platform's
                mission, values, and the dedicated team behind our commitment to quality
                services. Whether you're a user or a visitor, this page provides key
                insights into who we are and our core principles.{' '}
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Contact Us</ProjectSectionHeading>
              <ProjectSectionText>
                Visit our "Contact Us" page for quick and direct communication. Accessible
                from the main menu, it provides essential contact information and a
                user-friendly form for inquiries or feedback. We prioritize prompt and
                secure responses to ensure a seamless user experience.{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                'https://i.imgur.com/Nw5m1YL.png',
                'https://i.imgur.com/Nw5m1YL.png',
              ]}
              placeholder={'https://i.imgur.com/7Eof7aC.jpg'}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Footer</ProjectSectionHeading>
              <ProjectSectionText>
                Our website footer is a user-friendly space, offering quick access to
                essential links such as Home, About Us, Products, and Contact Us. Connect
                with us easily through social media links for instant updates. Designed
                for seamless navigation, our footer provides a concise overview of our
                platform.{' '}
              </ProjectSectionText>
            </ProjectTextRow>
            <ProjectNextImage
              srcSet={[
                'https://i.imgur.com/X6nV3k7.png',
                'https://i.imgur.com/X6nV3k7.png',
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
