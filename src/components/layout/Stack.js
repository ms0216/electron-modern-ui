import React from "react";
import { Stack } from "@mui/material";
import BaseComponent from "../BaseComponent";

class StackComponent extends BaseComponent {
  create(children, props = {}) {
    const id = this.generateId();
    const element = (
      <Stack id={id} {...props}>
        {children}
      </Stack>
    );

    return { id, element };
  }
}

export default StackComponent;
