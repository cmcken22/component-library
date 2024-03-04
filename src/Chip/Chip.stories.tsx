// Generated with util/create-component.js
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Chip from "./Chip";

export default {
  title: "ReactComponentLibrary/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "neutral",
  text: "Chip",
  hideIcon: false,
  iconPosition: "left",
  onClick: (e) => action("Chip Clicked")(e),
  onHover: (e) => action("Chip Hovered")(e),
  tooltip: "This is a Chip",
};

Primary.argTypes = {
  type: {
    options: ["positive", "negative", "warning", "pending", "neutral"],
    control: { type: "radio" },
  },
};
