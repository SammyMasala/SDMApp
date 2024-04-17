import {Footer as Component} from './Footer';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Footer',
  component: Component,
};

export const Footer: Story = {
  // ...
};

export default meta;
