import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import BaseComponent from "../BaseComponent";

class ListComponent extends BaseComponent {
  createList(items = []) {
    const id = this.generateId();
    return {
      id,
      element: (
        <List id={id}>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      )
    };
  }
}

export default ListComponent;
