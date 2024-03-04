import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { NumericFormat } from "react-number-format";
import BaseInput from "../../BaseInput";
import Typography from "../../Typography";
import { InputProps } from "../Input";

// @ts-ignore
export interface PercentInputProps extends InputProps {
  onChange?: (
    value: string,
    formattedValue: string,
    floatValue: Number
  ) => void;
  fixedDecimalScale?: boolean;
  decimalScale?: number;
  thousandSeparator?: boolean;
}

const Percent = ({
  id,
  label,
  placeholder,
  status,
  helperText,
  disabled,
  value: passedValue,
  fullWidth,
  required,
  labelPosition = "top",
  onChange,
  fixedDecimalScale,
  decimalScale,
  thousandSeparator,
}: PercentInputProps) => {
  const [value, setValue] = useState(passedValue);

  const handleChange = useCallback(
    (e: { formattedValue: string; value: string; floatValue: Number }) => {
      const value = e.value;
      setValue(value);
      if (onChange) onChange(value, e.formattedValue, e.floatValue);
    },
    [setValue, onChange]
  );

  const percentAdornment = useCallback(() => {
    return (
      <InputAdornment position="start" sx={{ ml: "8px" }}>
        <Box sx={{ width: "15px" }}>
          <Typography variant="bodyR" color="charcoal.90">
            %
          </Typography>
        </Box>
      </InputAdornment>
    );
  }, []);

  return (
    <BaseInput
      id={id}
      required={required}
      status={status}
      labelPosition={labelPosition}
    >
      {({ endAdornment }: any) => (
        <>
          <BaseInput.Label>{label}</BaseInput.Label>
          <NumericFormat
            value={value}
            onValueChange={handleChange}
            thousandSeparator={thousandSeparator}
            fixedDecimalScale={fixedDecimalScale}
            decimalScale={decimalScale}
            customInput={TextField}
            fullWidth={fullWidth}
            disabled={disabled}
            sx={{
              "& input": {
                textAlign: "left",
              },
            }}
            InputProps={{
              endAdornment: endAdornment || percentAdornment(),
            }}
          />
          <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
        </>
      )}
    </BaseInput>
  );
};

Percent.defaultProps = {
  labelPosition: "top",
  fixedDecimalScale: true,
  decimalScale: 2,
  thousandSeparator: false,
  disabled: false,
};

export default Percent;
