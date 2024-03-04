import { createTheme } from "@mui/material";
import ButtonTheme from "../Button/Button.theme";
import CheckboxTheme from "../Checkbox/Checkbox.theme";
import DropdownTheme from "../Dropdown/Dropdown.theme";
import InputTheme from "../Input/Input.theme";
import RadioButtonTheme from "../RadioButton/RadioButton.theme";
import typography from "./Typography";
import { Colors, palette } from "./palette";

const theme = createTheme({
  typography,
  palette,
  components: {
    MuiButton: ButtonTheme,
    MuiCheckbox: CheckboxTheme,
    MuiTextField: InputTheme,
    MuiRadio: RadioButtonTheme,
    MuiSelect: DropdownTheme,
  },
});

export { Colors, palette, theme };
