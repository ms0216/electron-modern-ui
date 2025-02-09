import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import BaseComponent from "../BaseComponent";

class DrawerComponent extends BaseComponent {
  create(open, onClose, items = []) {
    const id = this.generateId();
    const element = (
      <Drawer id={id} open={open} onClose={onClose}>
        <List>
          {items.map((item, index) => (
            <ListItem button key={index} onClick={item.onClick}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );

    return { id, element };
  }
}

export default DrawerComponent;
