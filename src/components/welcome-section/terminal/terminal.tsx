import { Messages } from 'components/welcome-section/terminal/messages/messages';
import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { COMMAND_NAMES } from 'shared/commands';
import { Command } from 'types/command';

const MAX_COMMAND_LENGTH = 50;

export const Terminal = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [valid, setValid] = useState<boolean>(false);
  const [message, setMessage] = useState<Command>('welcome');
  const [command, setCommand] = useState<string>('');

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > MAX_COMMAND_LENGTH) {
      return;
    }

    setCommand(event.target.value);

    if (COMMAND_NAMES.includes(event.target.value.trim())) {
      return setValid(true);
    }

    setValid(false);
  }, []);

  const execute = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.code === 'Enter' && COMMAND_NAMES.includes(command.trim())) {
        setMessage(command.trim() as Command);
        setCommand('');
      }
    },
    [command]
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex  h-[30rem] w-[48rem] animate-shadow-pulse flex-col rounded-[2rem] bg-gradient-to-br from-ar-oxford-blue to-ar-xiketic font-jet-brains">
      <div className="flex h-fit w-full gap-2 border-b-white p-4">
        <div className="h-3 w-3 rounded-full bg-osx-red"></div>
        <div className="h-3 w-3 rounded-full bg-osx-yellow"></div>
        <div className="h-3 w-3 rounded-full bg-osx-green"></div>
      </div>
      <div className="font-mediums flex-grow p-4 text-dracula-beige">
        <div className="animate-fade-in inline-block overflow-hidden">
          <Messages command={message} />
        </div>
        <span className="flex gap-3 font-semibold leading-10">
          <span>
            <span className="text-dracula-violet">root</span>
            <span className="text-dracula-blue">@ansher.dev</span>
          </span>
          <span className="font-extrabold text-dracula-green">➜</span>
          <input
            ref={inputRef}
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
      <div className="h-5 "></div>
    </div>
  );
};
