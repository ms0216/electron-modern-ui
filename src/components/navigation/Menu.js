import React from "react";
import { Menu, MenuItem } from "@mui/material";
import BaseComponent from "../BaseComponent";

class MenuComponent extends BaseComponent {
  create(anchorEl, open, onClose, items = []) {
    const id = this.generateId();
    const element = (
      <Menu id={id} anchorEl={anchorEl} open={open} onClose={onClose}>
        {items.map((item, index) => (
          <MenuItem key={index} onClick={item.onClick}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    );

    return { id, element };
  }
}

export default MenuComponent;
