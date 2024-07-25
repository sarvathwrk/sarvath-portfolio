import sliceAnnotationLarge from 'assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceAnnotation from 'assets/slice-annotation.png';
import sliceAppLarge from 'assets/slice-app-large.jpg';




// ==== Lap Size == 1 ==== //
import VidhyaOnlineproject1large from 'assets/sarvath/VidhyaOnline/VidhyaOnlineproject1large.png';
import VidhyaOnlineprojectlap1olaceholder from 'assets/slice-app-placeholder.jpg';




// ==== Lap Size == 2 ==== //
import VidhyaOnlineproject2large from 'assets/sarvath/VidhyaOnline/VidhyaOnlineproject2large.png';
import VidhyaOnlineproject2ap1olaceholder from 'assets/slice-app-placeholder.jpg';



// ==== Lap Size == 3 ==== //
import VidhyaOnlineproject3large2 from 'assets/sarvath/VidhyaOnline/VidhyaOnlineproject3large1.png';
import VidhyaOnlineproject3large1 from 'assets/sarvath/VidhyaOnline/VidhyaOnlineproject3large2.png';

import VidhyaOnlineprojetphone3placeholder1 from 'assets/slice-sidebar-layers-placeholder.png';
import VidhyaOnlineprojetphone3placeholder2 from 'assets/slice-sidebar-annotations-placeholder.png';


// ==== Lap Size == 4 ==== //
import VidhyaOnlineproject4large from 'assets/sarvath/VidhyaOnline/VidhyaOnlineproject4large.png';

import VidhyaOnlineprojectlap4placeholder from 'assets/slice-app-placeholder.jpg';



// ==== Lap Size == 5 ==== //

import VidhyaOnlineproject5large from 'assets/sarvath/VidhyaOnline/VidhyaOnlineproject5large.png';
import VidhyaOnlineproject3Placeholder1 from 'assets/slice-background-bar-placeholder.jpg';



// ==== Lap Size == 6 ==== //

import VidhyaOnlineproject6large from 'assets/sarvath/VidhyaOnline/VidhyaOnlineproject6large.png';
import VidhyaOnlineproject6Placeholder from 'assets/slice-irl-placeholder.jpg';



// ==== Lap Size == 7 ==== //

import VidhyaOnlineproject7large from 'assets/sarvath/VidhyaOnline/VidhyaOnlineproject7large.png';
import VidhyaOnlineproject7Placeholder from 'assets/slice-app-placeholder.jpg';


// ==== Lap Size == 8 ==== //

import VidhyaOnlineproject8large from 'assets/sarvath/VidhyaOnline/VidhyaOnlineproject8large.png';
import VidhyaOnlineproject8Placeholder from 'assets/slice-app-placeholder.jpg';




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
import styles from './vidhyaonline.module.css';

const title = 'Vidhyaonline Coromandel Group';
const description =
    'Devoloped a Project for Learning Comapny Related Courses Provided by VidhyaOnline. We Have Quiz Questions in Middle of Video, Getting Reports At the Last of Video and Download Certificate After Finished Course';
