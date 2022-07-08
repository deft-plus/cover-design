import type { Meta, Story } from '@storybook/html';
import { createCheckbox, CreateButtonConfig } from './text-field';

export default {
  title: 'Forms/Text Field',
} as Meta<CreateButtonConfig>;

export const Default: Story<CreateButtonConfig> = args => createCheckbox(args);
