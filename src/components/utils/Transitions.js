import React from "react";
import { Fade, Grow, Slide, Zoom } from "@mui/material";
import BaseComponent from "../BaseComponent";

class TransitionsComponent extends BaseComponent {
  create(type, inProp, children, props = {}) {
    const id = this.generateId();
    let TransitionComponent;

    switch (type) {
      case 'fade':
        TransitionComponent = Fade;
        break;
      case 'grow':
        TransitionComponent = Grow;
        break;
      case 'slide':
        TransitionComponent = Slide;
        break;
      case 'zoom':
        TransitionComponent = Zoom;
        break;
      default:
        TransitionComponent = Fade;
    }

    const element = (
      <TransitionComponent id={id} in={inProp} {...props}>
        {children}
      </TransitionComponent>
    );

    return { id, element };
  }
}

export default TransitionsComponent;
