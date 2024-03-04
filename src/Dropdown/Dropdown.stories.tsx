// Generated with util/create-component.js
import { Box } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Dropdown from "./Dropdown";

export default {
  title: "ReactComponentLibrary/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Box
    sx={{
      width: "200px",
    }}
  >
    <Dropdown {...args} />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = {
  id: "__dropdown__",
  label: "Label",
  placeholder: "Placeholder",
  fullWidth: true,
  getOptionLabel: (option: any) => option.xxx,
  getOptionValue: (option: any) => option.yyy,
  options: [
    {
      xxx: "Option 1",
      yyy: "option1",
    },
    {
      xxx: "Option 2",
      yyy: "option2",
    },
  ],
};

Primary.argTypes = {
  status: {
    options: ["error", "success", "warning"],
    control: { type: "select" },
  },
};
