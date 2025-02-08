import React from "react";
import { Divider } from "@mui/material";
import BaseComponent from "../BaseComponent";

class DividerComponent extends BaseComponent {
  create(variant = "fullWidth", orientation = "horizontal") {
    const id = this.generateId();
    const element = <Divider id={id} variant={variant} orientation={orientation} />;

    return { id, element };
  }
}

export default DividerComponent;
