import React from "react";
import { Skeleton } from "@mui/material";
import BaseComponent from "../BaseComponent";

class SkeletonComponent extends BaseComponent {
  create(variant = "text", width = "100%", height = "100%") {
    const id = this.generateId();
    const element = <Skeleton id={id} variant={variant} width={width} height={height} />;

    return { id, element };
  }
}

export default SkeletonComponent;
