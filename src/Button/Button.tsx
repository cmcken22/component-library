import { Box, Button as MuiButton, Typography, styled } from "@mui/material";
import React, { ReactNode, useCallback } from "react";
// import "./Button.scss";

export interface ButtonProps {
  children?: ReactNode;
  variant?: any;
  color?: any;
  onClick?: () => void;
  disabled?: boolean;
  icon?: boolean;
}

export function hexToRGBA(hex: string, opacity: number) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

const StyledButton = styled(MuiButton)(
  ({ theme, color = "primary", variant, disabled }: any) => {
		return {};
	}
);

const Button = ({
  children,
  onClick,
  color = 'primary',
  variant = 'contained',
  disabled,
  icon,
}: ButtonProps) => {
  const handleClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return (
    <StyledButton
      onClick={handleClick}
      variant={variant}
      color={color}
      disabled={disabled}
      disableTouchRipple
    >
      {icon && (
        <Box
          sx={{
            height: "16px",
            width: "16px",
            background: "red",
            mr: 1,
          }}
        ></Box>
      )}
      {/* <Typography variant="button" sx={{ fontWeight: "bold" }}>
      </Typography> */}
      {children}
    </StyledButton>
  );
};

export default Button;
