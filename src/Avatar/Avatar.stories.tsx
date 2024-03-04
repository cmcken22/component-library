// Generated with util/create-component.js
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Avatar from "./Avatar";

export default {
  title: "ReactComponentLibrary/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  text: "JD",
  size: "default",
  onHover: (hovered: boolean) => action("onHover")(hovered),
  onClick: (hovered: boolean) => action("onClick")(hovered),
};

Sample.argTypes = {
  size: {
    options: ["default", "large", "small"],
    control: { type: "select" },
  },
};

export const WithImage = Template.bind({});
WithImage.args = {
  text: "JD",
  size: "default",
  src: "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/highres-mjb-4858.jpg?1643119143",
  onHover: (hovered: boolean) => action("onHover")(hovered),
  onClick: (hovered: boolean) => action("onClick")(hovered),
};

WithImage.argTypes = {
  size: {
    options: ["default", "large", "small"],
    control: { type: "select" },
  },
};
