import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextInput, TextInputProps } from '.';

const meta: Meta = {
  title: 'components/TextInput',
  component: TextInput,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Label = Template.bind({});
Label.args = {
  label: 'label',
};

export const PrefixPlaceholder = Template.bind({});
PrefixPlaceholder.storyName = 'Prefix and Placeholder';
PrefixPlaceholder.args = {
  label: 'label',
  prefix: '$',
  placeholder: '0.00',
};

export const DynamicValue = Template.bind({});
DynamicValue.args = {
  label: 'label',
  value: 'Dynamic value',
};
