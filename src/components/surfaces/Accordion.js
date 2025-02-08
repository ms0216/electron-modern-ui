import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BaseComponent from "../BaseComponent";

class AccordionComponent extends BaseComponent {
  createAccordion(title, content) {
    const id = this.generateId();
    return {
      id,
      element: (
        <Accordion id={id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {title}
          </AccordionSummary>
          <AccordionDetails>
            {content}
          </AccordionDetails>
        </Accordion>
      )
    };
  }
}

export default AccordionComponent;
