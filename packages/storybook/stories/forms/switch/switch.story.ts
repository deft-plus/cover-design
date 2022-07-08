import type { Meta, Story } from '@storybook/html';
import { createSwitch, CreateSwitchConfig } from './switch';

export default {
  title: 'Forms/Switch',
} as Meta<CreateSwitchConfig>;

export const Default: Story<CreateSwitchConfig> = args => createSwitch(args);
