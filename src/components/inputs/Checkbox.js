import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import BaseComponent from "../BaseComponent";

class CheckboxComponent extends BaseComponent {
  create(label) {
    const id = this.generateId();
    const element = (
      <FormControlLabel
        control={<Checkbox id={id} />}
        label={label}
      />
    );
    return { id, element };
  }
}

export default CheckboxComponent;
