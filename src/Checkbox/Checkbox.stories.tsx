// Generated with util/create-component.js
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Checkbox from "./Checkbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  defaultChecked: true,
  checked: true,
  disabled: false,
  label: "Primary",
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
// Primary.argTypes = {
//   color: {
//     options: ["primary"], // Add your options here
//     control: { type: "select" }, // This is to display a select dropdown in the Storybook UI
//   },
//   variant: {
//     options: ["contained", "outlined"], // Add your options here
//     control: { type: "select" }, // This is to display a select dropdown in the Storybook UI
//   },
// };
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