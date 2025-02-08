import React from "react";
import { Fab } from "@mui/material";
import BaseComponent from "../BaseComponent";

class FabComponent extends BaseComponent {
  create(icon, color = "primary", onClick) {
    const id = this.generateId();
    const element = (
      <Fab id={id} color={color} onClick={onClick}>
        {icon}
      </Fab>
    );
    return { id, element };
  }
}

export default FabComponent;
