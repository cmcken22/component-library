import { Typography as MuiTypography } from "@mui/material";
import React, { useMemo } from "react";
import {
  FONT_WEIGHT_VALUES,
  FontStyle,
  FontVariant,
  FontWeight,
} from "../theme/Typography";

interface TypographyProps {
  variant: FontVariant;
  children: any;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  className?: string;
  color?: string;
  fontSize?: string;
  sx?: any;
}

const Typography = ({
  variant,
  children,
  fontWeight,
  fontStyle,
  className,
  color,
  fontSize,
  sx,
}: TypographyProps) => {
  const convertedFontWeight = useMemo(
    () =>
      FONT_WEIGHT_VALUES?.[fontWeight]
        ? FONT_WEIGHT_VALUES?.[fontWeight]
        : fontWeight,
    [fontWeight]
  );

  console.log("variant:", variant);

  return (
    <MuiTypography
      className={className}
      variant={variant as any}
      fontWeight={convertedFontWeight}
      fontStyle={fontStyle}
      color={color}
      fontSize={fontSize}
      sx={sx}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;
