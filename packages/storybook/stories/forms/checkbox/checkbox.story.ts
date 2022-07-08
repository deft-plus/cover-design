import type { Meta, Story } from '@storybook/html';
import { createCheckbox, CreateCheckboxConfig } from './checkbox';

export default {
  title: 'Forms/Checkbox',
} as Meta<CreateCheckboxConfig>;

export const Default: Story<CreateCheckboxConfig> = args => createCheckbox(args);
