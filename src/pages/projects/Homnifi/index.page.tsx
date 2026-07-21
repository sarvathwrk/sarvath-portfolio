import sliceBackgroundLarge from '@/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '@/assets/slice-background-placeholder.jpg';
import sliceBackground from '@/assets/slice-background.jpg';
import { Footer } from '@/components/Footer';
import { Meta } from '@/components/Meta';
import { List, ListItem } from '@/components/ui/List';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '@/features/project';
import { Fragment } from 'react';
import styles from './homnifi.module.css';

const title = 'Homnifi Platform';
const description =
  'A Web3 + AI platform that lets users access decentralized applications, manage digital assets, and interact with blockchain ecosystems.';
const roles = ['Web3 + AI', 'NestJS', 'Full Ownership', 'Blockchain'];

function Details() {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.page}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader title={title} description={description} roles={roles} />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Overview</ProjectSectionHeading>
              <ProjectSectionText>
                Homnifi is a Web3 and AI platform that enables users to access
                decentralized applications, manage digital assets, and interact with
                blockchain ecosystems from a single, secure interface.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
              <List>
                <ListItem>Decentralized wallet and asset management</ListItem>
                <ListItem>Cross-chain blockchain integration</ListItem>
                <ListItem>Rewards, staking, and participation systems</ListItem>
                <ListItem>AI-driven insights and tools</ListItem>
                <ListItem>Secure authentication and encrypted transactions</ListItem>
              </List>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>My Role</ProjectSectionHeading>
              <ProjectSectionText>
                I developed the platform end to end — frontend, backend, and database with
                full ownership. I built the APIs and business logic in NestJS, implemented
                authentication, dashboards, and core platform flows, and designed a
                scalable architecture for Web3 interactions.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

export default Details;
