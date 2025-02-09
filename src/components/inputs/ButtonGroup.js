import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import BaseComponent from "../BaseComponent";

class ButtonGroupComponent extends BaseComponent {
  create(buttons = []) {
    const id = this.generateId();
    const element = (
      <ButtonGroup id={id}>
        {buttons.map((button, index) => (
          <Button key={index} {...button.props}>
            {button.label}
          </Button>
        ))}
      </ButtonGroup>
    );

    return { id, element };
  }
}

export default ButtonGroupComponent;
