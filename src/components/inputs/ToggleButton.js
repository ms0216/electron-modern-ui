import React from "react";
import { ToggleButton } from "@mui/material";
import BaseComponent from "../BaseComponent";

class ToggleButtonComponent extends BaseComponent {
  create(label, selected, onChange) {
    const id = this.generateId();
    const element = (
      <ToggleButton id={id} selected={selected} onChange={onChange}>
        {label}
      </ToggleButton>
    );

    return { id, element };
  }
}

export default ToggleButtonComponent;
