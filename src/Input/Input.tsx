// Generated with util/create-component.js
import React, { useCallback, useState } from "react";
import { Box, TextField, Typography, styled } from "@mui/material";


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
    ".Input": {
      "&__helper-text": {
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
				<Typography className="Input__label">{label}</Typography>
			)}
      <TextField
				value={value}
				variant="outlined"
				disabled={disabled}
				fullWidth={fullWidth}
				onChange={handleChange}
			/>
			{helperText && (
				<Typography className="Input__helper-text">{helperText}</Typography>
			)}
    </StyledWrapper>
  );
};

export default Input;
