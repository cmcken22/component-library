import React from "react";
import { StyledEngineProvider, ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../theme";
import '../index.css';

const ThemeWrapper = ({ children }: any) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeWrapper;
