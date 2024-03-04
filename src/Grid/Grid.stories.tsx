// Generated with util/create-component.js
import { Box } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Grid from "./Grid";

export default {
  title: "ReactComponentLibrary/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Box
    sx={{
      // backgroundColor: "blue",
      width: "100%",
      height: "100%",
    }}
  >
    <Grid {...args} />
  </Box>
);
export const Primary = Template.bind({});
Primary.args = {};

Primary.argTypes = {
  // status: {
  //   options: ["error", "success", "warning"],
  //   control: { type: "select" },
  // },
};
