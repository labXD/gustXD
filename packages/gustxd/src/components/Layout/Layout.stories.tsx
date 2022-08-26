import { Meta, Story } from "@storybook/react"
import React from "react"

import { BaseLayout, BaseLayoutProps } from "."

const meta: Meta = {
  title: "components/Layout",
  component: BaseLayout,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
    layout: "fullscreen",
  },
}

export default meta

const Template: Story<BaseLayoutProps> = (args) => <BaseLayout {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <div>center</div>,
  className: "bg-red-100",
}
