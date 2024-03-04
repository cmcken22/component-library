import { InputAdornment, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { NumericFormat } from "react-number-format";
import BaseInput from "../../BaseInput";
import Icon, { IconVariant } from "../../Icon";
import { InputProps } from "../Input";

// @ts-ignore
export interface CurrencyInputProps extends InputProps {
  onChange?: (
    value: string,
    formattedValue: string,
    floatValue: Number
  ) => void;
}

const Currency = ({
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
}: CurrencyInputProps) => {
  const [value, setValue] = useState(passedValue);

  const handleChange = useCallback(
    (e: { formattedValue: string; value: string; floatValue: Number }) => {
      setValue(e.value);
      if (onChange) onChange(e.value, e.formattedValue, e.floatValue);
    },
    [setValue, onChange]
  );

  const startAdornment = useCallback(() => {
    return (
      <InputAdornment position="start" sx={{ ml: "8px" }}>
        <Icon icon={IconVariant.Dollar} height="20px" width="20px" />
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
            thousandSeparator={true}
            fixedDecimalScale={true}
            decimalScale={2}
            customInput={TextField}
            fullWidth={fullWidth}
            disabled={disabled}
            sx={{
              "& input": {
                textAlign: "right",
              },
            }}
            InputProps={{
              startAdornment: startAdornment(),
              endAdornment,
            }}
          />
          <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
        </>
      )}
    </BaseInput>
  );
};

export default Currency;
