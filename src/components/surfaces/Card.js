import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import BaseComponent from "../BaseComponent";

class CardComponent extends BaseComponent {
  create(title, subtitle, content) {
    const id = this.generateId();
    const element = (
      <Card id={id}>
        <CardContent>
          {title}
          {subtitle}
          {content}
        </CardContent>
      </Card>
    );

    return { id, element };
  }
}

export default CardComponent;
