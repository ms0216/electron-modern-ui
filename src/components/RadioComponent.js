import React from "react";
import { Radio, FormControlLabel } from "@mui/material";
import BaseComponent from "./BaseComponent";

class RadioComponent extends BaseComponent {
  createRadio(label) {
    const id = this.generateId();
    return {
      id,
      element: (
        <FormControlLabel
          control={<Radio id={id} />}
          label={label}
        />
      )
    };
  }
}

export default RadioComponent;
