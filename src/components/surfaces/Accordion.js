import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BaseComponent from "../BaseComponent";

class AccordionComponent extends BaseComponent {
  create(title, content, props = {}) {
    const id = this.generateId();
    const element = (
      <Accordion
        id={id}
        {...props}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {title}
        </AccordionSummary>
        <AccordionDetails>
          {content}
        </AccordionDetails>
      </Accordion>
    );

    return { id, element };
  }
}

export default AccordionComponent;
