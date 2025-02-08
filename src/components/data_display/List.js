import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import BaseComponent from "../BaseComponent";

class ListComponent extends BaseComponent {
  create(items = []) {
    const id = this.generateId();
    const element = (
      <List id={id}>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    );

    return { id, element };
  }
}

export default ListComponent;
