import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import BaseComponent from "../BaseComponent";

class SpeedDialComponent extends BaseComponent {
  create(actions = [], ariaLabel = "SpeedDial") {
    const id = this.generateId();
    const element = (
      <SpeedDial
        id={id}
        ariaLabel={ariaLabel}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            key={index}
            icon={action.icon}
            tooltipTitle={action.tooltipTitle}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    );

    return { id, element };
  }
}

export default SpeedDialComponent;
