import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { messages } from 'shared/messages';
import { Commands } from 'types/commands';

const MAX_COMMAND_LENGTH = 50;

export const Terminal = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [disabled, setDisabled] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(messages.welcome);
  const [command, setCommand] = useState<string>('');

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.length > MAX_COMMAND_LENGTH || disabled) {
        return;
      }

      setCommand(event.target.value);

      if (event.target.value.trim() in messages) {
        return setValid(true);
      }

      setValid(false);
    },
    [disabled]
  );

  const animateText = useCallback((text: string, i: number = 1, delay = 5) => {
    if (i === text.length + 1) {
      setDisabled(false);
      return;
    }

    setTimeout(() => {
      setMessage(text.substring(0, i));
      animateText(text, i + 1);
    }, delay);
  }, []);

  const execute = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (disabled) {
        return;
      }

      if (event.code === 'Enter' && command.trim() in messages) {
        setDisabled(true);
        setCommand('');
        animateText(messages[command.trim() as Commands], 1);
      }
    },
    [animateText, command, disabled]
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
        <span className="inline-block">{message}</span>
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
