import React from "react";
import { Snackbar, Button } from "@mui/material";
import BaseComponent from "../BaseComponent";

class SnackbarComponent extends BaseComponent {
  create(message, actionText, open, handleClose) {
    const id = this.generateId();
    const element = (
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
    );

    return { id, element };
  }
}

export default SnackbarComponent;
