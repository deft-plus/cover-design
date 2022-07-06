import type { Meta, Story } from '@storybook/html';
import { createCheckbox, CreateButtonConfig } from './checkbox';

export default {
  title: 'Forms/Checkbox',
} as Meta<CreateButtonConfig>;

export const Default: Story<CreateButtonConfig> = args => createCheckbox(args);
