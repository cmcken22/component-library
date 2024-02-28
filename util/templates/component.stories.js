module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ${componentName} from "./${componentName}";

export default {
  title: "ReactComponentLibrary/${componentName}",
  component: ${componentName},
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.argTypes = {
  // status: {
  //   options: ["error", "success", "warning"],
  //   control: { type: "select" },
  // },
};
`,
  extension: `.stories.tsx`
});
