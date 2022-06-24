import { Meta, Story } from "@storybook/react";
import React from "react";

import { Select, SelectProps } from ".";

const meta: Meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "1",
  options: ["one", "two"],
  label: "Choices",
};
