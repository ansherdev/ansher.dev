import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { messages } from 'shared/messages';

export const Terminal = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [message, setMessage] = useState<string>(messages.welcome);
  const [command, setCommand] = useState<string>('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 10) {
      return;
    }

    setCommand(event.target.value);
  };

  return (
    <div
      ref={containerRef}
      className="flex  h-[30rem] w-[48rem] animate-shadow-pulse flex-col rounded-[2rem] bg-gradient-to-br from-ar-oxford-blue to-ar-xiketic font-jet-brains"
    >
      <div className="flex h-fit w-full gap-2 border-b-white p-4">
        <div className="h-3 w-3 rounded-full bg-osx-red"></div>
        <div className="h-3 w-3 rounded-full bg-osx-yellow"></div>
        <div className="h-3 w-3 rounded-full bg-osx-green"></div>
      </div>
      <div className="font-mediums flex-grow p-4 text-dracula-beige">
        <span>{message}</span>
        <br />
        <span className="font-semibold leading-10">
          <span className="text-dracula-violet">root</span>
          <span className="text-dracula-blue">@ansher.dev</span>
          <span className="font-extrabold text-dracula-green"> ➜ </span>
          <input
            type="text"
            className="bg-transparent outline-none"
            value={command}
            onChange={onChange}
          />
        </span>
      </div>
    </div>
  );
};
