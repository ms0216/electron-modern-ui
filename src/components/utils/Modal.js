import React from "react";
import { Modal, Box } from "@mui/material";
import BaseComponent from "../BaseComponent";

class ModalComponent extends BaseComponent {
  create(open, onClose, children, props = {}) {
    const id = this.generateId();
    const element = (
      <Modal id={id} open={open} onClose={onClose} {...props}>
        <Box sx={{ ...props.sx, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          {children}
        </Box>
      </Modal>
    );

    return { id, element };
  }
}

export default ModalComponent;
