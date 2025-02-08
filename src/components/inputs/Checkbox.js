import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import BaseComponent from "../BaseComponent";

class CheckboxComponent extends BaseComponent {
  createCheckbox(label) {
    const id = this.generateId();
    return {
      id,
      element: (
        <FormControlLabel
          control={<Checkbox id={id} />}
          label={label}
        />
      )
    };
  }
}

export default CheckboxComponent;
