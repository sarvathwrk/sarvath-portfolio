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
import styles from './maihrms.module.css';

const title = 'maiHRMS Platform';
const description =
  'An AI-powered HR SaaS platform that automates workforce management — onboarding, real-time attendance, payroll, workflow automation, and predictive analytics.';
const roles = [
  'AI HR SaaS',
  'Next.js + NestJS',
  'PostgreSQL + MongoDB',
  'Stripe Billing',
  'Flagship Project',
];

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
                maiHRMS is an AI-powered HR SaaS platform designed to automate workforce
                management and give HR teams real-time insight into their people —
                attendance, payroll, and everything in between.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
              <List>
                <ListItem>Employee onboarding and document management</ListItem>
                <ListItem>Real-time attendance with shift tracking</ListItem>
                <ListItem>Payroll automation and payslip generation</ListItem>
                <ListItem>
                  AI assistant with predictive analytics for attrition and anomalies
                </ListItem>
                <ListItem>Workflow automation and approvals</ListItem>
                <ListItem>Mobile app for attendance, leave, and payroll</ListItem>
              </List>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>My Role</ProjectSectionHeading>
              <ProjectSectionText>
                I built the frontend in Next.js and the backend as NestJS APIs, and
                designed the PostgreSQL and MongoDB data architecture. I implemented a
                Redis-based session system, WebSocket real-time notifications, geo-based
                attendance validation, a credit- and seat-based subscription model with
                Stripe billing, and cron jobs for recurring automation.
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
