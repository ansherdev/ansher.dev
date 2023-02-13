import { Terminal } from 'components/terminal';
import Image from 'next/image';

export const WelcomeSection = () => {
  return (
    <section className="relative z-0 flex h-screen flex-col justify-center">
      <h1 className="section-heading absolute top-10 left-1/2 flex -translate-x-1/2 items-center justify-center gap-3 text-7xl font-extrabold">
        Welcome
        <span className="relative block h-24 w-24 animate-hand-shake">
          <Image src="hand.svg" fill alt="hand" />
        </span>
      </h1>
      <div className="flex items-center justify-center">
        <div></div>
        {/* <Terminal /> */}
      </div>
    </section>
  );
};
