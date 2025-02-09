import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import BaseComponent from "../BaseComponent";

const getDefaultProps = (label, options) => ({
  options: options,
  getOptionLabel: (option) => option.label || option,
  renderInput: (params) => <TextField {...params} label={label} variant="outlined" fullWidth />,
});

class AutocompleteComponent extends BaseComponent {
  create(label, options = [], props = {}) {
    const id = this.generateId();
    const defaultProps = getDefaultProps(label, options);
    const element = (
      <Autocomplete
        {...defaultProps}
        id={id}
        {...props}
      />
    );
    return { id, element };
  }
}

export default AutocompleteComponent;
