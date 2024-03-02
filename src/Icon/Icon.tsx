import { Box, useTheme } from "@mui/material";
import React from "react";
import IconMap from "./Icon.map";

export const IconVariant = Object.freeze(
  Object.fromEntries(Object.keys(IconMap).map((key) => [key, key]))
);

export type IconVariantType = keyof typeof IconMap;

export interface BaseIconProps {
  icon: IconVariantType | React.FC<React.SVGProps<SVGSVGElement>>;
  color?: string;
  height?: string;
  width?: string;
}

const Icon = ({ icon, color, height, width }: BaseIconProps) => {
  const theme = useTheme();
  const IconComponent = typeof icon === "string" ? IconMap[icon!] : icon;

  if (!IconComponent) return null;

  return (
    <Box
      className="icon-wrapper"
      sx={{
        color: color ? color : "charcoal.90",
        height: height ? height : "24px",
        width: width ? width : "24px",
        "& > svg": {
          height: "100%",
          width: "100%",
        },
        transition: `color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
      }}
    >
      <IconComponent
        fill="transparent"
        stroke="currentColor"
        height="currentHeight"
        width="currentWidth"
        strokeWidth="1.5"
      />
    </Box>
  );
};

export default Icon;
