import React from "react";
import { Meta, Story } from "@storybook/react";
import { Badge, BadgeProps } from ".";

const meta: Meta = {
  title: "Components/Badge",
  component: Badge,
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

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Badge",
};
