import React from "react";
import { Typography } from "@mui/material";
import BaseComponent from "../BaseComponent";

class TypographyComponent extends BaseComponent {
  create(text, props = {}) {
    const id = this.generateId();
    const element = (
      <Typography id={id} {...props}>
        {text}
      </Typography>
    );

    return { id, element };
  }
}

export default TypographyComponent;
