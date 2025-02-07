import React from "react";
import { Snackbar, Button } from "@mui/material";
import BaseComponent from "../BaseComponent";

class SnackbarComponent extends BaseComponent {
  createSnackbar(message, actionText, open, handleClose) {
    const id = this.generateId();
    return {
      id,
      element: (
        <Snackbar
          id={id}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={message}
          action={
            <Button color="secondary" size="small" onClick={handleClose}>
              {actionText}
            </Button>
          }
        />
      )
    };
  }
}

export default SnackbarComponent;
