import { Meta, Story } from "@storybook/react"
import React from "react"

import { Button, ButtonProps } from "."

const meta: Meta = {
  title: "components/Button",
  component: Button,
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
}

export default meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Button text",
  size: "md",
  variant: "primary",
}
