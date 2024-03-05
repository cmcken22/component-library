import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Input from "../Input";

export default {
  title: "ReactComponentLibrary/Input/Text",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
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
  debounce: 500,
};

Text.argTypes = {
  status: {
    options: ["error", "success", "warning"],
    control: { type: "select" },
  },
  labelPosition: {
    options: ["top", "left"],
    control: { type: "select" },
  },
};
