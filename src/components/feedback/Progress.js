import React from "react";
import { CircularProgress, LinearProgress } from "@mui/material";
import BaseComponent from "../BaseComponent";

class ProgressComponent extends BaseComponent {
  createCircularProgress(size = 40, thickness = 3.6) {
    const id = this.generateId();
    const element = <CircularProgress id={id} size={size} thickness={thickness} />;

    return { id, element };
  }

  createLinearProgress() {
    const id = this.generateId();
    const element = <LinearProgress id={id} />;

    return { id, element };
  }
}

export default ProgressComponent;
