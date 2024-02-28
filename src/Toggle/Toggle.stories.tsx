// Generated with util/create-component.js
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Toggle from "./Toggle";

export default {
  title: "ReactComponentLibrary/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  displayToggleText: false,
  label: "Toggle Label",
};

Primary.argTypes = {
  // status: {
  //   options: ["error", "success", "warning"],
  //   control: { type: "select" },
  // },
};
