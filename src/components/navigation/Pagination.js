import React from "react";
import { Pagination } from "@mui/material";
import BaseComponent from "../BaseComponent";

class PaginationComponent extends BaseComponent {
  create(count, page, onChange) {
    const id = this.generateId();
    const element = (
      <Pagination id={id} count={count} page={page} onChange={onChange} />
    );

    return { id, element };
  }
}

export default PaginationComponent;
