import React from "react";
import { Fab } from "@mui/material";
import BaseComponent from "./BaseComponent";

class FabComponent extends BaseComponent {
  createFab(icon, color = "primary", onClick) {
    const id = this.generateId();
    return {
      id,
      element: (
        <Fab id={id} color={color} onClick={onClick}>
          {icon}
        </Fab>
      )
    };
  }
}

export default FabComponent;
