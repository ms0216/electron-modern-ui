import React from "react";
import { Box } from "@mui/material";
import BaseComponent from "../BaseComponent";

class BoxComponent extends BaseComponent {
  create(children, props = {}) {
    const id = this.generateId();
    const element = (
      <Box id={id} {...props}>
        {children}
      </Box>
    );

    return { id, element };
  }
}

export default BoxComponent;
