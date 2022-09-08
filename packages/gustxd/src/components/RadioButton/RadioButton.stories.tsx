import { Meta, Story } from "@storybook/react"
import React from "react"

import { RadioButton, RadioButtonGroup, RadioButtonProps } from "."

const meta: Meta = {
  title: "React/Radio Button",
  component: RadioButton,
  subcomponents: { RadioButtonGroup },
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const dataDes = [
  {
    id: "email-1",
    title: "Email",
    description: "How do you prefer to receive notifications",
  },
  {
    id: "sms-1",
    title: "Phone (SMS)",
    description: "How do you prefer to receive notifications",
  },
  {
    id: "push-1",
    title: "Push notification",
    description: "How do you prefer to receive notifications",
  },
]

const dataEmpty = [
  {
    id: "email-1",
  },
  {
    id: "sms-1",
  },
  {
    id: "push-1",
  },
]

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />

export const Default = Template.bind({})
Default.args = {
  data: dataDes,
  name: "group",
  label: "Notifications",
  description: "How do you prefer to receive notifications?",
  defaultChecked: "sms-1",
}

export const Inline = Template.bind({})
Inline.args = {
  data: dataDes,
  name: "group-2",
  label: "Notifications",
  description: "How do you prefer to receive notifications?",
  inline: true,
  defaultChecked: "sms-1",
}

export const InlineLabel = Template.bind({})
InlineLabel.args = {
  data: dataDes,
  name: "group-3",
  label: "Notifications",
  description: "How do you prefer to receive notifications?",
  inlineLabel: true,
  defaultChecked: "sms-1",
}

export const RadioOnly = Template.bind({})
RadioOnly.args = {
  data: dataEmpty,
  name: "group-4",
  label: "Notifications",
  inline: true,
  defaultChecked: "sms-1",
}
