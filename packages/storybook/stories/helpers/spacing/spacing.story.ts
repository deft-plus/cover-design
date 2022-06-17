import type { Meta, Story } from '@storybook/html';
import { createSpacing, CreateSpacingConfig } from './spacing';

export default {
  title: 'Helpers/Spacing',
} as Meta<CreateSpacingConfig>;

export const Dynamic: Story<CreateSpacingConfig> = args => createSpacing(args);
Dynamic.argTypes = {
  padding: { control: 'boolean' },
  margin: { control: 'boolean' },
};
Dynamic.args = {
  padding: true,
  margin: true,
};

export const Padding: Story<CreateSpacingConfig> = () =>
  createSpacing({ padding: true, margin: false });

export const Margin: Story<CreateSpacingConfig> = () =>
  createSpacing({ padding: false, margin: true });
