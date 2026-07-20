// ==== Project 1 ==== //
import aqaryTextureLarge from '@/assets/sarvath/AqaryLaptopLarge.png';
import aqaryTexture from '@/assets/sarvath/AqaryLaptopSmall.png';
import aqaryTexturePlaceholder from '@/assets/spr-lesson-builder-dark-placeholder.jpg';
// ==== Project 1 ==== END ==== //

// ==== Project 2 ==== //
import foodtekcolaplarge from '@/assets/sarvath/foodtekcolaptoplarge.png';
import sprTexturePlaceholder from '@/assets/spr-lesson-builder-dark-placeholder.jpg';

import foodtekcohonelarge from '@/assets/sarvath/foodtekcophonelarge.png';
import foodtekcohonesmall from '@/assets/sarvath/foodtekcophonesmall.png';

// ==== Project 2 ==== END ==== //

// ==== Project 3 TeaWork Dashboard==== //
import {
  default as teaworkdashboard,
  default as teaworkdashboardLarge,
} from '@/assets/sarvath/teaworkdashboardLarge.png';
import teaworkdashboardPlaceholder from '@/assets/spr-lesson-builder-dark-placeholder.jpg';
// ==== Project 3 ==== END ==== //

// ==== Project 4  teawork Website ==== //
import {
  default as teaworklarge,
  default as teaworksmall,
} from '@/assets/sarvath/teaworklarge.png';
import teaworkPlaceholder from '@/assets/spr-lesson-builder-dark-placeholder.jpg';

import {
  default as teaworkphonelarge,
  default as teaworkphonesmall,
} from '@/assets/sarvath/teaworkphonelarge.png';

// ==== Project 2 ==== END ==== //

// ==== Project 2 ==== //

import gamestackTexturePlaceholder from '@/assets/gamestack-login-placeholder.jpg';
import {
  default as gamestackTexture2lap,
  default as gamestackTexture2lapLarge,
} from '@/assets/sarvath/steerautolap.png';
import gamestackTexture from '@/assets/sarvath/steerautophone2.png';

import gamestackTexture2Large from '@/assets/sarvath/steerautophone2.png';
// ==== END ==== //

//  ==== project 5 vidhya ==== //

import vidhyaonlinephone2 from '@/assets/sarvath/vidhyaphone2.png';
import vidhyaonlinephone1 from '@/assets/sarvath/vidhyaphonelarge.png';

import vidhyaonlinecover from '@/assets/gamestack-login-placeholder.jpg';

// ==== END ==== //

//  ==== project 6 Difuza ==== //

import difuzalaplarge from '@/assets/sarvath/vidhyaonlinelaplarge.png';
import difuzalapcover from '@/assets/slice-app-placeholder.jpg';

// ==== END ==== //

//  ==== project 6 Difuza ==== //
import inkypencillaplarge from '@/assets/sarvath/inkypencillaptoplarge.png';
import inkypencilphonelarge from '@/assets/sarvath/inkypencilphonelarge.png';
import {
  default as inkypencillapcover,
  default as inkypencilphonecover,
} from '@/assets/slice-app-placeholder.jpg';

// ==== END ==== //

// ==== project 7 wololo ==== //

import Wolololaplarge from '@/assets/sarvath/Wolololaplarge.png';
import WololoCover from '@/assets/spr-lesson-builder-dark-placeholder.jpg';

// ==== END ==== //

// ==== project 7 wololo ==== //

import futurebanklarge from '@/assets/sarvath/futurebanklarge.png';
import futurebankCover from '@/assets/spr-lesson-builder-dark-placeholder.jpg';

// ==== END ==== //

import { Footer } from '@/components/Footer';
import { Meta } from '@/components/Meta';
import { Intro } from '@/features/home/Intro';
import { Profile } from '@/features/home/Profile';
import { ProjectSummary } from '@/features/home/ProjectSummary';
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
  // Observed section elements never actually hold `null`, but the ref-current
  // lookups below (`ref.current` is `HTMLDivElement | null`) feed `.includes`,
  // so the element type is widened to accept them.
  const [visibleSections, setVisibleSections] = useState<Array<Element | null>>([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef<HTMLDivElement>(null);
  const projectOne = useRef<HTMLDivElement>(null);
  const projectTwo = useRef<HTMLDivElement>(null);
  const projectThree = useRef<HTMLDivElement>(null);
  const projectFour = useRef<HTMLDivElement>(null);
  const projectFive = useRef<HTMLDivElement>(null);
  const projectSix = useRef<HTMLDivElement>(null);
  const projectseven = useRef<HTMLDivElement>(null);
  const projecteight = useRef<HTMLDivElement>(null);
  const projectnine = useRef<HTMLDivElement>(null);
  const projectten = useRef<HTMLDivElement>(null);

  const details = useRef<HTMLDivElement>(null);

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
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    if (intro.current) {
      indicatorObserver.observe(intro.current);
    }

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
        description="A real-estate platform for buying and selling properties, with a dashboard for reports, analytics, and user management."
        buttonText="View Project"
        buttonLink="/projects/Aqary"
        model={{
          type: 'laptop',
          alt: 'Aqary International Group real-estate dashboard',
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
        description="An e-commerce platform for buying and selling food ingredients, with a dashboard for reports and user management."
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
        description="Admin dashboard for a food-products marketplace — orders, reports, analytics, and user management."
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
        description="A food-products marketplace with separate wholesaler and customer logins for buying and selling ingredients."
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
        description="A web-service marketplace with dashboard access, site-data reports, and customer-enquiry management."
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
        description="An e-learning platform with in-video quizzes, completion reports, and downloadable course certificates."
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
        description="An online store for clothing, shoes, and everyday essentials."
        buttonText="View Project"
        buttonLink="/projects/Wololo"
        model={{
          type: 'laptop',
          alt: 'Wololo online store',
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
        description="An author's website featuring event listings and translation services."
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
        description="Event website for the Future Bank Summit KSA — agenda, speakers, and registration."
        buttonText="View Project"
        buttonLink="/projects/ksa-futurebank"
        model={{
          type: 'laptop',
          alt: 'Future Bank Summit KSA event website',
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
        description="A used-car marketplace with auctions, maintenance booking, and advanced search filters."
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
              placeholder: gamestackTexturePlaceholder,
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
