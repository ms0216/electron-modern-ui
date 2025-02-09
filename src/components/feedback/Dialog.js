import React from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import BaseComponent from "../BaseComponent";

class DialogComponent extends BaseComponent {
  create(open, onClose, title, content, actions = []) {
    const id = this.generateId();
    const element = (
      <Dialog id={id} open={open} onClose={onClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {actions.map((action, index) => (
            <Button key={index} onClick={action.onClick} color={action.color || "primary"}>
              {action.label}
            </Button>
          ))}
        </DialogActions>
      </Dialog>
    );

    return { id, element };
  }
}

export default DialogComponent;
