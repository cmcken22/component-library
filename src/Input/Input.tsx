// Generated with util/create-component.js
import React from "react";
import BaseInput, { BaseInputProps } from "../BaseInput";

export interface InputProps
  extends Omit<BaseInputProps, "multiline" | "minRows" | "maxRows"> {
  label?: string;
}

const Input = ({
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
}: InputProps) => {
  return (
    <BaseInput
      id={id}
      placeholder={placeholder}
      label={label}
      status={status}
      helperText={helperText}
      disabled={disabled}
      value={passedValue}
      fullWidth={fullWidth}
      required={required}
      labelPosition={labelPosition}
      multiline={false}
      onChange={onChange}
    />
  );
};

Input.defaultProps = {
  labelPosition: "top",
  multiline: false,
};

export default Input;
