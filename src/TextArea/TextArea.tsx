import React from "react";
import BaseInput, { BaseInputProps } from "../BaseInput";

interface TextAreaProps extends Omit<BaseInputProps, "multiline"> {
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
      placeholder={placeholder}
      multiline
      minRows={minRows}
      maxRows={maxRows}
      label={label}
      status={status}
      helperText={helperText}
      disabled={disabled}
      value={passedValue}
      fullWidth={fullWidth}
      required={required}
      labelPosition={labelPosition}
      onChange={onChange}
    />
  );
};

TextArea.defaultProps = {
  labelPosition: "top",
  minRows: 2,
  maxRows: 4,
};

export default TextArea;
