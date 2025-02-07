import React from "react";
import { Badge } from "@mui/material";
import BaseComponent from "../BaseComponent";

class BadgeComponent extends BaseComponent {
  createBadge(content, color = "primary", children) {
    const id = this.generateId();
    return {
      id,
      element: (
        <Badge id={id} badgeContent={content} color={color}>
          {children}
        </Badge>
      )
    };
  }
}

export default BadgeComponent;
