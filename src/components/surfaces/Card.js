import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import BaseComponent from "../BaseComponent";

class CardComponent extends BaseComponent {
  createCard(title, subtitle, content) {
    const id = this.generateId();
    return {
      id,
      element: (
        <Card id={id}>
          <CardContent>
            {title}
            {subtitle}
            {content}
          </CardContent>
        </Card>
      )
    };
  }
}

export default CardComponent;
