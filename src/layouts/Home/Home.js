// ==== Project 1 ==== //
import aqaryTextureLarge from 'assets/sarvath/AqaryLaptopLarge.png';
import aqaryTexture from 'assets/sarvath/AqaryLaptopSmall.png';
import aqaryTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
// ==== Project 1 ==== END ==== //

// ==== Project 2 ==== //
import foodtekcolaplarge from 'assets/sarvath/foodtekcolaptoplarge.png';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';

import foodtekcohonelarge from 'assets/sarvath/foodtekcophonelarge.png';
import foodtekcohonesmall from 'assets/sarvath/foodtekcophonesmall.png';

// ==== Project 2 ==== END ==== //

// ==== Project 3 TeaWork Dashboard==== //
import {
  default as teaworkdashboard,
  default as teaworkdashboardLarge,
} from 'assets/sarvath/teaworkdashboardLarge.png';
import teaworkdashboardPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
// ==== Project 3 ==== END ==== //

// ==== Project 4  teawork Website ==== //
import {
  default as teaworklarge,
  default as teaworksmall,
} from 'assets/sarvath/teaworklarge.png';
import teaworkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';

import {
  default as teaworkphonelarge,
  default as teaworkphonesmall,
} from 'assets/sarvath/teaworkphonelarge.png';

// ==== Project 2 ==== END ==== //

// ==== Project 2 ==== //

import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import {
  default as gamestackTexture2lap,
  default as gamestackTexture2lapLarge,
} from 'assets/sarvath/steerautolap.png';
import gamestackTexture from 'assets/sarvath/steerautophone2.png';

import gamestackTexture2Large from 'assets/sarvath/steerautophone2.png';
// ==== END ==== //

//  ==== project 5 vidhya ==== //

import vidhyaonlinephone2 from 'assets/sarvath/vidhyaphone2.png';
import vidhyaonlinephone1 from 'assets/sarvath/vidhyaphonelarge.png';

import vidhyaonlinecover from 'assets/gamestack-login-placeholder.jpg';

// ==== END ==== //

//  ==== project 6 Difuza ==== //

import difuzalaplarge from 'assets/sarvath/vidhyaonlinelaplarge.png';
import difuzalapcover from 'assets/slice-app-placeholder.jpg';

// ==== END ==== //

//  ==== project 6 Difuza ==== //
import inkypencillaplarge from 'assets/sarvath/inkypencillaptoplarge.png';
import inkypencilphonelarge from 'assets/sarvath/inkypencilphonelarge.png';
import {
  default as inkypencillapcover,
  default as inkypencilphonecover,
} from 'assets/slice-app-placeholder.jpg';

// ==== END ==== //

// ==== project 7 wololo ==== //

import Wolololaplarge from 'assets/sarvath/Wolololaplarge.png';
import WololoCover from 'assets/spr-lesson-builder-dark-placeholder.jpg';

// ==== END ==== //

// ==== project 7 wololo ==== //

import futurebanklarge from 'assets/sarvath/futurebanklarge.png';
import futurebankCover from 'assets/spr-lesson-builder-dark-placeholder.jpg';

// ==== END ==== //

