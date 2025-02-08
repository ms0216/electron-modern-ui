import React from "react";
import { Switch, FormControlLabel } from "@mui/material";
import BaseComponent from "../BaseComponent";

class SwitchComponent extends BaseComponent {
  createSwitch(label) {
    const id = this.generateId();
    return {
      id,
      element: (
        <FormControlLabel
          control={<Switch id={id} />}
          label={label}
        />
      )
    };
  }
}

export default SwitchComponent;
