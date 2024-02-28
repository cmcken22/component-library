import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import RadioButtonGroup from "./RadioButtonGroup";
import { Box } from "@mui/material";

export default {
  title: "ReactComponentLibrary/RadioButtonGroup",
  component: RadioButtonGroup,
} as ComponentMeta<typeof RadioButtonGroup>;

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => (
  <Box sx={{ ml: 2 }}>
    <RadioButtonGroup {...args} />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = {
  options: [
    {
      label: "Option 1",
      value: "1",
      disabled: false,
    },
    {
      label: "Option 2",
      value: "2",
      disabled: false,
    },
    {
      label: "Option 3",
      value: "3",
      disabled: true,
    },
    {
      label: "Option 4",
      value: "4",
      disabled: false,
    },
  ],
  value: "",
  disabled: false,
  row: false,
};

Primary.argTypes = {
  // status: {
  //   options: ["error", "success", "warning"],
  //   control: { type: "select" },
  // },
};
