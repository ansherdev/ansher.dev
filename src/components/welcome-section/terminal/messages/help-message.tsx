import { COMMANDS_DESCRIPTION } from 'shared/commands';
import { Command } from 'types/command';

export const HelpMessage = () => {
  return (
    <>
      <span className="text-dracula-orange">Available Commands</span>
      <ul className="list-inside list-disc">
        {(Object.keys(COMMANDS_DESCRIPTION) as Command[]).map(
          (command: Command) => {
            return (
              <li key={command}>
                <span className="text-dracula-blue">{command}</span> -{' '}
                {COMMANDS_DESCRIPTION[command]}
                list
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};
