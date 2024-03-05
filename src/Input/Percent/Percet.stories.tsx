import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Input from "../Input";
import PercentInput from "./Percent";

export default {
  title: "ReactComponentLibrary/Input/Percent",
  component: PercentInput,
} as ComponentMeta<typeof Percent>;

const Template: ComponentStory<typeof PercentInput> = (args) => (
  <Input.Percent {...args} />
);

export const Percent = Template.bind({});
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
  onChange: (value, formattedValue, floatValue) => {
    action("onChange")(value, formattedValue, floatValue);
  },
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
