import { Box } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Typography from "../Typography";
import Icon, { IconVariant } from "./Icon";

export default {
  title: "ReactComponentLibrary/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

// @ts-ignore
const iconList = Object.keys(IconVariant).map((key: IconVariant) => {
  return {
    name: key,
    icon: key,
  };
});

const Template: ComponentStory<typeof Icon> = (args) => (
  <Box
    sx={{
      maxWidth: "800px",
      display: "flex",
      flexWrap: "wrap",
      // justifyContent: "space-evenly",
      gap: 2,
      p: 3,
    }}
  >
    {iconList?.map((icon, index) => {
      if (!icon.icon) return null;
      return (
        <Box
          key={icon.name}
          sx={{
            width: "60px",
            // width: "fit-content",
            mb: 1,
            overflow: "hidden",
            // background: "red",
          }}
        >
          <Box
            sx={{
              p: 1,
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "charcoal.10",
              borderRadius: "4px",
              minWidth: "60px",
              width: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 0.5,
            }}
          >
            <Icon {...args} icon={icon.icon} />
          </Box>
          <Typography
            variant="errorMessage"
            sx={{
              textAlign: "center",
              width: "100%",
              display: "block",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {icon.name}
          </Typography>
        </Box>
      );
    })}
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
