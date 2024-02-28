// Generated with util/create-component.js
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import RadioButton from "./RadioButton";
import { Box } from "@mui/material";

export default {
  title: "ReactComponentLibrary/RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <Box sx={{
    ml: 2
  }}>
    <RadioButton {...args} />
  </Box>
);

export const RadioButton2 = Template.bind({});
RadioButton2.args = {
  label: "Radio Button",
  value: "radio",
  checked: false,
  disabled: false,
};

RadioButton2.argTypes = {
  status: {
    options: ["error", "success", "warning"],
    control: { type: "select" },
  },
};
