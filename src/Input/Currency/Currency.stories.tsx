import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Input from "../Input";
import CurrencyInput from "./Currency";

export default {
  title: "ReactComponentLibrary/Input/Currency",
  component: CurrencyInput,
} as ComponentMeta<typeof CurrencyInput>;

const Template: ComponentStory<typeof CurrencyInput> = (args) => (
  <Input.Currency {...args} />
);

export const Currency = Template.bind({});
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
  onChange: (value, formattedValue, floatValue) => {
    action("onChange")(value, formattedValue, floatValue);
  },
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
