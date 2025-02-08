import React from "react";
import { Paper, Typography } from "@mui/material";
import BaseComponent from "../BaseComponent";

class PaperComponent extends BaseComponent {
  createPaper(title, content) {
    const id = this.generateId();
    return {
      id,
      element: (
        <Paper id={id} elevation={3}>
            {title}
            {content}
        </Paper>
      )
    };
  }
}

export default PaperComponent;
