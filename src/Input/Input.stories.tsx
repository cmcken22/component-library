import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Input from "./Input";

export default {
  title: "ReactComponentLibrary/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
const CurrencyTemplate: ComponentStory<typeof Input> = (args) => (
  <Input.Currency {...args} />
);
const PercentTemplate: ComponentStory<typeof Input> = (args) => (
  <Input.Percent {...args} />
);
const TextAreaTemplate: ComponentStory<typeof Input> = (args) => (
  <Input.TextArea {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  id: "Primary",
  label: "Primary",
  placeholder: "Enter a value",
  disabled: false,
  helperText: "Helper Text",
  required: false,
  value: "Hello world",
  fullWidth: false,
  labelPosition: "top",
  onChange: (e) => action("onChange")(e),
};

Primary.argTypes = {
  status: {
    options: ["error", "success", "warning"],
    control: { type: "select" },
  },
  labelPosition: {
    options: ["top", "left"],
    control: { type: "select" },
  },
};

export const Currency = CurrencyTemplate.bind({});
Currency.args = {
  id: "Currency",
  label: "Currency",
  placeholder: "Enter a value",
  disabled: false,
  helperText: "Helper Text",
  required: false,
  value: "100",
  fullWidth: false,
  labelPosition: "top",
  onChange: (value, formattedValue, floatValue) =>
    action("onChange")(value, formattedValue, floatValue),
};

Currency.argTypes = {
  status: {
    options: ["error", "success", "warning"],
    control: { type: "select" },
  },
  labelPosition: {
    options: ["top", "left"],
    control: { type: "select" },
  },
};

export const Percent = PercentTemplate.bind({});
Percent.args = {
  id: "Percent",
  label: "Percent",
  placeholder: "Enter a value",
  disabled: false,
  helperText: "Helper Text",
  required: false,
  value: "100",
  fullWidth: false,
  labelPosition: "top",
  onChange: (value, formattedValue, floatValue) =>
    action("onChange")(value, formattedValue, floatValue),
};

Percent.argTypes = {
  status: {
    options: ["error", "success", "warning"],
    control: { type: "select" },
  },
  labelPosition: {
    options: ["top", "left"],
    control: { type: "select" },
  },
};

export const TextArea = TextAreaTemplate.bind({});
TextArea.args = {
  id: "TextArea",
  label: "Title",
  placeholder: "Type here...",
  value:
    "I’m typing a bunch of text here just to show what it looks like when it’s filled.",
  required: true,
  onChange: (e) => action("onChange")(e),
};