const roles = ['Vidhyaonline', 'Employee Login', 'Learning Courses', 'Get Reports', 'Download Certificate'];


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
                    url="https://vidhyaonline.biz/"
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
                            srcSet={[VidhyaOnlineproject1large, VidhyaOnlineproject1large]}
                            placeholder={VidhyaOnlineprojectlap1olaceholder}
                            alt="The Slice web application showing a selected user annotation."
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
                        />
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection >
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Own Ad Video Listing</ProjectSectionHeading>
                            <ProjectSectionText>
                                Discover a curated collection of tech tutorials, project demos, and innovation insights in my Video Hub. Explore categories, search for specific content, and join me in the fusion of code and creativity! 🚀
                            </ProjectSectionText>
                        </ProjectTextRow>
                        <ProjectImage
                            srcSet={[VidhyaOnlineproject2large, VidhyaOnlineproject2large]}
                            placeholder={VidhyaOnlineproject2ap1olaceholder}
                            alt="The Slice web application showing a selected user annotation."
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
                        />
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection>
                    <ProjectSectionColumns centered className={styles.columns}>
                        <div className={styles.imagesText}>
                            <ProjectSectionHeading>Login Page with Responsive</ProjectSectionHeading>
                            <ProjectSectionText>
                                Our "Login Page with Responsive" feature ensures a smooth and user-friendly experience, adapting seamlessly to different devices. Whether on desktop or mobile, users can securely log in with a consistent and optimized interface for enhanced accessibility and convenience.
                            </ProjectSectionText>

                        </div>
                        <div className={styles.sidebarImages}>

                            <Image
                                className={styles.sidebarImage}
                                srcSet={[VidhyaOnlineproject3large1, VidhyaOnlineproject3large1]}
                                placeholder={VidhyaOnlineprojetphone3placeholder1}
                                alt="Multiple user annotations on a shared layer."
                                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                            />
                            <Image
                                className={styles.sidebarImage}
                                srcSet={[VidhyaOnlineproject3large2, VidhyaOnlineproject3large2]}
                                placeholder={VidhyaOnlineprojetphone3placeholder2}
                                alt="The layers sidebar design, now with user profiles."
                                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                            />
                        </div>
                    </ProjectSectionColumns>
                </ProjectSection>
                <ProjectSection light>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Courses List</ProjectSectionHeading>
                            <ProjectSectionText>
                                Explore our courses effortlessly with key details at your fingertips. Each course, succinctly presented with instructor names, durations, and prerequisites, offers a quick snapshot for informed decisions. Streamlined enrollment links ensure a seamless journey from exploration to registration, creating an efficient and user-friendly experience.
                            </ProjectSectionText>
                        </ProjectTextRow>
                        <Image
                            srcSet={[VidhyaOnlineproject4large, VidhyaOnlineproject4large]}
                            placeholder={VidhyaOnlineprojectlap4placeholder}
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
                                    srcSet={[VidhyaOnlineproject5large, VidhyaOnlineproject5large]}
                                    placeholder={VidhyaOnlineproject3Placeholder1}
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
                            <ProjectSectionHeading>Course Completion Progress</ProjectSectionHeading>
                            <ProjectSectionText>
                                The "Course Completion Percentage" offers users a clear visual indicator of their progress in a course. This feature provides a quick overview of the percentage of the course that users have completed, aiding in tracking their advancement. This visual feedback promotes motivation and engagement, enhancing the overall learning experience.
                            </ProjectSectionText>
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Sub Course List</ProjectSectionHeading>
                            <ProjectSectionText>
                                In the Sub Course List we see the attend and Last Seen Report at the middle of Card, Resume the Course and View Certificate For the Course
                            </ProjectSectionText>
                        </ProjectTextRow>
                        <Image
                            src={VidhyaOnlineproject6large}
                            placeholder={VidhyaOnlineproject6Placeholder}
                            alt="Students at the University of New South Wales using the new collaborative annotation features"
                        />
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectSection light>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Overall Course Report</ProjectSectionHeading>
                            <ProjectSectionText>


                                The "Overall Course Report" succinctly captures a user's performance, detailing metrics such as total time spent, quiz scores, and completed assignments                            </ProjectSectionText>
                        </ProjectTextRow>
                        <Image
                            srcSet={[VidhyaOnlineproject7large, VidhyaOnlineproject7large]}
                            placeholder={VidhyaOnlineproject7Placeholder}
                            alt="The new My Slides tab in slice, showing annotated and favorited slides."
                            sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
                        />
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection light>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Contact Us</ProjectSectionHeading>
                            <ProjectSectionText>
                                Visit our "Contact Us" page for quick and direct communication. Accessible from the main menu, it provides essential contact information and a user-friendly form for inquiries or feedback. We prioritize prompt and secure responses to ensure a seamless user experience.                            </ProjectSectionText>
                        </ProjectTextRow>
                        <Image
                            srcSet={[VidhyaOnlineproject8large, VidhyaOnlineproject8large]}
                            placeholder={VidhyaOnlineproject8Placeholder}
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
