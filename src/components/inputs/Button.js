import React from "react";
import { Button } from "@mui/material";
import BaseComponent from "../BaseComponent";

class ButtonComponent extends BaseComponent {
  create(label, onClick, props = {variant: "contained", color: "primary"}) {
    const id = this.generateId();
    const element = (
      <Button
        id={id}
        variant={props.variant}
        color={props.color}
        onClick={onClick}
      >
        {label}
      </Button>
    );
    return { id, element };
  }
}

export default ButtonComponent;
