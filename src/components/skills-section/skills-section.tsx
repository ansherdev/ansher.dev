import Image from 'next/image';

export const SkillsSection = () => {
  return (
    <section className="align-items relative flex h-screen justify-center">
      <h1 className="section-heading flex items-center justify-center gap-3 text-center text-4xl font-extrabold sm:text-6xl">
        Work In Progress
      </h1>

      <Image
        className="image-rendering-pixelated absolute bottom-16 h-40 w-40 sm:h-72 sm:w-72"
        src="/idea.gif"
        alt="idea"
        width={512}
        height={512}
      />
    </section>
  );
};
