import { Meta, Story } from "@storybook/react"
import React from "react"

import { Toggle, ToggleProps } from "."

const meta: Meta = {
  title: "components/Toggle",
  component: Toggle,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />

export const Default = Template.bind({})
Default.args = {}
