// import { hexToRGBA } from "../Button/Button";

export default {
  styleOverrides: {
    root: ({ theme, ownerState }: any) => {
      const borderColor = ownerState.error ? theme.palette.tertiary.main : theme.palette.charcoal['20'];
      return {
        width: ownerState.fullWidth ? '100%' : '240px',
        fieldset: {
          borderWidth: '1px !important',
          borderColor: borderColor,
        },
        input: {
          padding: '0 12px',
        },
        '.MuiInputBase-root': {
          height: '36px',
        },
        '& .MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: ownerState.error ? theme.palette.tertiary.main : theme.palette.primary.main,
          },
        }
      };
    },
  },
};
