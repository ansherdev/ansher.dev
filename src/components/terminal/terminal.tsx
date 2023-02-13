import { useRef } from 'react';

export const Terminal = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="flex h-[24rem] w-[42rem] rounded-[2rem] bg-ar-oxford-blue transition-all"
    >
      <div className="m-auto h-[22rem] w-[40rem] rounded-[1.3rem] bg-gradient-to-b from-ar-hookers-green to-ar-dark-slate-gary"></div>
    </div>
  );
};
