// import { DecoderText } from '@/components/ui/DecoderText';
// import { Heading } from '@/components/ui/Heading';
import { List, ListItem } from '@/components/ui/List';
import { Section } from '@/components/ui/Section';
import { ProjectSectionHeading, ProjectSectionText } from '@/features/project';
import { classes, cssProps, media, numToMs } from '@/lib/style';
import styles from './experience.module.css';
import { Button } from '@/components/ui/Button';
import { useWindowSize } from '@/hooks';
import type { ReactNode } from 'react';

const initDelay = 300;
const experienceList = [
  {
    jobtitle: 'Full Stack Developer',
    companyname: 'SoftBuilders Software Design LLC',
    duration: 'Sep 2024 - Present',
    location: 'Dubai / UAE',
    description: [
      {
        label: `Architected and shipped scalable full-stack SaaS platforms end to end — frontend with Next.js, backend with NestJS, and database design across PostgreSQL and MongoDB.`,
      },
      {
        label: `Built real-time systems with Redis and WebSockets, powering live notifications, session management, and geo-based attendance validation.`,
      },
      {
        label: `Implemented subscription, billing, and credit/seat SaaS models with Stripe, alongside cron-driven automation for recurring workflows.`,
      },
      {
        label: `Delivered maiHRMS, an AI-powered HR SaaS platform (onboarding, real-time attendance, payroll automation, and predictive analytics), owning the frontend, backend, and data architecture.`,
      },
      {
        label: `Developed Homnifi, a Web3 + AI platform for decentralized wallets, cross-chain integration, and staking/rewards, building the full stack and NestJS APIs.`,
      },
    ],
  },
  {
    jobtitle: 'Web Developer',
    companyname: 'Aqary International Group',
    duration: 'Aug 2023 - Aug 2024',
    location: 'Abu Dhabi / UAE',
    description: [
      {
        label: `Leveraged advanced TypeScript and Next.js with server-side rendering and the latest MUI to architect responsive web applications, significantly enhancing user engagement and overall experience within the real estate sector.`,
      },
      {
        label: `Engineered dynamic dashboards utilizing Redux Toolkit and RTK Query to optimize state management, enabling efficient oversight of projects, properties, units, leads, contacts, and payment plans.`,
      },
      {
        label: `Established robust authentication and authorization frameworks using Firebase, JWT, and Auth0, ensuring stringent data protection and compliance with security best practices.`,
      },
      {
        label: `Employed Formik, React Hook Form, YUP, and Zod to implement sophisticated form handling and validation, significantly improving data integrity and user interaction across lead, contact, and payment plan functionalities.`,
      },
      {
        label: `Integrated React ApexCharts and TanStack Table for comprehensive data visualization and analytics, empowering stakeholders to make informed decisions based on actionable insights from customer and project data.`,
      },
      {
        label: `Directed cross-functional collaboration with design teams through Figma and backend teams to ensure cohesive communication and alignment, driving the successful delivery of high-performance web solutions that consistently exceed client expectations.`,
      },
    ],
  },
  {
    jobtitle: 'Associate Full Stack Developer',
    companyname: 'Consortia22 Pvt Ltd',
    duration: 'July 2021 - July 2023',
    location: 'Chennai / India',
    description: [
      {
        label: `Leveraged advanced web development techniques utilizing HTML5, CSS3, JavaScript, React.js, Node.js, and Express.js, while integrating MySQL, MongoDB, and Redis for scalable data management and implementing RESTful APIs for efficient client-server communication.`,
      },
      {
        label: `Implemented GPS integration using Google APIs and file storage solutions with Amazon S3 for secure file handling, while creating integrated dashboards in Looker Studio to enhance data visibility and analytics for stakeholders`,
      },
      {
        label: `Engineered complex e-commerce platforms with user and admin interfaces, incorporating features such as product management, transaction handling, and PWA functionality, while fostering strong client relationships to ensure successful project delivery.`,
      },
    ],
  },
  {
    jobtitle: 'Freelance',
    companyname: 'Cleaning LLC',
    duration: `May 2020 - June 2021`,
    location: `Remote`,
    description: [
      {
        label: `Developed a professional website for a cleaning service provider: Utilized Bootstrap, HTML, JavaScript, and jQuery to create a user-friendly site for businesses and residential clients, enhancing user experience and site functionality.`,
      },
      {
        label: `Designed responsive and accessible UI: Leveraged Bootstrap to create adaptable, visually appealing interfaces that ensure a seamless experience across various devices and screen sizes.`,
      },
      {
        label: `Implemented interactive and dynamic features: Used JavaScript and jQuery to add interactive elements and enhance user engagement on the website.`,
      },
      {
        label: `Ensured cross-browser compatibility and performance: Applied best practices to ensure the site performs consistently across different browsers and devices.`,
      },
    ],
  },
];
export interface ExperienceLayoutProps {
  title: ReactNode;
}

export function ExperienceLayout({ title }: ExperienceLayoutProps) {
  const windowSize = useWindowSize();

  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;

  return (
    <Section className={classes(styles.header)} as="section">
      <div
        className={styles.headerContent}
        style={cssProps({ initDelay: numToMs(initDelay) })}
      >
        <div className={styles.details}>
          {/* <Heading className={styles.title} level={2} as="h1"> */}
          <ProjectSectionHeading>{title}</ProjectSectionHeading>
          {/* </Heading> */}

          {experienceList.map((ival, i) => {
            return (
              <div key={i}>
                {/* <Heading key={`heading${1}`} className={styles.title} level={2} as="h2"> */}
                {/* <DecoderText
                    text={`${ival.jobtitle} @ ${ival.companyname}`}
                    delay={1000}
                    style={{
                      fontSize: isMobile ? '1rem' : '26px',
                      width: '100%',
                      overflow: 'hidden',
                    }}
                  /> */}
                <ProjectSectionHeading
                  as="h5"
                  level={5}
                  key={`heading${1}`}
                  className={styles.title}
                >{`${ival.jobtitle} @ ${ival.companyname}`}</ProjectSectionHeading>

                <div className={styles.headcontentButton}>
                  <Button
                    fontSize={isMobile ? '.8rem' : false}
                    secondary
                    className={styles.linkButton}
                  >
                    {ival.duration}
                  </Button>
                  <Button
                    fontSize={isMobile ? '.8rem' : false}
                    secondary
                    className={styles.linkButton}
                  >
                    {ival.location}
                  </Button>
                </div>
                {/* </Heading> */}

                <ProjectSectionText as="div">
                  <List>
                    {ival &&
                      ival.description.map((jval, j) => {
                        return <ListItem key={`list${j}`}>{jval.label}</ListItem>;
                      })}
                  </List>
                </ProjectSectionText>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
