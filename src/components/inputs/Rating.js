import React from "react";
import { Rating } from "@mui/material";
import BaseComponent from "../BaseComponent";

class RatingComponent extends BaseComponent {
  create(defaultValue = 2, max = 5) {
    const id = this.generateId();
    const element = (
      <Rating
        id={id}
        defaultValue={defaultValue}
        max={max}
      />
    ); 

    return { id, element };
  }
}

export default RatingComponent;
