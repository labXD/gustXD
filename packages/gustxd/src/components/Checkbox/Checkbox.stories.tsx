import React from "react";
import { Meta, Story } from "@storybook/react";
import { Checkbox, CheckboxProps, CheckboxFieldset } from ".";

const meta: Meta = {
  title: "components/Checkbox",
  component: Checkbox,
  subcomponents: { CheckboxFieldset },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CheckboxProps> = (args) => (
  <CheckboxFieldset legend="sb-checkbox">
    <Checkbox {...args} />
  </CheckboxFieldset>
);

export const Default = Template.bind({});
Default.args = {
  id: "default-0",
  label: "I can see the difference.",
  defaultChecked: true,
};

export const Description = Template.bind({});
Description.args = {
  id: "default-1",
  label: "Can you see the difference?",
  children:
    "If we wanted to present more information than what a label woul allow, using this detail section will size the content correctly.",
};

export const Flip = Template.bind({});
Flip.args = {
  id: "flip-0",
  flip: true,
  label: "Can you see the difference?",
  children:
    "If we wanted to present more information than what a label woul allow, using this detail section will size the content correctly.",
};

export const Inline = Template.bind({});
Inline.args = {
  id: "inline-0",
  label: "Can you see the difference?",
  children:
    "If we wanted to present more information than what a label woul allow, using this detail section will size the content correctly.",
  inline: true,
};

export const CheckboxOnly = Template.bind({});
CheckboxOnly.args = {
  id: "checkboxonly-0",
};
