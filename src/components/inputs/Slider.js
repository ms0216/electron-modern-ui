import React from "react";
import { Slider } from "@mui/material";
import BaseComponent from "../BaseComponent";

class SliderComponent extends BaseComponent {
  create(label, min = 0, max = 100, step = 1) {
    const id = this.generateId();
    const element = (
      <div>
        <label htmlFor={id}>{label}</label>
        <Slider
          id={id}
          defaultValue={min}
          aria-labelledby={id}
          valueLabelDisplay="auto"
          step={step}
          marks
          min={min}
          max={max}
        />
      </div>
    );

    return { id, element };
  }
}

export default SliderComponent;
