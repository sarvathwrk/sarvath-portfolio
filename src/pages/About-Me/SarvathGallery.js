


import GalleryLarge1 from 'assets/sarvath/GalleryLarge1.png';

import GalleryLargePlaceholder from 'assets/volkihar-background-placeholder.jpg';



import GalleryLarge2 from 'assets/sarvath/GalleryLarge2.jpg';
import GalleryLarge2placeholder from 'assets/volkihar-enderal-placeholder.jpg';

import GallerySlider1 from 'assets/sarvath/GallerySlider1.png';
import GallerySlider2 from 'assets/sarvath/GallerySlider2.png';




import volkiharEnderalLogoLarge from 'assets/volkihar-enderal-logo-large.png';
import volkiharEnderalLogoPlaceholder from 'assets/volkihar-enderal-logo-placeholder.png';
import volkiharEnderalLogo from 'assets/volkihar-enderal-logo.png';
import volkiharSlide3Large from 'assets/volkihar-slide-3-large.jpg';
import volkiharSlide3 from 'assets/volkihar-slide-3.jpg';
import volkiharSlidePlaceholder from 'assets/volkihar-slide-placeholder.jpg';
import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment, useEffect, useRef, useState } from 'react';
import { media } from 'utils/style';



// import PDF from 'react-pdf-js-infinite';

const Carousel = dynamic(() => import('components/Carousel').then(mod => mod.Carousel));

const title = 'Mohamed Sarvath Khan';
const description =
  `A dynamic and skilled Full Stack Web Developer with a two-year journey in the world of web development. Navigating through the ever-evolving landscape of technology, I've had the privilege of working on a variety of projects that have honed my skills and enriched my experience.

`;
const roles = ['Full Stack Developer', 'React JS', 'Next JS', 'Node JS', 'Express JS'];



export function VolkiharKnight() {
  // 'ndfHFb-c4YZDc-cYSp0e ndfHFb-c4YZDc-oKVyEf'
  const [currentImage, setCurrentImage] = useState(1);

  console.log("useEffect");

  const revealContainer = useRef(null);
  const jobsData = []


  useEffect(() => {
    const changeImage = () => {
      setCurrentImage((prevImage) => (prevImage % 8) + 1);
    };
    const intervalId = setInterval(changeImage, 4000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 240 211 150;
              --rgbAccent: 240 211 150;
            }
            [data-theme='light'] {
              --rgbPrimary: 134 99 23;
              --rgbAccent: 134 99 23;
            }
          `,
        }}
      />


      <ProjectContainer>
        <ProjectBackground
          srcSet={[GalleryLarge1, GalleryLarge1]}
          placeholder={GalleryLargePlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Reach Me"
          url="/contact"
          roles={roles}
        />
        {/* <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[volkiharBanner, volkiharBannerLarge]}
              placeholder={volkiharBannerPlaceholder}
              alt="A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection> */}

        <ProjectSection>
          <div style={{ width: "50vw", height: "85vh", background: "white" }} >
            <iframe
              className='Resumeclass'
              id='Resume'
              src="http://localhost:3001/SarvathResume.pdf#toolbar=0&zoom=115"
              style={{ width: "100%", height: "100%", background: "white", }} />
          </div>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <Carousel
              placeholder={volkiharSlidePlaceholder}
              autoslide={true}
              images={[
                {
                  srcSet: [GallerySlider1, GallerySlider1],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A female character wearing the black coloured armor set.',
                },
                {
                  srcSet: [GallerySlider2, GallerySlider2],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A close up of the custom gauntlets design.',
                },
                {
                  srcSet: [volkiharSlide3, volkiharSlide3Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A female character wielding a sword and wearing the red coloured armor.',
                },
              ]}
              width={1920}
              height={1080}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>






        </ProjectSection>

        <ProjectSection
          backgroundElement={
            <Image
              srcSet={[GalleryLarge2, GalleryLarge2]}
              placeholder={GalleryLarge2placeholder}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              {/* <Image
                srcSet={[volkiharEnderalLogo, volkiharEnderalLogoLarge]}
                placeholder={volkiharEnderalLogoPlaceholder}
                alt="The Enderal game logo"
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              /> */}
              <div class="image-container">
                <img src={`/SarvathLogo${currentImage}.png`}
                  placeholder={volkiharEnderalLogoPlaceholder}
                  className='logoiconGallery'
                  alt="The Enderal game logo"
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                />
              </div>
              <ProjectSectionHeading>Let's Connect</ProjectSectionHeading>
              <ProjectSectionText>
                In my two years as a Full Stack Web Developer, I've successfully delivered impactful projects, from designing responsive and intuitive user interfaces to architecting robust back-end systems.
              </ProjectSectionText>
              <ProjectSectionText>
                I welcome opportunities for collaboration, discussion, and networking. If you're interested in exploring potential projects or just want to connect, feel free to reach out through Click Below Link to Reach Me.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevronRight"
                href="/contact"
              >
                Reach me
              </Button>

            </ProjectTextRow>


          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>

      <Footer />
    </Fragment>
  );
}
