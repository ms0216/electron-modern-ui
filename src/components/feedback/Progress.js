import React from "react";
import { CircularProgress, LinearProgress } from "@mui/material";
import BaseComponent from "../BaseComponent";

class ProgressComponent extends BaseComponent {
  createCircularProgress(size = 40, thickness = 3.6) {
    const id = this.generateId();
    return {
      id,
      element: <CircularProgress id={id} size={size} thickness={thickness} />
    };
  }

  createLinearProgress() {
    const id = this.generateId();
    return {
      id,
      element: <LinearProgress id={id} />
    };
  }
}

export default ProgressComponent;
