import { useRef } from 'react';

export const Terminal = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="flex  h-[24rem] w-[42rem] animate-shadow-pulse flex-col rounded-[2rem] bg-gradient-to-br from-ar-oxford-blue to-ar-xiketic font-jet-brains"
    >
      <div className="flex h-fit w-full gap-2 border-b-white p-4">
        <div className="h-3 w-3 rounded-full bg-[#ff5c5c]"></div>
        <div className="h-3 w-3 rounded-full bg-[#ffbd4c]"></div>
        <div className="h-3 w-3 rounded-full bg-[#00ca56]"></div>
      </div>
      <div className="flex-grow p-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa in
        impedit voluptates neque debitis perspiciatis illum iusto magnam atque
        quidem. Minus vitae suscipit asperiores quisquam dolorem molestiae quas
        dignissimos alias?
        <br />
        &gt; command line |
      </div>
    </div>
  );
};
