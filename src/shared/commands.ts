import { Command } from 'types/command';

export const COMMANDS_DESCRIPTION: Record<Command, string> = {
  help: 'show available commands',
  welcome: 'print intro message',
};

export const COMMAND_NAMES = Object.keys(COMMANDS_DESCRIPTION);
