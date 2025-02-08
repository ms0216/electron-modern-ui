import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import BaseComponent from "../BaseComponent";

class AlertComponent extends BaseComponent {
  createSuccessAlert(title, message) {
    const id = this.generateId();
    return {
      id,
      element: (
        <Alert id={id} severity="success">
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      )
    };
  }

  createErrorAlert(title, message) {
    const id = this.generateId();
    return {
      id,
      element: (
        <Alert id={id} severity="error">
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      )
    };
  }

  createWarningAlert(title, message) {
    const id = this.generateId();
    return {
      id,
      element: (
        <Alert id={id} severity="warning">
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      )
    };
  }

  createInfoAlert(title, message) {
    const id = this.generateId();
    return {
      id,
      element: (
        <Alert id={id} severity="info">
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      )
    };
  }
}

export default AlertComponent;
