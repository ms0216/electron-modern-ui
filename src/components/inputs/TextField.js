import React from "react";
import { TextField } from "@mui/material";
import BaseComponent from "../BaseComponent";

class TextFieldComponent extends BaseComponent {
  createPasswordField(label) {
    const id = this.generateId();
    const element = (
      <TextField
        id={id}
        label={label}
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
    );

    return { id, element };
  }

  createTextField(label) {
    const id = this.generateId();
    const element = (
      <TextField
        id={id}
        label={label}
        variant="outlined"
      />
    );

    return { id, element };
  }

  createMultilineField(label) {
    const id = this.generateId();
    const element = (
      <TextField
        id={id}
        label={label}
        multiline
        rows={4}
        variant="outlined"
      />
    );

    return { id, element };
  }

  createNumberField(label) {
    const id = this.generateId();
    const element = (
      <TextField
        id={id}
        label={label}
        type="number"
        variant="outlined"
      />
    );

    return { id, element };
  }
}

export default TextFieldComponent;
