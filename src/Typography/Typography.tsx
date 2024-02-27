import React, { useMemo } from "react";
import { Typography as MuiTypography } from "@mui/material";
import { FONT_WEIGHT, FONT_VARIANT, FONT_WEIGHT_VALUES, FONT_STYLE } from "../theme/Typography";

interface TypographyProps {
	variant: FONT_VARIANT;
	children: any;
	fontWeight?: FONT_WEIGHT;
	fontStyle?: FONT_STYLE;
}

const Typography = ({ variant, children, fontWeight, fontStyle }: TypographyProps) => {
	const convertedFontWeight = useMemo(() => FONT_WEIGHT_VALUES?.[fontWeight] ? FONT_WEIGHT_VALUES?.[fontWeight] : fontWeight, [fontWeight]);
  return (
    <MuiTypography
      variant={variant as any}
      fontWeight={convertedFontWeight}
      fontStyle={fontStyle}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;

