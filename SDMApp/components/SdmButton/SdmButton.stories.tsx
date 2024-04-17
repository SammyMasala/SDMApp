import {SdmButton as Component} from './SdmButton';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'SDM Button',
  component: Component,
};

export const SdmButton: Story = {
  // ...
};

export default meta;
