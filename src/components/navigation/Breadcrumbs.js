import React from "react";
import { Breadcrumbs, Link } from "@mui/material";
import BaseComponent from "../BaseComponent";

class BreadcrumbsComponent extends BaseComponent {
  create(links = []) {
    const id = this.generateId();
    const element = (
      <Breadcrumbs id={id}>
        {links.map((link, index) => (
          <Link key={index} {...link.props}>
            {link.label}
          </Link>
        ))}
      </Breadcrumbs>
    );

    return { id, element };
  }
}

export default BreadcrumbsComponent;
