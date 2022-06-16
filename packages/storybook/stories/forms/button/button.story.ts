import type { Meta, Story } from '@storybook/html';
import { createButton, CreateButtonConfig } from './button';

export default {
  title: 'Forms/Button',
  argTypes: {
    disabled: { control: 'boolean' },
    outlined: { control: 'boolean' },
    contained: { control: 'boolean' },
    rounded: { control: 'boolean' },
    loading: { control: 'boolean' },
    icon: { control: 'boolean' },
    size: {
      control: {
        type: 'select',
        options: [
          'small',
          'medium',
          'large',
          'size-1',
          'size-2',
          'size-3',
          'size-4',
          'size-5',
          'size-6',
          'size-7',
        ],
      },
    },
  },
} as Meta<CreateButtonConfig>;

const Template: Story<CreateButtonConfig> = args => createButton(args);

export const Testing = Template.bind({});
