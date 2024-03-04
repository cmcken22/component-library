import { Box, useTheme } from "@mui/material";
import React from "react";
import IconMap from "./Icon.map";

export type IconVariantType = keyof typeof IconMap;

export const IconVariant: Record<string, IconVariantType> = Object.freeze(
  Object.fromEntries(Object.keys(IconMap).map((key: any) => [key, key]))
);

export interface BaseIconProps {
  icon: IconVariantType | React.ElementType;
  color?: string;
  height?: string;
  width?: string;
  className?: string;
  sx?: any;
}

const Icon = ({ icon, color, height, width, className, sx }: BaseIconProps) => {
  const theme = useTheme();
  const IconComponent =
    typeof icon === "string" ? IconMap[icon!] : (icon as any);

  if (!IconComponent) return null;

  return (
    <Box
      className={`icon-wrapper ${className}`}
      sx={{
        color: color ? color : "charcoal.90",
        height: height ? height : "24px",
        width: width ? width : "24px",
        "& > svg": {
          height: "100%",
          width: "100%",
        },
        transition: `color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
        ...sx,
      }}
    >
      <IconComponent fill="transparent" stroke="currentColor" />
    </Box>
  );
};

export default Icon;
