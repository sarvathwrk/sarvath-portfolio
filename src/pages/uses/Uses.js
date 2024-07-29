import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
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
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Uses"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        {/* ProjectBackground Component */}
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />

        {/* ProjectHeader Component */}
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
        />
        {/* Development Section */}
        {/* <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use{' '}
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>{' '}
                    as my text editor, with the Atom One Dark theme and Operator Mono as
                    my typeface of choice.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection> */}

        {/* Hardware Section */}
        <ProjectSection padding="none" className={styles.section}>
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

        <ProjectSection padding="none" className={styles.section}>
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

        <ProjectSection padding="none" className={styles.section}>
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

        <ProjectSection padding="none" className={styles.section}>
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
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
