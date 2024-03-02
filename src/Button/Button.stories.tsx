import { action, withActions } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useMemo } from "react";
import { IconVariant } from "../Icon";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  const iconLeft: any = useMemo(() => {
    // @ts-ignore
    if (args?.iconLeft === "undefined") return undefined;
    return args?.iconLeft;
  }, [args?.iconLeft]);

  const iconRight: any = useMemo(() => {
    // @ts-ignore
    if (args?.iconRight === "undefined") return undefined;
    return args?.iconRight;
  }, [args?.iconRight]);

  return <Button {...args} iconLeft={iconLeft} iconRight={iconRight} />;
};

export const Sample = Template.bind({});
Sample.args = {
  children: "Sample Button",
  variant: "contained",
  color: "primary",
  onHover: (e) => action("onHover")(e),
};
Sample.decorators = [withActions("click")];
Sample.argTypes = {
  color: {
    options: ["primary", "secondary", "danger"],
    control: { type: "select" },
  },
  variant: {
    options: ["contained", "outlined", "link"],
    control: { type: "select" },
  },
  iconLeft: {
    options: ["undefined", ...Object.keys(IconVariant)],
    control: { type: "select" },
  },
  iconRight: {
    options: ["undefined", ...Object.keys(IconVariant)],
    control: { type: "select" },
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: "Click Me",
  variant: "contained",
  color: "primary",
  iconLeft: "Heart",
  onHover: (e) => action("onHover")(e),
};
WithIcon.decorators = [withActions("click")];
WithIcon.argTypes = {
  color: {
    options: ["primary", "secondary", "danger"],
    control: { type: "select" },
  },
  variant: {
    options: ["contained", "outlined", "link"],
    control: { type: "select" },
  },
  iconLeft: {
    options: ["undefined", ...Object.keys(IconVariant)],
    control: { type: "select" },
  },
  iconRight: {
    options: ["undefined", ...Object.keys(IconVariant)],
    control: { type: "select" },
  },
};
