import type { Meta, Story } from '@storybook/html';
import { createButton, CreateButtonConfig } from './button';

export default {
  title: 'Forms/Button',
  argTypes: {
    disabled: { control: 'boolean' },
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

export const Default: Story<CreateButtonConfig> = args => createButton(args);

export const Outlined: Story<CreateButtonConfig> = args =>
  createButton({ ...args, outlined: true });

export const Contained: Story<CreateButtonConfig> = args =>
  createButton({ ...args, contained: true });
