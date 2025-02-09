import React from "react";
import { Tabs, Tab } from "@mui/material";
import BaseComponent from "../BaseComponent";

class TabsComponent extends BaseComponent {
  create(tabs = [], value, onChange) {
    const id = this.generateId();
    const element = (
      <Tabs id={id} value={value} onChange={onChange}>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
    );

    return { id, element };
  }
}

export default TabsComponent;
