import { Box } from "@mui/material";
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import RadioButtonGroup from "./RadioButtonGroup";

export default {
  title: "ReactComponentLibrary/RadioButtonGroup",
  component: RadioButtonGroup,
} as ComponentMeta<typeof RadioButtonGroup>;

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => (
  <Box sx={{ ml: 2 }}>
    <RadioButtonGroup {...args} />
  </Box>
);

export const Sample = Template.bind({});
Sample.args = {
  options: [
    {
      label: "Option 1",
      value: "option_1",
      disabled: false,
    },
    {
      label: "Option 2",
      value: "option_2",
      disabled: false,
    },
    {
      label: "Option 3",
      value: "option_3",
      disabled: true,
    },
    {
      label: "Option 4",
      value: "option_4",
      disabled: false,
    },
  ],
  value: "",
  disabled: false,
  row: false,
  onChange: (value) => action("onChange")(value),
};

Sample.argTypes = {
  // status: {
  //   options: ["error", "success", "warning"],
  //   control: { type: "select" },
  // },
};
