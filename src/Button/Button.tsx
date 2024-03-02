import { Box, Button as MuiButton } from "@mui/material";
import React, { ReactNode, useCallback } from "react";
import Icon from "../Icon";
import { IconVariantType } from "../Icon/Icon";

export interface ButtonProps {
  children?: ReactNode;
  variant?: "contained" | "outlined" | "link";
  color?: any;
  onClick?: () => void;
  disabled?: boolean;
  iconLeft: IconVariantType | React.FC<React.SVGProps<SVGSVGElement>>;
  iconRight: IconVariantType | React.FC<React.SVGProps<SVGSVGElement>>;
  onHover?: () => void;
}

export function hexToRGBA(hex: string, opacity: number) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

const Button = ({
  children,
  onClick,
  color = "primary",
  variant = "contained",
  disabled,
  iconLeft,
  iconRight,
  onHover,
}: ButtonProps) => {
  const handleClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return (
    <MuiButton
      onClick={handleClick}
      variant={variant as any}
      color={color}
      disabled={disabled}
      disableTouchRipple
      onMouseEnter={onHover}
    >
      {iconLeft && (
        <Box mr={1}>
          <Icon icon={iconLeft} height="16px" width="16px" />
        </Box>
      )}
      {children}
      {iconRight && (
        <Box ml={1}>
          <Icon icon={iconRight} height="16px" width="16px" />
        </Box>
      )}
    </MuiButton>
  );
};

export default Button;
