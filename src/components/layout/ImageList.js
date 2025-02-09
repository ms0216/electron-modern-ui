import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import BaseComponent from "../BaseComponent";

class ImageListComponent extends BaseComponent {
  create(items = [], props = {}) {
    const id = this.generateId();
    const element = (
      <ImageList id={id} {...props}>
        {items.map((item, index) => (
          <ImageListItem key={index}>
            <img src={item.src} alt={item.alt} />
          </ImageListItem>
        ))}
      </ImageList>
    );

    return { id, element };
  }
}

export default ImageListComponent;
