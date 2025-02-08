import React from "react";
import { Paper, Typography } from "@mui/material";
import BaseComponent from "../BaseComponent";

class PaperComponent extends BaseComponent {
  create(title, content) {
    const id = this.generateId();
    const element = (
      <Paper id={id} elevation={3}>
        {title}
        {content}
      </Paper>
    );

    return { id, element };
  }
}

export default PaperComponent;
