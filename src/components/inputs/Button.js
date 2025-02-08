import React from "react";
import { Button } from "@mui/material";
import BaseComponent from "../BaseComponent";

class ButtonComponent extends BaseComponent {
  createButton(label, onClick, props = {variant: "contained", color: "primary"}) {
    const id = this.generateId();
    return {
      id,
      element: (
        <Button
          id={id}
          variant={props.variant}
          color={props.color}
          onClick={onClick}
        >
          {label}
        </Button>
      )
    };
  }
}

export default ButtonComponent;
