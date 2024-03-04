import { TextField } from "@mui/material";
import cx from "classnames";
import React, { useCallback, useState } from "react";
import BaseInput, { BaseInputProps } from "../BaseInput";
import Currency from "./Currency";
import Percent from "./Percent";
import TextArea from "./TextArea";

// export interface BaseInputProps {
//   id?: string;
//   status?: "error" | "warning" | "success";
//   disabled?: boolean;
//   fullWidth?: boolean;
//   children?:
//     | React.ReactNode
//     | React.JSX.Element
//     | ((props: any) => React.ReactNode);
//   containerSx?: any;
// }

export interface InputProps extends BaseInputProps {
  label?: string;
  placeholder?: string;
  helperText?: string;
  value?: string;
  required?: boolean;
  labelPosition?: "top" | "left";
  onChange?: (value: string) => void;
  endAdornment?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  // multiline?: boolean;
  // maxRows?: number;
  // minRows?: number;
  // type?: string;
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
  const [value, setValue] = useState(passedValue || "");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (onChange) onChange(e.target.value);
    },
    [onChange, setValue]
  );

  return (
    <BaseInput id={id} status={status}>
      {({ endAdornment, className }: any) => (
        <>
          <BaseInput.Label required={required} position={labelPosition}>
            {label}
          </BaseInput.Label>
          <TextField
            className={cx(className)}
            placeholder={placeholder}
            value={value}
            variant="outlined"
            disabled={disabled}
            fullWidth={fullWidth}
            onChange={handleChange}
            InputProps={{ endAdornment }}
          />
          <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
        </>
      )}
    </BaseInput>
  );
};

Input.defaultProps = {
  labelPosition: "top",
  multiline: false,
};

Input.Currency = Currency;
Input.Percent = Percent;
Input.TextArea = TextArea;

export default Input;
