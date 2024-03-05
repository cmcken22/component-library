import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Input from "../Input";

export default {
  title: "ReactComponentLibrary/Input/Password",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Password = Template.bind({});
Password.args = {
  id: "Password",
  label: "Password",
  type: "password",
  placeholder: "Enter a password",
  disabled: false,
  helperText: "Enter your password",
  required: false,
  value: "",
  fullWidth: false,
  labelPosition: "top",
  onChange: (e) => action("onChange")(e),
};

Password.argTypes = {
  status: {
    options: ["error", "success", "warning"],
    control: { type: "select" },
  },
  labelPosition: {
    options: ["top", "left"],
    control: { type: "select" },
  },
};
