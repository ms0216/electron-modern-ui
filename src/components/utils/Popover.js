import React from "react";
import { Popover } from "@mui/material";
import BaseComponent from "../BaseComponent";

class PopoverComponent extends BaseComponent {
  create(anchorEl, open, onClose, children, props = {}) {
    const id = this.generateId();
    const element = (
      <Popover id={id} anchorEl={anchorEl} open={open} onClose={onClose} {...props}>
        {children}
      </Popover>
    );

    return { id, element };
  }
}

export default PopoverComponent;
