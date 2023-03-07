import { HelpMessage } from 'components/welcome-section/terminal/messages/help-message';
import { WelcomeMessage } from 'components/welcome-section/terminal/messages/welcome-message';
import React, { useMemo } from 'react';
import { COMMAND_NAMES } from 'shared/commands';
import { Command } from 'types/command';

interface MessagesProps {
  command: string;
}

export const Messages = React.memo(({ command }: MessagesProps) => {
  const components = useMemo<Record<Command, JSX.Element>>(
    () => ({
      help: <HelpMessage />,
      welcome: <WelcomeMessage />,
    }),
    []
  );

  if (COMMAND_NAMES.includes(command)) {
    return components[command as Command];
  }

  return <WelcomeMessage />;
});

Messages.displayName = 'Messages';
