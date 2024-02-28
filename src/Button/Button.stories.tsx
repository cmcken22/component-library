import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  variant: "contained",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  variant: "contained",
  color: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  variant: "contained",
  color: "danger",
};

Primary.argTypes = {
  color: {
    options: ["primary"],
    control: { type: "select" },
  },
  variant: {
    options: ["contained", "outlined", "link"],
    control: { type: "select" },
  },
};
Secondary.argTypes = {
  color: {
    options: ["secondary"],
    control: { type: "select" },
  },
  variant: {
    options: ["contained", "outlined", "link"],
    control: { type: "select" },
  },
};
Danger.argTypes = {
  color: {
    options: ["danger"],
    control: { type: "select" },
  },
  variant: {
    options: ["contained", "outlined", "link"],
    control: { type: "select" },
  },
};
