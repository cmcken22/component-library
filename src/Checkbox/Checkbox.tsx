import React, { useState } from "react";
import { FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";

const Checkbox = ({ label, defaultChecked, disabled }: any) => {
	const [checked, setChecked] = useState(defaultChecked || false);

  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
          inputProps={{
            "aria-label": label,
          }}
          disableFocusRipple
          disableTouchRipple
          disableRipple
          disabled={disabled}
        />
      }
      label={label}
    />
  );
};

export default Checkbox;
