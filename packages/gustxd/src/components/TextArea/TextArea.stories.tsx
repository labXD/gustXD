import React from "react";
import { Meta, Story } from "@storybook/react";
import { TextArea, TextAreaProps } from ".";

const meta: Meta = {
  title: "Forms/TextArea",
  component: TextArea,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "id",
  label: "label",
  defaultValue: "default value",
};
