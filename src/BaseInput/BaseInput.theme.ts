// Generated with util/create-component.js
export default {
  styleOverrides: {
    root: ({ theme, ownerState }: any) => {
      console.log("ownerState:", ownerState);

      const colorMap = {
        error: theme.palette.error.main,
        success: theme.palette.success.main,
        warning: theme.palette.warning.main,
      };
      return {
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: colorMap?.[ownerState?.status]
              ? `${colorMap[ownerState?.status]} !important`
              : "",
          },
        },
      };
    },
  },
};
