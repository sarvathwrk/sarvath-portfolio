import { Meta } from '@/components/Meta';
import { ExperienceLayout } from '@/features/about/experience/experience';

export default function ExperiencePage() {
  return (
    <>
      <Meta
        title="Experience"
        description="Mohamed Sarvath Khan's professional experience — 5+ years building SaaS platforms, Web3 apps, and real-time systems with Next.js, NestJS, PostgreSQL, MongoDB and Redis."
      />
      <ExperienceLayout title="5+ Years of Work Experience" />
    </>
  );
}
