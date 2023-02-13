import { Layout } from 'components/layout';
import { SpaceScene, WelcomeSection } from 'components/welcome-section';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>ansher.dev</title>
      </Head>
      <Layout>
        <WelcomeSection />
        {/* <div className="h-screen" /> */}
      </Layout>
    </>
  );
}
