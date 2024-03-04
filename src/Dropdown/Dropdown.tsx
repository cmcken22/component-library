// Generated with util/create-component.js
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import BaseInput from "../BaseInput";
import Icon, { IconVariant } from "../Icon";
import Typography from "../Typography";

interface StandardDropdownOptions {
  label: string;
  value: string;
  disabled?: boolean;
}

interface DropdownProps {
  id: string;
  label: string;
  placeholder?: string;
  status?: "error" | "success";
  helperText?: string;
  disabled?: boolean;
  value: string;
  fullWidth?: boolean;
  required?: boolean;
  labelPosition?: "top" | "side";
  onChange?: (value: string) => void;
  startAdornment: () => React.ReactNode;
  options: StandardDropdownOptions[] | any[];
  getOptionLabel?: (option: any) => string;
  getOptionValue?: (option: any) => string;
  getOptionDisabled?: (option: any) => boolean;
}

const Dropdown = ({
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
  options,
  getOptionLabel,
  getOptionValue,
  getOptionDisabled,
}: DropdownProps) => {
  const [value, setValue] = useState(passedValue || "");

  const handleChange = useCallback(
    (e: any) => {
      setValue(e.target.value);
      if (onChange) onChange(e.target.value);
    },
    [setValue, onChange]
  );

  const selectedValue = useMemo(() => {
    return options.find((opt) => {
      const optValue = getOptionValue ? getOptionValue(opt) : opt.value;
      return optValue === value;
    });
  }, [options, getOptionValue, value]);

  const renderSelectedValue = useCallback(
    (value?: any, selectedValue?: any) => {
      console.log("_value:", value);
      console.log("_test:", !value && placeholder);

      if (!value && placeholder) {
        return (
          <Typography variant="bodyR" color="charcoal.light">
            {placeholder}
          </Typography>
        );
      }
      return (
        <Typography variant="bodyR" color="text.primary">
          {getOptionLabel
            ? getOptionLabel(selectedValue)
            : selectedValue?.label}
        </Typography>
      );
    },
    [getOptionLabel, placeholder]
  );

  return (
    <BaseInput
      id={id}
      required={required}
      status={status}
      labelPosition={labelPosition}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {({ endAdornment }: any) => (
        <>
          <BaseInput.Label>{label}</BaseInput.Label>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              displayEmpty
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              renderValue={(value) => renderSelectedValue(value, selectedValue)}
              disabled={disabled}
              IconComponent={(props: any) => {
                if (endAdornment) {
                  return (
                    <Box
                      {...props}
                      sx={{
                        top: "8px !important",
                        margin: "0",
                        height: "20px",
                        width: "20px",
                        display: "flex",
                        alignItems: "center",
                        transform: "rotate(0deg) !important",
                        ".MuiInputAdornment-root": {
                          margin: "0",
                        },
                      }}
                    >
                      {endAdornment}
                    </Box>
                  );
                }
                return (
                  <Icon
                    className={props?.className}
                    icon={IconVariant.NavArrowDown}
                    height="20px"
                    width="20px"
                    color="charcoal.dark"
                  />
                );
              }}
            >
              {options?.map((opt: any) => {
                const value = getOptionValue ? getOptionValue(opt) : opt?.value;
                const optDisabled = getOptionDisabled
                  ? getOptionDisabled(opt)
                  : opt?.disabled;
                return (
                  <MenuItem
                    key={value}
                    value={value}
                    disabled={optDisabled || disabled}
                  >
                    {getOptionLabel ? getOptionLabel(opt) : opt?.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
        </>
      )}
    </BaseInput>
  );
};

export default Dropdown;
