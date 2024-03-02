import { Box, InputAdornment, TextField, styled } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import Icon, { IconVariant } from "../Icon";
import Typography from "../Typography";
import { FONT_VARIANT } from "../theme/Typography";

const StyledWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "status",
  slot: "Root",
})<{ status?: string }>(({ theme, status }) => {
  const colorMap = {
    error: theme.palette.error.main,
    warning: theme.palette.warning.main,
    success: theme.palette.success.main,
  };

  return {
    display: "flex",
    flexDirection: "column",
    color: colorMap?.[status],
    input: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      "&:-internal-autofill-selected": {
        backgroundColor: "red",
      },
    },
    "input:-internal-autofill-selected": {
      backgroundColor: "red",
    },
    ".icon-wrapper": {
      color: colorMap?.[status],
    },
    ".Input": {
      "&__label": {
        marginBottom: theme.spacing(0.5),
      },
      "&__helper-text": {
        marginTop: theme.spacing(0.5),
        lineHeight: "13.64px",
      },
      "&__required-indicator": {
        marginLeft: theme.spacing(0.25),
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: colorMap?.[status] ? `${colorMap[status]} !important` : "",
      },
      // "&:hover fieldset": {
      //   borderColor: colorMap?.[status]
      //     ? `${colorMap[status]} !important`
      //     : theme.palette.primary.main,
      // },
    },
  };
});

export interface BaseInputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  status?: "error" | "warning" | "success";
  helperText?: string;
  disabled?: boolean;
  value?: string;
  fullWidth?: boolean;
  required?: boolean;
  labelPosition?: "top" | "left";
  multiline?: boolean;
  maxRows?: number;
  minRows?: number;
  onChange?: (value: string) => void;
}

const BaseInput = ({
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
  multiline,
  maxRows,
  minRows,
  onChange,
}: BaseInputProps) => {
  const [value, setValue] = useState(passedValue);

  const handleChange = useCallback(
    (e: any) => {
      setValue(e.target.value);
      if (onChange) onChange(e.target.value);
    },
    [setValue]
  );

  const renderRequiredIndicator = useCallback(() => {
    if (!required) return null;
    return (
      <Typography
        className="Input__required-indicator"
        variant={FONT_VARIANT.fieldLabel}
        color="danger.main"
      >
        *
      </Typography>
    );
  }, [required]);

  const renderLabel = useCallback(() => {
    if (!label) return null;
    return (
      <Box
        sx={{
          ...(helperText &&
            labelPosition === "left" && {
              mb: "17px",
            }),
        }}
      >
        <Typography
          className="Input__label"
          variant={FONT_VARIANT.fieldLabel}
          color="text.primary"
        >
          {label}
        </Typography>
        {renderRequiredIndicator()}
      </Box>
    );
  }, [label, renderRequiredIndicator, helperText, labelPosition]);

  const renderHelperText = useCallback(() => {
    if (!helperText) return null;
    return (
      <Typography
        className="Input__helper-text"
        variant={FONT_VARIANT.errorMessage}
      >
        {helperText}
      </Typography>
    );
  }, [helperText]);

  const statusIcon = useMemo(() => {
    if (!status) return null;
    if (status === "error") return IconVariant.Close1;
    if (status === "warning") return IconVariant.Warning;
    if (status === "success") return IconVariant.Success;
  }, [status]);

  return (
    <StyledWrapper id={id} status={status}>
      <Box
        sx={{
          width: "fit-content",
          ...(labelPosition === "left" && {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }),
        }}
      >
        {renderLabel()}
        <Box display="flex" flexDirection="column">
          <TextField
            placeholder={placeholder}
            value={value}
            variant="outlined"
            disabled={disabled}
            fullWidth={fullWidth}
            onChange={handleChange}
            multiline={multiline}
            maxRows={maxRows}
            minRows={minRows}
            sx={{
              whiteSpace: !multiline ? "nowrap" : "",
            }}
            InputProps={{
              endAdornment: status && (
                <InputAdornment position="end">
                  <Icon icon={statusIcon} height="20px" width="20px" />
                </InputAdornment>
              ),
            }}
          />
          {renderHelperText()}
        </Box>
      </Box>
    </StyledWrapper>
  );
};

BaseInput.defaultProps = {
  labelPosition: "top",
  multiline: false,
};

export default BaseInput;
