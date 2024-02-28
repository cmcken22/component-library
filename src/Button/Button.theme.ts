import { hexToRGBA } from "./Button";

export default {
  styleOverrides: {
    root: ({ theme, ownerState }: any) => {
      const { variant } = ownerState;

      const baseStyles = {
        ...theme.typography.button,
        boxShadow: "none !important",
        textTransform: "none",
        "&.Mui-disabled": {
          opacity: 0.4,
        },
      };

      if (variant === "outlined") {
        return {
          ...baseStyles,
          "&:hover": {
            backgroundColor: hexToRGBA(
              theme.palette[ownerState.color].main,
              0.1
            ),
          },
          "&:active": {
            backgroundColor: hexToRGBA(
              theme.palette[ownerState.color].main,
              0.2
            ),
          },
        };
      }
      if (variant === "link") {
        return {
          ...baseStyles,
          color: theme.palette[ownerState.color].main,
          "&:hover": {
            color: theme.palette[ownerState.color].light,
            backgroundColor: "transparent",
          },
          "&:active": {
            color: theme.palette[ownerState.color].dark,
          },
          "&:disabled": {
            opacity: 0.4,
          },
        };
      }
      return {
        ...baseStyles,
        "&:hover": {
          backgroundColor: theme.palette[ownerState.color].light,
        },
        "&:active": {
          backgroundColor: theme.palette[ownerState.color].dark,
        },
      };
    },
  },
};
