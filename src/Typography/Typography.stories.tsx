// Generated with util/create-component.js
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Typography from "./Typography";
import { FONT_STYLE, FONT_VARIANT, FONT_WEIGHT } from "../theme/Typography";
import { Box } from "@mui/material";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const items = [
	{
		label: 'H1',
		variant: FONT_VARIANT.h1
	},
	{
		label: 'H2',
		variant: FONT_VARIANT.h2
	},
	{
		label: 'H3',
		variant: FONT_VARIANT.h3
	},
	{
		label: 'H4',
		variant: FONT_VARIANT.h4
	},
	{
		label: 'H5',
		variant: FONT_VARIANT.h5
	},
	{
		label: 'Body r',
		variant: FONT_VARIANT.bodyR
	},
	{
		label: 'Body r (bold)',
		variant: FONT_VARIANT.bodyR,
		fontWeight: FONT_WEIGHT.bold
	},
	{
		label: 'Body s',
		variant: FONT_VARIANT.bodyS
	},
	{
		label: 'Body s (bold)',
		variant: FONT_VARIANT.bodyS,
		fontWeight: FONT_WEIGHT.bold
	},
	{
		label: 'Body xs',
		variant: FONT_VARIANT.bodyXS
	},
	{
		label: 'Body xs (bold)',
		variant: FONT_VARIANT.bodyXS,
		fontWeight: FONT_WEIGHT.bold
	},
	{
		label: 'Error Messages / Fields',
		variant: FONT_VARIANT.errorMessage
	},
	{
		label: 'Button',
		variant: FONT_VARIANT.button
	},
	{
		label: 'Field Label',
		variant: FONT_VARIANT.fieldLabel
	}
];

const Template: ComponentStory<typeof Typography> = (args) => (
  <>
    {items.map((item, index) => (
      <Box sx={{ mb: 2 }}>
        <Typography
          key={index}
          variant={item.variant}
          fontWeight={item.fontWeight}
        >
          The font here is "{item.label}"
        </Typography>
      </Box>
    ))}
  </>
);

export const AllFonts = Template.bind({});

const Template2: ComponentStory<typeof Typography> = (args) => (<Typography {...args} />);

export const PlainFont = Template2.bind({});
PlainFont.args = {
	variant: FONT_VARIANT.h1,
	children: 'Sample Text',
};
PlainFont.argTypes = {
  variant: {
    options: Object.values(FONT_VARIANT),
    control: { type: "select" },
  },
  fontWeight: {
    options: Object.values(FONT_WEIGHT),
    control: { type: "select" },
  },
  fontStyle: {
    options: Object.values(FONT_STYLE),
    control: { type: "select" },
  },
};