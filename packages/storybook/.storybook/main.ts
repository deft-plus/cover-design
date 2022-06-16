import type { StorybookConfig } from '@storybook/core-common';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../stories/**/*.story.ts'],
  framework: '@storybook/html',
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async config => {
    config.resolve?.modules?.push(path.resolve(__dirname, '../../../node_modules'));

    config.module?.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};

export default config;
