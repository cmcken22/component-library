// Generated with util/create-component.js
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Input from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  disabled: false,
  helperText: "Helper Text",
  required: false,
  value: 'HELLO WORLD',
  status: "error",
  fullWidth: true,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   children: "Secondary",
//   variant: "contained",
//   color: "secondary",
// };

// export const Tertiary = Template.bind({});
// Tertiary.args = {
//   children: "Tertiary",
//   variant: "contained",
//   color: "tertiary",
// };

// // Update the argTypes to include options for the color prop
Primary.argTypes = {
  status: {
    options: ["error", "success", "warning"],
    control: { type: "select" },
  },
};
// Secondary.argTypes = {
//   color: {
//     options: ["secondary"], // Add your options here
//     control: { type: "select" }, // This is to display a select dropdown in the Storybook UI
//   },
//   variant: {
//     options: ["contained", "outlined"], // Add your options here
//     control: { type: "select" }, // This is to display a select dropdown in the Storybook UI
//   },
// };
// Tertiary.argTypes = {
//   color: {
//     options: ["tertiary"], // Add your options here
//     control: { type: "select" }, // This is to display a select dropdown in the Storybook UI
//   },
//   variant: {
//     options: ["contained", "outlined"], // Add your options here
//     control: { type: "select" }, // This is to display a select dropdown in the Storybook UI
//   },
// };