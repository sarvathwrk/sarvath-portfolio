import sliceAnnotationLarge from 'assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceAnnotation from 'assets/slice-annotation.png';
import sliceAppLarge from 'assets/slice-app-large.jpg';




// ==== Lap Size == 1 ==== //
import Wololoproject1large from 'assets/sarvath/Wololo/Wololoproject1large.png';
import Wololoprojectlap1olaceholder from 'assets/slice-app-placeholder.jpg';




// ==== Lap Size == 2 ==== //
import Wololoproject2large from 'assets/sarvath/Wololo/Wololoproject2large.png';
import Wololoproject2ap1olaceholder from 'assets/slice-app-placeholder.jpg';



// ==== Lap Size == 3 ==== //
import Wololoproject3large2 from 'assets/sarvath/Wololo/Wololoproject3large1.png';
import Wololoproject3large1 from 'assets/sarvath/Wololo/Wololoproject3large2.png';

import Wololoprojetphone3placeholder1 from 'assets/slice-sidebar-layers-placeholder.png';
import Wololoprojetphone3placeholder2 from 'assets/slice-sidebar-annotations-placeholder.png';


// ==== Lap Size == 4 ==== //
import Wololoproject4large from 'assets/sarvath/Wololo/Wololoproject4large.png';

import Wololoprojectlap4placeholder from 'assets/slice-app-placeholder.jpg';



// ==== Lap Size == 5 ==== //

import Wololoproject5large from 'assets/sarvath/Wololo/Wololoproject5large.png';
import Wololoproject3Placeholder1 from 'assets/slice-background-bar-placeholder.jpg';



// ==== Lap Size == 6 ==== //

import Wololoproject6large from 'assets/sarvath/Wololo/Wololoproject6large.png';
import Wololoproject6Placeholder from 'assets/slice-irl-placeholder.jpg';



// ==== Lap Size == 7 ==== //

import Wololoproject7large from 'assets/sarvath/Wololo/Wololoproject7large.png';
import Wololoproject7Placeholder from 'assets/slice-app-placeholder.jpg';




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
import styles from './Wololo.module.css';

const title = 'Wololo LTD';
const description =
    'Devoloped a Project for Selling a Cloths,Shoes,Essentials';
const roles = ['Wololo', 'ECommerce',];


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

                                Our "Home Page" is the central hub of our website, designed for easy navigation and quick access to essential information. With a clean and user-friendly layout, it ensures a seamless experience on various devices.
                            </ProjectSectionText>
                        </ProjectTextRow>
                        <ProjectImage
                            srcSet={[Wololoproject1large, Wololoproject1large]}
                            placeholder={Wololoprojectlap1olaceholder}
                            alt="The Slice web application showing a selected user annotation."
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
                        />
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection >
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Blogs</ProjectSectionHeading>
                            <ProjectSectionText>

                                Dive into our concise yet informative "Blogs" section. Updated regularly, it covers a variety of topics, offering valuable insights in a digestible format. Explore thought-provoking content and stay informed with our dynamic blog posts.                            </ProjectSectionText>
                        </ProjectTextRow>
                        <ProjectImage
                            srcSet={[Wololoproject2large, Wololoproject2large]}
                            placeholder={Wololoproject2ap1olaceholder}
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
                                Our "Product Listing" page offers a curated selection, facilitating quick decision-making with key details. Featuring a user-friendly design, customers can easily navigate, explore, and compare products seamlessly. High-quality images and concise descriptions enhance the overall shopping experience.                            </ProjectSectionText>

                        </div>
                        <div className={styles.sidebarImages}>

                            <Image
                                className={styles.sidebarImage}
                                srcSet={[Wololoproject3large1, Wololoproject3large1]}
                                placeholder={Wololoprojetphone3placeholder1}
                                alt="Multiple user annotations on a shared layer."
                                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                            />
                            <Image
                                className={styles.sidebarImage}
                                srcSet={[Wololoproject3large2, Wololoproject3large2]}
                                placeholder={Wololoprojetphone3placeholder2}
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
                                Explore our concise and diverse "Articles" section for insightful and engaging content. Regularly updated, it offers valuable insights across a range of topics, ensuring a dynamic and informative reading experience. Stay informed and entertained with our thought-provoking articles.                            </ProjectSectionText>
                        </ProjectTextRow>
                        <Image
                            srcSet={[Wololoproject4large, Wololoproject4large]}
                            placeholder={Wololoprojectlap4placeholder}
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
                                    srcSet={[Wololoproject5large, Wololoproject5large]}
                                    placeholder={Wololoproject3Placeholder1}
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
                            <ProjectSectionHeading>About Us</ProjectSectionHeading>
                            <ProjectSectionText>
                                Explore our brief "About" page to get a quick overview of our platform's mission, values, and the dedicated team behind our commitment to quality services. Whether you're a user or a visitor, this page provides key insights into who we are and our core principles.                            </ProjectSectionText>
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Contact Us</ProjectSectionHeading>
                            <ProjectSectionText>
                                Visit our "Contact Us" page for quick and direct communication. Accessible from the main menu, it provides essential contact information and a user-friendly form for inquiries or feedback. We prioritize prompt and secure responses to ensure a seamless user experience.                            </ProjectSectionText>
                        </ProjectTextRow>
                        <Image
                            src={Wololoproject6large}
                            placeholder={Wololoproject6Placeholder}
                            alt="Students at the University of New South Wales using the new collaborative annotation features"
                        />
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectSection light>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Footer</ProjectSectionHeading>
                            <ProjectSectionText>
                                Our website footer is a user-friendly space, offering quick access to essential links such as Home, About Us, Products, and Contact Us. Connect with us easily through social media links for instant updates. Designed for seamless navigation, our footer provides a concise overview of our platform.                            </ProjectSectionText>
                        </ProjectTextRow>
                        <Image
                            srcSet={[Wololoproject7large, Wololoproject7large]}
                            placeholder={Wololoproject7Placeholder}
                            alt="The new My Slides tab in slice, showing annotated and favorited slides."
                            sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
                        />
                    </ProjectSectionContent>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};


export default Details;
