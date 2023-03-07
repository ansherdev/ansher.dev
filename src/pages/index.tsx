import { SkillsSection } from 'components/skills-section';
import { WelcomeSection } from 'components/welcome-section';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>ansher.dev</title>
      </Head>
      {/* <SpaceScene /> */}
      <WelcomeSection />
      <SkillsSection />
    </>
  );
}
