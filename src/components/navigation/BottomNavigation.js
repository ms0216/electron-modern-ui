import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import BaseComponent from "../BaseComponent";

class BottomNavigationComponent extends BaseComponent {
  create(value, onChange, actions = []) {
    const id = this.generateId();
    const element = (
      <BottomNavigation id={id} value={value} onChange={onChange}>
        {Array.isArray(actions) ? actions.map((action, index) => (
          <BottomNavigationAction key={index} {...action} />
        )) : null}
      </BottomNavigation>
    );

    return { id, element };
  }
}

export default BottomNavigationComponent;
