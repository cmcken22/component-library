import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { ReactElement } from "react";
import { theme } from "../theme";

export default (ui: ReactElement): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>
  );
};
