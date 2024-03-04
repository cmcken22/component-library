// Generated with util/create-component.js
import { FormControl, MenuItem, Select } from "@mui/material";
import cx from "classnames";
import React, { useCallback, useMemo, useState } from "react";
import { useOnHover } from "src/Hooks";
import BaseInput from "../BaseInput";
import Typography from "../Typography";
import DropdownIcon from "./DropdownIcon";

interface StandardDropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface DropdownProps {
  id: string;
  label: string;
  placeholder?: string;
  open?: boolean;
  status?: "error" | "success" | "warning";
  helperText?: string;
  disabled?: boolean;
  value: string;
  fullWidth?: boolean;
  required?: boolean;
  labelPosition?: "top" | "left";
  onChange?: (value: string) => void;
  startAdornment: () => React.ReactNode;
  options: StandardDropdownOption[] | any[];
  getOptionLabel?: (option: any) => string;
  getOptionValue?: (option: any) => string;
  getOptionDisabled?: (option: any) => boolean;
  onHover?: (hovered: boolean) => void;
}

const Dropdown = ({
  id,
  label,
  placeholder,
  open: defaultOpen,
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
  onHover,
}: DropdownProps) => {
  const [value, setValue] = useState(passedValue || "");
  const [open, setOpen] = useState(defaultOpen || false);
  const onHoverMethods = useOnHover(onHover);

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
    <BaseInput id={id} status={status}>
      {({ endAdornment }: any) => (
        <>
          <BaseInput.Label required={required} position={labelPosition}>
            {label}
          </BaseInput.Label>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              className={cx("dropdown", {
                "dropdown--open": open,
              })}
              {...{ onHoverMethods }}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
              displayEmpty
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              renderValue={(value) => renderSelectedValue(value, selectedValue)}
              disabled={disabled}
              IconComponent={(props: any) => (
                <DropdownIcon endAdornment={endAdornment} {...props} />
              )}
            >
              {options?.map((opt: StandardDropdownOption | any) => {
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

Dropdown.defaultProps = {
  labelPosition: "top",
  options: [],
};

export default Dropdown;
