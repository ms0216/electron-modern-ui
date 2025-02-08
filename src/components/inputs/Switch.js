import React from "react";
import { Switch, FormControlLabel } from "@mui/material";
import BaseComponent from "../BaseComponent";

class SwitchComponent extends BaseComponent {
  create(label) {
    const id = this.generateId();
    const element = (
      <FormControlLabel
        control={<Switch id={id} />}
        label={label}
      />
    );

    return { id, element };
  }
}

export default SwitchComponent;
