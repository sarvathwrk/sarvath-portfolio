import { DecoderText } from 'components/DecoderText';
import { Heading } from 'components/Heading';
import { List, ListItem } from 'components/List';
import { Section } from 'components/Section';
import { ProjectSectionText } from 'layouts/Project';
import { classes, cssProps, numToMs } from 'utils/style';
import styles from './experience.module.css';
import { Button } from 'components/Button';

const initDelay = 300;
const experienceList = [
  {
    jobtitle: 'Web Developer',
    companyname: 'Aqary International Group',
    duration: 'August 2023 - Present',
    location: 'Abu Dhabi / United Arab Emirates',
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
        label: `Integrated React ApexCharts and TenStack Tables for comprehensive data visualization and analytics, empowering stakeholders to make informed decisions based on actionable insights from customer and project data.`,
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
export function ExperienceLayout({ title }) {
  return (
    <Section className={classes(styles.header)} as="section">
      <div
        className={styles.headerContent}
        style={cssProps({ initDelay: numToMs(initDelay) })}
      >
        <div className={styles.details}>
          <Heading className={styles.title} level={2} as="h1">
            <DecoderText
              text={`${title}`}
              delay={1000}
              style={{ fontSize: '40px', paddingBottom: '309px' }}
            />
          </Heading>

          {experienceList.map((ival, i) => {
            return (
              <div key={i}>
                <Heading key={`heading${1}`} className={styles.title} level={2} as="h2">
                  <DecoderText
                    text={`${ival.jobtitle} @ ${ival.companyname}`}
                    delay={1000}
                    style={{ fontSize: '26px' }}
                  />
                  <div className={styles.headcontentButton}>
                    <Button secondary className={styles.linkButton}>
                      {ival.duration}
                    </Button>
                    <Button secondary className={styles.linkButton}>
                      {ival.location}
                    </Button>
                  </div>
                </Heading>

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
