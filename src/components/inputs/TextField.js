import React from "react";
import { TextField } from "@mui/material";
import BaseComponent from "../BaseComponent";

class TextFieldComponent extends BaseComponent {
  createPasswordField(label) {
    const id = this.generateId();
    return {
      id,
      element: (
        <TextField
          id={id}
          label={label}
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
      )
    };
  }

  createTextField(label, variant = "outlined") {
    const id = this.generateId();
    return {
      id,
      element: (
        <TextField
          id={id}
          label={label}
          variant={variant}
        />
      )
    };
  }

  createMultilineField(label, rows = 4) {
    const id = this.generateId();
    return {
      id,
      element: (
        <TextField
          id={id}
          label={label}
          multiline
          rows={rows}
          variant="outlined"
        />
      )
    };
  }

  createNumberField(label) {
    const id = this.generateId();
    return {
      id,
      element: (
        <TextField
          id={id}
          label={label}
          type="number"
          variant="outlined"
        />
      )
    };
  }

  createEmailField(label) {
    const id = this.generateId();
    return {
      id,
      element: (
        <TextField
          id={id}
          label={label}
          type="email"
          autoComplete="email"
          variant="outlined"
        />
      )
    };
  }

  createUrlField(label) {
    const id = this.generateId();
    return {
      id,
      element: (
        <TextField
          id={id}
          label={label}
          type="url"
          autoComplete="url"
          variant="outlined"
        />
      )
    };
  }

  createSearchField(label) {
    const id = this.generateId();
    return {
      id,
      element: (
        <TextField
          id={id}
          label={label}
          type="search"
          autoComplete="off"
          variant="outlined"
        />
      )
    };
  }

  createTelField(label) {
    const id = this.generateId();
    return {
      id,
      element: (
        <TextField
          id={id}
          label={label}
          type="tel"
          autoComplete="tel"
          variant="outlined"
        />
      )
    };
  }

  createDateField(label) {
    const id = this.generateId();
    return {
      id,
      element: (
        <TextField
          id={id}
          label={label}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      )
    };
  }

  createColorField(label) {
    const id = this.generateId();
    return {
      id,
      element: (
        <TextField
          id={id}
          label={label}
          type="color"
          variant="outlined"
        />
      )
    };
  }

  createDateTimeLocalField(label) {
    const id = this.generateId();
    return {
      id,
      element: (
        <TextField
          id={id}
          label={label}
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      )
    };
  }

  createTimeField(label) {
    const id = this.generateId();
    return {
      id,
      element: (
        <TextField
          id={id}
          label={label}
          type="time"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      )
    };
  }

  createWeekField(label) {
    const id = this.generateId();
    return {
      id,
      element: (
        <TextField
          id={id}
          label={label}
          type="week"
          variant="outlined"
        />
      )
    };
  }

  createMonthField(label) {
    const id = this.generateId();
    return {
      id,
      element: (
        <TextField
          id={id}
          label={label}
          type="month"
          variant="outlined"
        />
      )
    };
  }
}

export default TextFieldComponent;
