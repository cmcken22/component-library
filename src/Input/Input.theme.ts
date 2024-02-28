// import { hexToRGBA } from "../Button/Button";

import { FONT_WEIGHT_VALUES } from "../theme/Typography";

export default {
  styleOverrides: {
    root: ({ theme, ownerState }: any) => {
      const borderColor = ownerState.error
        ? theme.palette.tertiary.main
        : theme.palette.charcoal["20"];
      return {
        width: ownerState.fullWidth ? "100%" : "240px",
        fieldset: {
          borderWidth: "1px !important",
          borderColor: borderColor,
        },
        input: {
          ...theme.typography["body-r"],
          fontWeight: FONT_WEIGHT_VALUES.regular,
          padding: "0 12px",
        },
        ".MuiInputBase-root": {
          height: "36px",
        },
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: ownerState.error
              ? theme.palette.tertiary.main
              : theme.palette.primary.main,
          },
        },
      };
    },
  },
};
