import React from "react";
import { Link } from "@mui/material";
import BaseComponent from "../BaseComponent";

class LinkComponent extends BaseComponent {
  create(href, label, props = {}) {
    const id = this.generateId();
    const element = (
      <Link id={id} href={href} {...props}>
        {label}
      </Link>
    );

    return { id, element };
  }
}

export default LinkComponent;
