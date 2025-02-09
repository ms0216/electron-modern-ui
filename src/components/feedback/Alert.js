import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import BaseComponent from "../BaseComponent";

class AlertComponent extends BaseComponent {
  createSuccessAlert(title, message) {
    const id = this.generateId();
    const element = (
      <Alert id={id} severity="success">
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    );

    return { id, element };
  }

  createInfoAlert(title, message) {
    const id = this.generateId();
    const element = (
      <Alert id={id} severity="info">
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    );

    return { id, element };
  }

  createWarningAlert(title, message) {
    const id = this.generateId();
    const element = (
      <Alert id={id} severity="warning">
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    );

    return { id, element };
  }

  createErrorAlert(title, message) {
    const id = this.generateId();
    const element = (
      <Alert id={id} severity="error">
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    );

    return { id, element };
  }
}

export default AlertComponent;
