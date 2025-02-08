import React from "react";
import { Typography } from "@mui/material";
import BaseComponent from "../BaseComponent";

class TypographyComponent extends BaseComponent {
  createTypography(text, props = {}) {
    const id = this.generateId();
    return {
        id,
        element: (
            <Typography id={id} {...props}>
                {text}
            </Typography>
        )
    };
  }
}

export default TypographyComponent;
