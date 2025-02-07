import React from "react";
import { Avatar } from "@mui/material";
import BaseComponent from "../BaseComponent";

class AvatarComponent extends BaseComponent {
  createAvatar(alt, src) {
    const id = this.generateId();
    return {
      id,
      element: <Avatar id={id} alt={alt} src={src} />
    };
  }
}

export default AvatarComponent;
