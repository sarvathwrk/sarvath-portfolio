
// ==== Lap Size == 1 ==== //
import futurebankproject1large from 'assets/sarvath/futurebank/futurebankproject1large.png';
import futurebankprojectlap1olaceholder from 'assets/slice-app-placeholder.jpg';
// ==== Lap Size == 2 ==== //
import futurebankproject2large from 'assets/sarvath/futurebank/futurebankproject2large.png';
import futurebankproject2ap1olaceholder from 'assets/slice-app-placeholder.jpg';

// ==== Lap Size == 3 ==== //
import futurebankproject3large2 from 'assets/sarvath/futurebank/futurebankproject3large1.png';
import futurebankproject3large1 from 'assets/sarvath/futurebank/futurebankproject3large2.png';
import futurebankprojetphone3placeholder1 from 'assets/slice-sidebar-layers-placeholder.png';
import futurebankprojetphone3placeholder2 from 'assets/slice-sidebar-annotations-placeholder.png';

// ==== Lap Size == 4 ==== //
import futurebankproject4large from 'assets/sarvath/futurebank/futurebankproject4large.png';
import futurebankprojectlap4placeholder from 'assets/slice-app-placeholder.jpg';

// ==== Lap Size == 5 ==== //

import futurebankproject5large from 'assets/sarvath/futurebank/futurebankproject5large.png';
import futurebankproject3Placeholder1 from 'assets/slice-background-bar-placeholder.jpg';

// ==== Lap Size == 6 ==== //

import futurebankproject6large from 'assets/sarvath/futurebank/futurebankproject6large.png';
import futurebankproject6Placeholder from 'assets/slice-irl-placeholder.jpg';

// ==== Lap Size == 7 ==== //

import futurebankproject7large from 'assets/sarvath/futurebank/futurebankproject7large.png';
import futurebankproject7Placeholder from 'assets/slice-app-placeholder.jpg';


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
import styles from './futurebank.module.css';

const title = 'KSA-FutureBank Summit';
const description =
    'Devoloped a Project for Buying and Selling Food Products, Whole Seller Dealer Login, Customer logged with Buying Ingredients';
const roles = ['KSA-FutureBank Summit', 'Mockup Website', 'Free Lance', 'Static Site',];

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
                    url="https://sarvathwrk.github.io/ksa-futurebank/"
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
                            srcSet={[futurebankproject1large, futurebankproject1large]}
                            placeholder={futurebankprojectlap1olaceholder}
                            alt="The Slice web application showing a selected user annotation."
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
                        />
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection >
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Who will you meet</ProjectSectionHeading>
                            <ProjectSectionText>
                                "Who will you meet" holds the promise of diverse encounters and experiences. Whether connecting with professionals, discovering new perspectives, or exploring opportunities, the possibilities are vast. It's an invitation to engage and embrace the richness of varied encounters.                            </ProjectSectionText>
                        </ProjectTextRow>
                        <ProjectImage
                            srcSet={[futurebankproject2large, futurebankproject2large]}
                            placeholder={futurebankproject2ap1olaceholder}
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
                                srcSet={[futurebankproject3large1, futurebankproject3large1]}
                                placeholder={futurebankprojetphone3placeholder1}
                                alt="Multiple user annotations on a shared layer."
                                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                            />
                            <Image
                                className={styles.sidebarImage}
                                srcSet={[futurebankproject3large2, futurebankproject3large2]}
                                placeholder={futurebankprojetphone3placeholder2}
                                alt="The layers sidebar design, now with user profiles."
                                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                            />
                        </div>
                    </ProjectSectionColumns>
                </ProjectSection>
                <ProjectSection light>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Footer</ProjectSectionHeading>
                            <ProjectSectionText>
                                Our website footer is a user-friendly space, offering quick access. Connect with us easily through social media links for instant updates. Designed for seamless navigation, our footer provides a concise overview of our platform.                            </ProjectSectionText>

                        </ProjectTextRow>
                        <Image
                            srcSet={[futurebankproject4large, futurebankproject4large]}
                            placeholder={futurebankprojectlap4placeholder}
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
                                    srcSet={[futurebankproject5large, futurebankproject5large]}
                                    placeholder={futurebankproject3Placeholder1}
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
                            <ProjectSectionHeading>Topic Highlights</ProjectSectionHeading>
                            <ProjectSectionText>
                                Our "Topic Highlights" offers a brief yet comprehensive overview, ensuring easy access to key information on various subjects. Designed for efficiency, users can quickly explore and gain targeted insights.                            </ProjectSectionText>
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Responsive Cards</ProjectSectionHeading>
                            <ProjectSectionText>
                                "Responsive Cards" ensure a seamless and visually appealing experience across devices. These user-friendly cards dynamically adapt to different screen sizes, enhancing accessibility and providing optimal viewing on desktop, tablet, or mobile.                            </ProjectSectionText>
                        </ProjectTextRow>
                        <Image
                            src={futurebankproject6large}
                            placeholder={futurebankproject6Placeholder}
                            alt="Students at the University of New South Wales using the new collaborative annotation features"
                        />
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectSection light>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Contact Us</ProjectSectionHeading>
                            <ProjectSectionText>
                                Our "Contact Us" page includes a user-friendly map, making it easy to locate our address. This interactive feature enhances the user experience, providing a convenient way to find and connect with us.                            </ProjectSectionText>
                        </ProjectTextRow>
                        <Image
                            srcSet={[futurebankproject7large, futurebankproject7large]}
                            placeholder={futurebankproject7Placeholder}
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
