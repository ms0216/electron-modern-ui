import React from "react";
import { Container } from "@mui/material";
import BaseComponent from "../BaseComponent";

class ContainerComponent extends BaseComponent {
  create(children, props = {}) {
    const id = this.generateId();
    const element = (
      <Container id={id} {...props}>
        {children}
      </Container>
    );

    return { id, element };
  }
}

export default ContainerComponent;
