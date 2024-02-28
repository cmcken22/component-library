import React, { useCallback, useState } from "react";
import RadioButton from "../RadioButton";
import { Box, styled } from "@mui/material";

const RadioButtonGroupWrapper = styled(Box, {
	shouldForwardProp: (prop) => prop !== "row",
  slot: "root",
})<{ row?: boolean }>(({ theme, row }) => {
  return {
		...(!row ? {
			display: 'flex',
      flexDirection: 'column',
      '.RadioButtonWrapper': {
        marginBottom: theme.spacing(2),
      }
		} : {
      display: 'flex',
      flexDirection: 'row',
      '.RadioButtonWrapper': {
        marginRight: theme.spacing(2),
      }
    })
  }
});

interface RadioButtonGroupProps {
  options: any[];
  value: any;
  onChange: (value: any) => void;
  disabled?: boolean;
  row?: boolean;
}

const RadioButtonGroup = ({ options, value: selectedValue, onChange, disabled, row }: RadioButtonGroupProps) => {
  const [value, setValue] = useState(selectedValue || null);

  const getOptionChecked = useCallback((optionValue: any) => {
    return optionValue === value;
  }, [value]);

  const handleChange = useCallback((value: any, checked: any) => {
    setValue(checked ? value : null);
    if (onChange) onChange(checked ? value : null);
  }, [setValue, onChange]);

  return (
    <RadioButtonGroupWrapper row={row}>
      {options?.map((option, index) => (
        <RadioButton
          key={`${option?.label}--${index}--${getOptionChecked(option?.value)}`}
          {...option}
          onChange={handleChange}
          checked={() => getOptionChecked(option?.value)}
          disabled={option?.disabled || disabled}
        />
      ))}
    </RadioButtonGroupWrapper>
  );
};

export default RadioButtonGroup;
