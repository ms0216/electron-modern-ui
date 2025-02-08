import React from "react";
import { Rating } from "@mui/material";
import BaseComponent from "../BaseComponent";

class RatingComponent extends BaseComponent {
  createRating(defaultValue = 2, max = 5) {
    const id = this.generateId();
    return {
      id,
      element: (
        <Rating
          id={id}
          defaultValue={defaultValue}
          max={max}
        />
      )
    };
  }
}

export default RatingComponent;
