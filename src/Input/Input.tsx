import { TextField } from "@mui/material";
import cx from "classnames";
import React, { useCallback, useState } from "react";
import BaseInput, { BaseInputProps } from "../BaseInput";
import Currency from "./Currency";
import Percent from "./Percent";
import TextArea from "./TextArea";

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
  const [value, setValue] = useState(passedValue || "");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (onChange) onChange(e.target.value);
    },
    [onChange, setValue]
  );

  // console.log("status:", status);

  return (
    <BaseInput
      id={id}
      required={required}
      status={status}
      labelPosition={labelPosition}
    >
      {({ endAdornment, className }: any) => (
        <>
          <BaseInput.Label>{label}</BaseInput.Label>
          <TextField
            // ref={(ref) => {
            //   console.log("ref", ref);
            //   // if (!!window) {
            //   const fieldset = ref?.querySelector("fieldset");
            //   console.log("fieldset", fieldset);
            //   // const computedStyle = window.getComputedStyle(fieldset);
            //   const computedStyle =
            //     document.defaultView.getComputedStyle(fieldset);
            //   console.log("computedStyle", computedStyle?.borderColor);
            //   // }
            //   // const style = fieldset?.style;
            //   // console.log("style", );
            // }}
            className={cx(className)}
            placeholder={placeholder}
            value={value}
            variant="outlined"
            disabled={disabled}
            fullWidth={fullWidth}
            onChange={handleChange}
            InputProps={{ endAdornment }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "red !important",
                },
              },
            }}
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
