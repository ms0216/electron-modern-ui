import React from "react";
import { Slider } from "@mui/material";
import BaseComponent from "./BaseComponent";

class SliderComponent extends BaseComponent {
  createSlider(label, min = 0, max = 100, step = 1) {
    const id = this.generateId();
    return {
      id,
      element: (
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
      )
    };
  }
}

export default SliderComponent;
