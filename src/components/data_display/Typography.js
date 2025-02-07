import React from "react";
import { Typography } from "@mui/material";
import BaseComponent from "../BaseComponent";

class TypographyComponent extends BaseComponent {
  createTypography(text, variant = "body1", component = "p") {
    const id = this.generateId();
    return {
      id,
      element: (
        <Typography id={id} variant={variant} component={component}>
          {text}
        </Typography>
      )
    };
  }
}

export default TypographyComponent;
