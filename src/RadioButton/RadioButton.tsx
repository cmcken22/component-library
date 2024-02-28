import React, { useCallback, useState } from "react";
import { Box, FormControlLabel, styled } from "@mui/material";
import { hexToRGBA } from "../Button/Button";
import { FONTS } from "../theme/Typography";

const RadioButtonWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "checked",
  slot: "root",
})<{ checked?: boolean; disabled?: boolean }>(
  ({ theme, checked, disabled }) => {
    return {
      width: "fit-content",
      ...(!checked &&
        !disabled && {
          "&:hover": {
            ".RadioButton": {
              borderColor: theme.palette.primary.main,
              backgroundColor: hexToRGBA(theme.palette.primary.main, 0.1),
            },
          },
        }),
    };
  }
);

const StyledRadioButton = styled(Box, {
  shouldForwardProp: (prop) => prop !== "checked",
  slot: "root",
})<{ checked?: boolean; disabled?: boolean }>(
  ({ theme, checked, disabled }) => {
    console.log("checked:", checked);
    return {
      height: 16,
      width: 16,
      borderRadius: "50%",
      marginRight: theme.spacing(1),
      border: `${checked ? 4 : 1}px solid ${theme.palette.charcoal.main}`,
      ...(!checked &&
        !disabled && {
          "&:hover": {
            borderColor: theme.palette.primary.main,
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.1),
          },
        }),
      ...(checked && {
        borderColor: theme.palette.primary.main,
      }),
      ...(disabled && {
        borderColor: theme.palette.charcoal["30"],
      }),
    };
  }
);

const StyledFormControlLabel = styled(FormControlLabel, {
  slot: "root",
})<{ status?: string }>(({ theme }) => {
  return {
    margin: 0,
    webkitUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
    ".MuiCheckbox-root": {
      paddingRight: theme.spacing(1),
    },
    ".MuiFormControlLabel-label": {
      fontFamily: FONTS.NUNITO,
      fontWeight: 400,
      fontSize: theme.typography.pxToRem(16),
    },
  };
});

const RadioButton = ({
  checked: passedValue,
  disabled,
  label,
  value,
  onChange,
}: any) => {
  const [checked, setChecked] = useState(passedValue || false);

  // useEffect(() => {
  // 	if (passedValue !== checked) {
  // 		setChecked(passedValue);
  // 	}
  // }, [passedValue, checked]);

  const handleChange = useCallback(
    (checked: boolean) => {
      if (disabled) return;
      setChecked(checked);
      if (onChange) onChange(value, checked);
    },
    [setChecked, onChange, disabled, value]
  );

  return (
    <RadioButtonWrapper
      className="RadioButtonWrapper"
      checked={checked}
      disabled={disabled}
    >
      <StyledFormControlLabel
        label={label}
        value={value}
        onClick={() => handleChange(!checked)}
        control={
          <StyledRadioButton
            className="RadioButton"
            checked={checked}
            disabled={disabled}
          />
        }
      />
    </RadioButtonWrapper>
  );
};

export default RadioButton;
