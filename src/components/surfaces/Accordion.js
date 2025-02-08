import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BaseComponent from "../BaseComponent";

class AccordionComponent extends BaseComponent {
  create(title, content) {
    const id = this.generateId();
    const element = (
      <Accordion id={id}>
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
