import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import BaseComponent from "../BaseComponent";

class StepperComponent extends BaseComponent {
  create(steps = [], activeStep = 0) {
    const id = this.generateId();
    const element = (
      <Stepper id={id} activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    );

    return { id, element };
  }
}

export default StepperComponent;
