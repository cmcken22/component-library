// Generated with util/create-component.js
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TextArea from "./TextArea";

export default {
  title: "ReactComponentLibrary/TextArea",
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Title",
  placeholder: "Type here...",
  value:
    "I’m typing a bunch of text here just to show what it looks like when it’s filled.",
  required: true,
  onChange: (e) => action("onChange")(e),
};

Primary.argTypes = {
  // status: {
  //   options: ["error", "success", "warning"],
  //   control: { type: "select" },
  // },
};
