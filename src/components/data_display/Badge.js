import React from "react";
import { Badge } from "@mui/material";
import BaseComponent from "../BaseComponent";

class BadgeComponent extends BaseComponent {
  create(content, color = "primary", children) {
    const id = this.generateId();
    const element = (
      <Badge id={id} badgeContent={content} color={color}>
        {children}
      </Badge>
    );

    return { id, element };
  }
}

export default BadgeComponent;
