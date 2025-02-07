import React from "react";
import { Button } from "@mui/material";
import BaseComponent from "./BaseComponent";

class ButtonComponent extends BaseComponent {
  createButton(label, variant = "contained", color = "primary") {
    const id = this.generateId();
    return {
      id,
      element: (
        <Button
          id={id}
          variant={variant}
          color={color}
        >
          {label}
        </Button>
      )
    };
  }
}

export default ButtonComponent;
