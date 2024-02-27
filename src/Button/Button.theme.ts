import { FONTS } from "../theme/Typography";

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
            backgroundColor: theme.palette[ownerState.color].light,
          },
          "&:active": {
            backgroundColor: theme.palette[ownerState.color].dark,
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
