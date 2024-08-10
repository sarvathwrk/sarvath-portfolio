import GalleryLargePlaceholder from 'assets/volkihar-background-placeholder.jpg';

import volkiharEnderalLogoPlaceholder from 'assets/volkihar-enderal-logo-placeholder.png';
import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
// import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { media } from 'utils/style';
import { ExperienceLayout } from './experience/experience';
import { CustomAboutHeader } from './header/customHeader';
import styles1 from './header/Uses.module.css';

// import PDF from 'react-pdf-js-infinite';

const title = 'Mohamed Sarvath Khan';
const description = `Dedicated Full Stack Web Developer with over four years of progressive experience in the dynamic field of web development. Throughout my journey, I have navigated the evolving landscape of technology, leveraging my expertise to deliver impactful solutions across diverse projects. My hands-on experience spans a wide range of technologies and frameworks, honing my skills in crafting efficient and scalable web applications. I am committed to continuous learning and innovation, ensuring high-quality deliverables that meet client needs and industry standards.`;

// const roles = [
//   '+971 543571747',
//   'sarvathuae@gmail.com',
//   'Al Zahiya, Abu Dhabi, UAE',
//   'Linkedin - Sarvath Khan',
// ];

export function VolkiharKnight() {
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
          srcSet={[
            { src: 'https://i.imgur.com/GpQDsrG.png', width: 500 },
            { src: 'https://i.imgur.com/GpQDsrG.png', width: 700 },
          ]}
          placeholder={GalleryLargePlaceholder}
          opacity={0.5}
        />
        <CustomAboutHeader
          title={title}
          // roles={roles}
          description={description}
          linkLabel="Download my Cv"
          url="https://drive.google.com/file/d/1r7sI1CroFU3QiVRqhKy1ttN6SEN6SzEf/view?usp=sharing"
          linkLabel2="Reach Me"
          url2="/contact"
        />

        {/* Hardware Section */}
        <ProjectSection padding="none" className={styles1.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Front End Development</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Frameworks</TableHeadCell>
                    <TableCell>Next Js, React Js, Typescript</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Programming Language</TableHeadCell>
                    <TableCell>HTML, CSS, JavaScript, PHP</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>User Interfaces</TableHeadCell>
                    <TableCell>MUI, Bootstrap & Tailwind CSS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Documentation</TableHeadCell>
                    <TableCell>Story Book</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Modern Web Development</TableHeadCell>
                    <TableCell>Web Pack, Gulp, ES Lint, Prettier</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>State & API Management</TableHeadCell>
                    <TableCell>React Query, RTK, Fetch Method</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Form Handling</TableHeadCell>
                    <TableCell>React Hook Form, Formik</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Schema Validation</TableHeadCell>
                    <TableCell>Yup, Zod</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Authentication</TableHeadCell>
                    <TableCell>NextAuth & Session Provider</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Statistics</TableHeadCell>
                    <TableCell>Apex & MUI Chart's, Google Looker Studio</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Google Authentication</TableHeadCell>
                    <TableCell>OAuth 2.0, Firebase & Human Authentication</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles1.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Back End Development</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Frameworks</TableHeadCell>
                    <TableCell>Express Js, Node Js</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Advanced Method</TableHeadCell>
                    <TableCell>
                      Node Js Cluster, Load Balancing and Scaling Techniques
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>API's</TableHeadCell>
                    <TableCell>RESTful, SOAP & Endpoint Creation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Cloud Management</TableHeadCell>
                    <TableCell>AWS EC2 Instance</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Authorization</TableHeadCell>
                    <TableCell>JWT, OAuth, Bearer Tokens</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles1.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Database</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Database</TableHeadCell>
                    <TableCell>MySQL, Mongo DB, Firebase & Redis</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Advanced Method</TableHeadCell>
                    <TableCell>
                      Design, Modeling, Scalability & High Availability
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles1.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Advanced Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Version Control (Git): Proficient in Git version control, managing
                    repositories, branches, commits, and facilitating collaborative
                    software development workflows.
                  </ListItem>
                  <ListItem>
                    CI/CD Integration: Experienced in CI/CD integration for automating
                    software delivery pipelines, ensuring efficient and reliable
                    deployment processes.
                  </ListItem>
                  <ListItem>
                    TypeScript: Familiar with TypeScript generics and advanced types,
                    leveraging them to enhance code reusability, maintainability, and type
                    safety in software development projects.
                  </ListItem>
                  <ListItem>
                    PWA: Proficient in Progressive Web Applications (PWAs), leveraging
                    modern web technologies to deliver fast, reliable, and engaging user
                    experiences across various devices.
                  </ListItem>
                  <ListItem>
                    JEST: Proficient in Jest, a JavaScript testing framework for ensuring
                    robust and reliable code testing.
                  </ListItem>
                  <ListItem>
                    Design Patterns : Skilled in applying web development design patterns
                    to enhance scalability, maintainability, and performance of
                    applications.
                  </ListItem>
                  <ListItem>
                    MVC Architecture: Proficient in MVC Architecture for developing
                    scalable and structured web applications.
                  </ListItem>
                  <ListItem>
                    Scalability: Expertise in Application Scalability Strategies for
                    robust and efficient web development.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ExperienceLayout title={`4+ Years of Work Experience`} />
        <ProjectSection padding="none" className={styles1.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Portfolio Uses</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Frameworks</TableHeadCell>
                    <TableCell>
                      React Js(19.0.0 RC), React Dom(19.0.0 RC), Next Js(15.0.0 RC),Three
                      Js(^0.146.0)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Advanced Method</TableHeadCell>
                    <TableCell>
                      Framer Motion(^7.1.0), Es Lint(^8.21.0), Prettier(^2.8.8),
                      Stylelint(14.9.1)
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <div className="image-container">
                <img
                  src={`/file.png`}
                  placeholder={volkiharEnderalLogoPlaceholder}
                  className="logoiconGallery"
                  alt="SarvathIco"
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                />
              </div>
              <ProjectSectionHeading>Let's Connect</ProjectSectionHeading>

              <ProjectSectionText>
                With over four years as a Full Stack Web Developer, I have a proven track
                record of delivering impactful projects. My expertise ranges from
                designing responsive and intuitive user interfaces to architecting robust
                back-end systems.
              </ProjectSectionText>
              <ProjectSectionText>
                I am eager to collaborate, engage in discussions, and expand my network.
                If you're interested in exploring potential projects or connecting, please
                feel free to reach out through the link below to contact me.
              </ProjectSectionText>
              <Button secondary iconHoverShift icon="chevronRight" href="/contact">
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
