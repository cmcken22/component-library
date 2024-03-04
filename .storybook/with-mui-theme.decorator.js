import { ThemeWrapper } from "../src/index";
import { theme } from "../src/theme";

export const withMuiTheme = (Story, context) => {
  console.log("theme", theme);

  return (
    <ThemeWrapper>
      {/* <StyledEngineProvider injectFirst> */}
      {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      <Story />
      {/* </ThemeProvider> */}
      {/* </StyledEngineProvider> */}
    </ThemeWrapper>
  );
};
