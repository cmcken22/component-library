import { Box } from "@mui/material";
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RadioButton from "./RadioButton";

export default {
  title: "ReactComponentLibrary/RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <Box
    sx={{
      ml: 2,
    }}
  >
    <RadioButton {...args} />
  </Box>
);

export const Sample = Template.bind({});
Sample.args = {
  label: "Radio Button",
  value: "radio",
  checked: false,
  disabled: false,
  onChange: (value, checked) => action("onChange")(value, checked),
};

Sample.argTypes = {
  status: {
    options: ["error", "success", "warning"],
    control: { type: "select" },
  },
};
