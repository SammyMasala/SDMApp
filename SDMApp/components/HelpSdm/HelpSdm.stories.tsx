import {HelpSdm as Component} from './HelpSdm';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Help SDM',
  component: Component,
};

export const HelpSdm: Story = {
  // ...
};

export default meta;
