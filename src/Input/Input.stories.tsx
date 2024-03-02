import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Input from "./Input";

export default {
  title: "ReactComponentLibrary/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
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
// Primary.decorators = [withActions("click")];
