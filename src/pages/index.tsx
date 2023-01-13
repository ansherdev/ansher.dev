import { Header, Layout } from 'layout';
import Head from 'next/head';
import Image from 'next/image';
import { Terminal } from 'widgets';

export default function Home() {
  return (
    <>
      <Head>
        <title>ansher.dev</title>
      </Head>
      <Layout>
        <Header />
        <section className="h-screen flex-col justify-center">
          <h1 className="text-center text-7xl font-bold text-white">
            Welcome👋
          </h1>
          <div className="flex  items-center justify-center">
            <div className="relative h-[32rem] w-[32rem]">
              <Image
                className="image-rendering-pixelated"
                src="/jet-board.gif"
                alt="Jet Board"
                fill
              />
            </div>
            <Terminal />
          </div>
        </section>
      </Layout>
    </>
  );
}
