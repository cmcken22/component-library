import { Box, InputAdornment, styled } from "@mui/material";
import cx from "classnames";
import React, { createContext, useCallback, useMemo } from "react";
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
      // "&:-internal-autofill-selected": {
      //   backgroundColor: "red",
      // },
    },
    // "input:-internal-autofill-selected": {
    //   backgroundColor: "red",
    // },
    ".MuiInputAdornment-positionEnd .icon-wrapper": {
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
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onChange?: (value: string) => void;
  type?: string;
  children?: React.ReactNode | React.JSX.Element;
}

type InputContext = {
  status: "error" | "warning" | "success" | undefined;
  required?: boolean;
  labelPosition?: "top" | "left";
  endAdornment?: React.ReactNode;
};

const defaultContext: InputContext = {
  status: undefined,
  required: false,
  labelPosition: "top",
  endAdornment: undefined,
};

export const InputContext = createContext<InputContext>(defaultContext);

const Label = ({ children }: { children: any }) => {
  const { required, labelPosition } = React.useContext(InputContext);

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

  if (!children) return null;
  return (
    <Box
      sx={{
        ...(labelPosition === "left" && {
          display: "flex",
          alignItems: "center",
        }),
      }}
    >
      <Typography
        className="Input__label"
        variant={FONT_VARIANT.fieldLabel}
        color="text.primary"
      >
        {children}
      </Typography>
      {renderRequiredIndicator()}
    </Box>
  );
};

const HelperText = ({ children }: { children: any }) => {
  const { labelPosition } = React.useContext(InputContext);

  if (!children) return null;
  return (
    <>
      {/* render box here to push helper text into next column under the input */}
      {labelPosition === "left" && <Box />}
      <Typography
        className="Input__helper-text"
        variant={FONT_VARIANT.errorMessage}
      >
        {children}
      </Typography>
    </>
  );
};

const BaseInput = (props: any) => {
  const { id, status, labelPosition, required, fullWidth, containerSx } = props;

  const statusIcon = useMemo(() => {
    if (!status) return null;
    if (status === "error") return IconVariant.Close1;
    if (status === "warning") return IconVariant.Warning;
    if (status === "success") return IconVariant.Success;
  }, [status]);

  const renderStatusIcon = useCallback(() => {
    if (!status) return null;
    return (
      <InputAdornment position="end">
        <Icon icon={statusIcon} height="20px" width="20px" />
      </InputAdornment>
    );
  }, [statusIcon]);

  return (
    <InputContext.Provider
      value={{
        status,
        required,
        labelPosition,
        endAdornment: renderStatusIcon(),
      }}
    >
      <StyledWrapper id={id} status={status} data-testid="Input">
        <Box
          sx={{
            width: fullWidth ? "100%" : "fit-content",
            display: "flex",
            flexDirection: "column",
            ...(labelPosition === "left" && {
              display: "grid",
              gridTemplateColumns: "1fr",
              gridTemplateRows: "1fr 1fr",
              gap: "0px 8px",
              gridTemplateAreas: `
                ". ."
                ". ."
              `,
            }),
            ...containerSx,
          }}
        >
          {typeof props?.children === "function"
            ? props?.children({
                endAdornment: renderStatusIcon(),
                className: cx({
                  ["status--error"]: status === "error",
                  ["status--warning"]: status === "warning",
                  ["status--success"]: status === "success",
                }),
              })
            : props?.children}
        </Box>
      </StyledWrapper>
    </InputContext.Provider>
  );
};

BaseInput.defaultProps = {
  labelPosition: "top",
  multiline: false,
};

BaseInput.Label = Label;
BaseInput.HelperText = HelperText;

export default BaseInput;
