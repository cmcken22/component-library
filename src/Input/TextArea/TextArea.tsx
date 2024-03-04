import { TextField } from "@mui/material";
import React from "react";
import BaseInput, { BaseInputProps } from "../../BaseInput";

export interface TextAreaProps extends Omit<BaseInputProps, "multiline"> {
  maxRows?: number;
  minRows?: number;
  onChange?: (value: string) => void;
}

const TextArea = ({
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
  maxRows,
  minRows,
  onChange,
}: TextAreaProps) => {
  return (
    <BaseInput
      id={id}
      status={status}
      disabled={disabled}
      required={required}
      labelPosition={labelPosition}
    >
      {({ endAdornment }: any) => (
        <>
          <BaseInput.Label>{label}</BaseInput.Label>
          <TextField
            value={passedValue}
            placeholder={placeholder}
            variant="outlined"
            disabled={disabled}
            fullWidth={fullWidth}
            onChange={(e) => onChange?.(e.target.value)}
            multiline
            minRows={minRows}
            maxRows={maxRows}
            InputProps={{
              endAdornment,
            }}
          />
          <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
        </>
      )}
    </BaseInput>
  );
};

TextArea.defaultProps = {
  labelPosition: "top",
  minRows: 2,
  maxRows: 4,
};

export default TextArea;
