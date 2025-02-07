import React from "react";
import { Divider } from "@mui/material";
import BaseComponent from "../BaseComponent";

class DividerComponent extends BaseComponent {
  createDivider(variant = "fullWidth", orientation = "horizontal") {
    const id = this.generateId();
    return {
      id,
      element: <Divider id={id} variant={variant} orientation={orientation} />
    };
  }
}

export default DividerComponent;
