// import { hexToRGBA } from "../Button/Button";

import { FONT_WEIGHT_VALUES } from "../theme/Typography";

export default {
  styleOverrides: {
    root: ({ theme, ownerState }: any) => {
      return {
        ".MuiInputBase-root": {
          padding: 0,
        },
        ".MuiInputBase-adornedEnd": {
          paddingRight: "8px",
        },
        width: ownerState.fullWidth ? "100%" : "240px",
        fieldset: {
          borderWidth: "1px !important",
        },
        input: {
          ...theme.typography["bodyR"],
          fontWeight: FONT_WEIGHT_VALUES.regular,
          paddingTop: theme.typography.pxToRem(6.5),
          paddingBottom: theme.typography.pxToRem(6.5),
        },
        textarea: {
          paddingTop: theme.typography.pxToRem(8),
          paddingBottom: theme.typography.pxToRem(8),
          paddingLeft: theme.typography.pxToRem(8),
          paddingRight: theme.typography.pxToRem(8),
        },
      };
    },
  },
};