import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = [
  'Next JS',
  'Typescript',
  'React JS',
  'Node JS',
  'Express JS',
  'Mongo DB',
  'MySQL',
  'Firebase',
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectseven = useRef();
  const projecteight = useRef();
  const projectnine = useRef();
  const projectten = useRef();

  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      projectSix,
      projectseven,
      projecteight,
      projectnine,
      projectten,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Full Stack Developer"
        description="Portfolio of Mohamed Sarvath Khan — As a passionate full-stack developer, I thrive on transforming ideas into functional and elegant digital solutions. This is my digital playground, where innovation meets expertise."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Aqary International Group"
        description="Devoloped a Project for Buying and Selling Real Estate Properties and Get All Types of Reports and User Details in Dashboard"
        buttonText="View Project"
        buttonLink="/projects/Aqary"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [aqaryTexture, aqaryTextureLarge],
              placeholder: aqaryTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="FOODTEKCO LTD"
        description="Design and development for a video game tracking app built in React Native"
        buttonText="View Project"
        buttonLink="/projects/Foodtekco"
        model={{
          type: 'macwithphone',
          alt: 'Foodtecko',
          textures: [
            {
              srcSet: [foodtekcohonesmall, foodtekcohonelarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [foodtekcolaplarge, foodtekcolaplarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="TeaWork Dashboard"
        description="Devoloped a Project for Buying and Selling Food Products and Get All Types of Reports and User Details in Dashboard"
        buttonText="View Project"
        buttonLink="/projects/Teawork-Dashboard"
        model={{
          type: 'laptop',
          alt: 'Teawork-Dashboard',
          textures: [
            {
              srcSet: [teaworkdashboard, teaworkdashboardLarge],
              placeholder: teaworkdashboardPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Teawork PVT"
        description="Devoloped a Project for Buying and Selling Food Products, Whole Seller Dealer Login, Customer logged with Buying Ingredients"
        buttonText="View Project"
        buttonLink="/projects/Teawork"
        model={{
          type: 'macwithphone',
          alt: 'Teawork',
          textures: [
            {
              srcSet: [teaworkphonesmall, teaworkphonelarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [teaworksmall, teaworklarge],
              placeholder: teaworkPlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Difuza Service Dashboard"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View Project"
        buttonLink="/projects/Difuza"
        model={{
          type: 'laptop',
          alt: 'Difuza',
          textures: [
            {
              srcSet: [difuzalaplarge, difuzalaplarge],
              placeholder: difuzalapcover,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="VidhyaOnline Coromandel Group"
        description="Design and development for a video game tracking app built in React Native"
        buttonText="View Project"
        buttonLink="/projects/VidhyaOnline"
        model={{
          type: 'phone',
          alt: 'VidhyaOnline',
          textures: [
            {
              srcSet: [vidhyaonlinephone1, vidhyaonlinephone1],
              placeholder: vidhyaonlinecover,
            },
            {
              srcSet: [vidhyaonlinephone2, vidhyaonlinephone2],
              placeholder: vidhyaonlinecover,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-7"
        sectionRef={projectseven}
        visible={visibleSections.includes(projectseven.current)}
        index={7}
        title="Wololo LTD"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View Project"
        buttonLink="/projects/Wololo"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [Wolololaplarge, Wolololaplarge],
              placeholder: WololoCover,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-8"
        alternate
        sectionRef={projecteight}
        visible={visibleSections.includes(projecteight.current)}
        index={8}
        title="InkyPencil"
        description="Design and development for a video game tracking app built in React Native"
        buttonText="View Project"
        buttonLink="/projects/InkyPencil"
        model={{
          type: 'macwithphone',
          alt: 'InkyPencil',
          textures: [
            {
              srcSet: [inkypencilphonelarge, inkypencilphonelarge],
              placeholder: inkypencilphonecover,
            },
            {
              srcSet: [inkypencillaplarge, inkypencillaplarge],
              placeholder: inkypencillapcover,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-9"
        sectionRef={projectnine}
        visible={visibleSections.includes(projectnine.current)}
        index={9}
        title="Future Bank Summit KSA"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View Project"
        buttonLink="/projects/ksa-futurebank"
        // buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [futurebanklarge, futurebanklarge],
              placeholder: futurebankCover,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-10"
        alternate
        sectionRef={projectten}
        visible={visibleSections.includes(projectten.current)}
        index={10}
        title="SteerAuto Kun"
        description="Design and development for a video game tracking app built in React Native"
        buttonText="View Project"
        buttonLink="/projects/SteerAuto"
        model={{
          type: 'macwithphone',
          alt: 'SteerAuto',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTexture2Large],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2lap, gamestackTexture2lapLarge],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
