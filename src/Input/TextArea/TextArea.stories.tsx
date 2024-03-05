import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Input from "../Input";
import TextAreaComponent from "../TextArea";

export default {
  title: "ReactComponentLibrary/Input/TextArea",
  component: TextAreaComponent,
} as ComponentMeta<typeof TextAreaComponent>;

const Template: ComponentStory<typeof TextAreaComponent> = (args) => (
  <Input.TextArea {...args} />
);

export const TextArea = Template.bind({});
TextArea.args = {
  id: "TextArea",
  label: "Title",
  placeholder: "Type here...",
  value:
    "I’m typing a bunch of text here just to show what it looks like when it’s filled.",
  required: true,
  onChange: (e) => action("onChange")(e),
};
