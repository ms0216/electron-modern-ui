import React from "react";
import { Avatar } from "@mui/material";
import BaseComponent from "../BaseComponent";

class AvatarComponent extends BaseComponent {
  createAvatar(alt, src) {
    const id = this.generateId();
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return {
      id,
      element: <Avatar id={id} alt={alt} src={src} style={{ backgroundColor: randomColor }} />
    };
  }
}

export default AvatarComponent;
