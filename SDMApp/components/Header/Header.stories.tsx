import {Header as Component} from './Header';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Header',
  component: Component,
};

export const Header: Story = {
  // ...
};

export default meta;
