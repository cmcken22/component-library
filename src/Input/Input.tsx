// Generated with util/create-component.js
import React, { useCallback, useState } from "react";
import { Box, TextField, styled } from "@mui/material";
import Typography from "../Typography";
import { FONT_VARIANT } from "../theme/Typography";

const StyledWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "status",
  slot: "Root",
})<{ status?: string }>(({ theme, status }) => {

	const colorMap = {
		error: theme.palette.error.main,
		warning: theme.palette.warning.main,
		success: theme.palette.success.main,
	};

  return {
		display: "flex",
		flexDirection: "column",
    ".Input": {
			"&__label": {
				marginBottom: theme.spacing(0.5),
			},
      "&__helper-text": {
				marginTop: theme.spacing(0.5),
        color: colorMap?.[status] ? colorMap[status] : theme.palette.text.primary
      },
    },
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: colorMap?.[status] ? `${colorMap[status]} !important` : '',
			},
			'&:hover fieldset': {
				borderColor: colorMap?.[status] ? `${colorMap[status]} !important` : theme.palette.primary.main,
			},
		}
  };
});

const Input = ({ label, status, helperText, disabled, value: passedValue, fullWidth, onChange }: any) => {
	const [value, setValue] = useState(passedValue);

	const handleChange = useCallback((e: any) => {
		setValue(e.target.value);
		if (onChange) onChange(e.target.value);
	}, [setValue]);

  return (
    <StyledWrapper status={status}>
			{label && (
				<Typography className="Input__label" variant={FONT_VARIANT.fieldLabel}>{label}</Typography>
			)}
      <TextField
				value={value}
				variant="outlined"
				disabled={disabled}
				fullWidth={fullWidth}
				onChange={handleChange}
			/>
			{helperText && (
				<Typography className="Input__helper-text" variant={FONT_VARIANT.errorMessage}>{helperText}</Typography>
			)}
    </StyledWrapper>
  );
};

export default Input;
