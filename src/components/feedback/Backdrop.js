import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import BaseComponent from "../BaseComponent";

class BackdropComponent extends BaseComponent {
  create(open, onClick) {
    const id = this.generateId();
    const element = (
      <Backdrop id={id} open={open} onClick={onClick}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );

    return { id, element };
  }
}

export default BackdropComponent;
