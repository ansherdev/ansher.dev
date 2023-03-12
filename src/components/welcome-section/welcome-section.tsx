import { Terminal } from 'components/welcome-section/terminal';
import Image from 'next/image';

export const WelcomeSection = () => {
  return (
    <section className="relative z-0 flex h-screen flex-col items-center justify-center gap-10">
      <h1 className="section-heading flex items-center justify-center gap-3 text-5xl font-extrabold sm:text-6xl">
        Welcome
        <span className="relative block h-16 w-16  animate-hand-shake sm:h-20 sm:w-20">
          <Image src="hand.svg" fill alt="hand" />
        </span>
      </h1>
      <div className="relative flex w-fit items-center justify-center xl:w-full">
        <Image
          className="image-rendering-pixelated absolute -bottom-14 -right-5 z-10 h-40 w-40 -scale-x-100 animate-fly-mirror sm:-bottom-16 sm:-left-24  sm:h-64 sm:w-64  sm:scale-100 sm:animate-fly xl:relative xl:bottom-auto xl:left-auto xl:h-[512px] xl:w-[512px]"
          src="/jet-board.gif"
          alt="jet-board"
          width={512}
          height={512}
        />
        <Terminal />
      </div>
    </section>
  );
};
