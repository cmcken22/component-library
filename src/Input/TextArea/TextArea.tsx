import { TextField } from "@mui/material";
import _debounce from "lodash.debounce";
import React, { useCallback, useState } from "react";
import BaseInput, { BaseInputProps } from "src/BaseInput";

export interface TextAreaProps extends BaseInputProps {
  maxRows?: number;
  minRows?: number;
  onChange?: (value: string) => void;
  debounce?: number;
  maxChars?: number;
  maxWords?: number;
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
  debounce,
  maxChars,
  maxWords,
}: any) => {
  const [value, setValue] = useState(passedValue || "");

  const debounceOnChange = useCallback(
    _debounce((value: any) => {
      if (onChange) onChange(value);
    }, debounce),
    [debounce, onChange]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("maxWords:", maxWords);
      console.log("maxChars:", maxChars);
      if ((maxChars || maxChars === 0) && e.target.value.length > maxChars) {
        return;
      }
      if (maxWords && e.target.value.split(" ").length > maxWords) {
        return;
      }
      setValue(e.target.value);
      if (onChange) {
        if (debounce || debounce === 0) {
          debounceOnChange(e.target.value);
        } else onChange(e.target.value);
      }
    },
    [onChange, setValue, debounce, debounceOnChange, maxChars, maxWords]
  );

  return (
    <BaseInput id={id} status={status} disabled={disabled}>
      {({ endAdornment }: any) => (
        <>
          <BaseInput.Label required={required} position={labelPosition}>
            {label}
          </BaseInput.Label>
          <TextField
            value={value}
            placeholder={placeholder}
            variant="outlined"
            disabled={disabled}
            fullWidth={fullWidth}
            onChange={handleChange}
            multiline
            minRows={minRows}
            maxRows={maxRows}
            InputProps={{ endAdornment }}
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
