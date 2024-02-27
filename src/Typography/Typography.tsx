import React, { useMemo } from "react";
import { Typography as MuiTypography } from "@mui/material";
import { FONT_WEIGHT_VALUES, FontVariant, FontWeight, FontStyle } from "../theme/Typography";

interface TypographyProps {
	variant: FontVariant;
	children: any;
	fontWeight?: FontWeight;
	fontStyle?: FontStyle;
  className?: string;
  color?: string;
}

const Typography = ({ variant, children, fontWeight, fontStyle, className, color }: TypographyProps) => {
	const convertedFontWeight = useMemo(() => FONT_WEIGHT_VALUES?.[fontWeight] ? FONT_WEIGHT_VALUES?.[fontWeight] : fontWeight, [fontWeight]);
  return (
    <MuiTypography
      className={className}
      variant={variant as any}
      fontWeight={convertedFontWeight}
      fontStyle={fontStyle}
      color={color}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;

