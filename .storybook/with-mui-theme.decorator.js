import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import {theme} from "../src/theme";
import { ThemeWrapper } from "../src/index";

export const withMuiTheme = (Story, context) => {

  console.log('theme', theme);

  return (
    <ThemeWrapper>
    {/* <StyledEngineProvider injectFirst> */}
      {/* <ThemeProvider theme={theme}> */}
        <CssBaseline />
        <Story />
      {/* </ThemeProvider> */}
    {/* </StyledEngineProvider> */}
    </ThemeWrapper>
  );
};
