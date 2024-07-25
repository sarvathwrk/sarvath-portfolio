import sliceAnnotationLarge from 'assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceAnnotation from 'assets/slice-annotation.png';
import sliceAppLarge from 'assets/slice-app-large.jpg';




// ==== Lap Size == 1 ==== //
import InkyPencilproject1large from 'assets/sarvath/InkyPencil/InkyPencilproject1large.png';
import InkyPencilprojectlap1olaceholder from 'assets/slice-app-placeholder.jpg';




// ==== Lap Size == 2 ==== //
import InkyPencilproject2large from 'assets/sarvath/InkyPencil/InkyPencilproject2large.png';
import InkyPencilproject2ap1olaceholder from 'assets/slice-app-placeholder.jpg';



// ==== Lap Size == 3 ==== //
import InkyPencilproject3large2 from 'assets/sarvath/InkyPencil/InkyPencilproject3large1.png';
import InkyPencilproject3large1 from 'assets/sarvath/InkyPencil/InkyPencilproject3large2.png';

import InkyPencilprojetphone3placeholder1 from 'assets/slice-sidebar-layers-placeholder.png';
import InkyPencilprojetphone3placeholder2 from 'assets/slice-sidebar-annotations-placeholder.png';


// ==== Lap Size == 4 ==== //
import InkyPencilproject4large from 'assets/sarvath/InkyPencil/InkyPencilproject4large.png';

import InkyPencilprojectlap4placeholder from 'assets/slice-app-placeholder.jpg';



// ==== Lap Size == 5 ==== //

import InkyPencilproject5large from 'assets/sarvath/InkyPencil/InkyPencilproject5large.png';
import InkyPencilproject3Placeholder1 from 'assets/slice-background-bar-placeholder.jpg';



// ==== Lap Size == 6 ==== //

import InkyPencilproject6large from 'assets/sarvath/InkyPencil/InkyPencilproject6large.png';
import InkyPencilproject6Placeholder from 'assets/slice-irl-placeholder.jpg';



// ==== Lap Size == 7 ==== //

import InkyPencilproject7large from 'assets/sarvath/InkyPencil/InkyPencilproject7large.png';
import InkyPencilproject7Placeholder from 'assets/slice-app-placeholder.jpg';




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
import styles from './InkyPencil.module.css';

const title = 'InkyPencil';
const description =
    'Devoloped a Project for Showing Events, Translation Service, Stories Books.This is Author Website';
const roles = ['InkyPencil', 'Auther', 'Story Books', 'Events', 'Translation'];


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
                    url="https://inkypencil.com/"
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
                            srcSet={[InkyPencilproject1large, InkyPencilproject1large]}
                            placeholder={InkyPencilprojectlap1olaceholder}
                            alt="The Slice web application showing a selected user annotation."
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
                        />
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection >
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Explore</ProjectSectionHeading>
                            <ProjectSectionText>
                                Explore a world of possibilities with our user-friendly "Explore" feature. Whether you're discovering products, reading articles, or navigating courses, this section is designed for an enriching experience. Make the most of what our platform offers in a concise and engaging format.                            </ProjectSectionText>
                        </ProjectTextRow>
                        <ProjectImage
                            srcSet={[InkyPencilproject2large, InkyPencilproject2large]}
                            placeholder={InkyPencilproject2ap1olaceholder}
                            alt="The Slice web application showing a selected user annotation."
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
                        />
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection>
                    <ProjectSectionColumns centered className={styles.columns}>
                        <div className={styles.imagesText}>
                            <ProjectSectionHeading>Responsive Menu</ProjectSectionHeading>
                            <ProjectSectionText>
                                Experience seamless navigation with our "Responsive Menu." Designed for easy access on any device, it adapts effortlessly to different screen sizes. This user-friendly feature ensures a consistent and enjoyable browsing experience for everyone.                            </ProjectSectionText>

                        </div>
                        <div className={styles.sidebarImages}>

                            <Image
                                className={styles.sidebarImage}
                                srcSet={[InkyPencilproject3large1, InkyPencilproject3large1]}
                                placeholder={InkyPencilprojetphone3placeholder1}
                                alt="Multiple user annotations on a shared layer."
                                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                            />
                            <Image
                                className={styles.sidebarImage}
                                srcSet={[InkyPencilproject3large2, InkyPencilproject3large2]}
                                placeholder={InkyPencilprojetphone3placeholder2}
                                alt="The layers sidebar design, now with user profiles."
                                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                            />
                        </div>
                    </ProjectSectionColumns>
                </ProjectSection>
                <ProjectSection light>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>About Us</ProjectSectionHeading>
                            <ProjectSectionText>
                                Discover the reasons to choose us. From exceptional quality to outstanding customer service, our platform stands out. Explore the advantages that make us the ideal choice for your needs.                            </ProjectSectionText>
                        </ProjectTextRow>
                        <Image
                            srcSet={[InkyPencilproject4large, InkyPencilproject4large]}
                            placeholder={InkyPencilprojectlap4placeholder}
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
                                    srcSet={[InkyPencilproject5large, InkyPencilproject5large]}
                                    placeholder={InkyPencilproject3Placeholder1}
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
                            <ProjectSectionHeading>Hovered Explore Page</ProjectSectionHeading>
                            <ProjectSectionText>
                                Experience enhanced exploration with our "Hovered Explore Card" feature. Get additional details or visual cues as you hover over cards, creating a dynamic and informative user experience. Engage effortlessly with content, whether it's exploring products, articles, or courses.                            </ProjectSectionText>
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
                            src={InkyPencilproject6large}
                            placeholder={InkyPencilproject6Placeholder}
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
                            srcSet={[InkyPencilproject7large, InkyPencilproject7large]}
                            placeholder={InkyPencilproject7Placeholder}
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
