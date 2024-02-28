import { createTheme } from "@mui/material";
import { Colors, palette } from "./palette";
import ButtonTheme from "../Button/Button.theme";
import CheckboxTheme from "../Checkbox/Checkbox.theme";
import InputTheme from "../Input/Input.theme";
import typography from "./Typography";
import RadioButtonTheme from "../RadioButton/RadioButton.theme";

const theme = createTheme({
  typography,
  palette,
  components: {
    // @ts-ignore
    MuiButton: ButtonTheme,
    // @ts-ignore
    MuiCheckbox: CheckboxTheme,
    // @ts-ignore
    MuiTextField: InputTheme,
    // @ts-ignore
    MuiRadio: RadioButtonTheme
  },
});

export { Colors, palette, theme };
