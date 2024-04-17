import {Tekan as Component} from './Tekan';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Tekan!!',
  component: Component,
};

export const Tekan: Story = {
  // ...
};

export default meta;
