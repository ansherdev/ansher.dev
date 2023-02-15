import { ChangeEvent, FormEvent, KeyboardEvent, useRef, useState } from 'react';
import { messages } from 'shared/messages';
import { Commands } from 'types/commands';

const MAX_COMMAND_LENGTH = 50;

export const Terminal = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [valid, setValid] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(messages.welcome);
  const [command, setCommand] = useState<string>('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > MAX_COMMAND_LENGTH) {
      return;
    }

    setCommand(event.target.value);

    if (event.target.value in messages) {
      return setValid(true);
    }

    setValid(false);
  };

  const execute = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' && command in messages) {
      setMessage(messages[command as Commands]);
    }
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
        <span className="flex gap-3 font-semibold leading-10">
          <span className="text-dracula-violet">root</span>
          <span className="text-dracula-blue">@ansher.dev</span>
          <span className="font-extrabold text-dracula-green">➜</span>
          <input
            type="text"
            className={
              'flex-grow bg-transparent caret-dracula-beige outline-none placeholder:font-light placeholder:opacity-25 ' +
              (valid ? 'text-dracula-green' : 'text-dracula-red')
            }
            value={command}
            onChange={onChange}
            onKeyDown={execute}
            placeholder="type 'help' to show the available commands"
          />
        </span>
      </div>
    </div>
  );
};
