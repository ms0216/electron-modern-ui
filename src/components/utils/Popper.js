import React from "react";
import { Popper } from "@mui/material";
import BaseComponent from "../BaseComponent";

class PopperComponent extends BaseComponent {
  create(anchorEl, open, children, props = {}) {
    const id = this.generateId();
    const element = (
      <Popper id={id} anchorEl={anchorEl} open={open} {...props}>
        {children}
      </Popper>
    );

    return { id, element };
  }
}

export default PopperComponent;
