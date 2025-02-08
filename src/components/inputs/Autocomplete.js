import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import BaseComponent from "../BaseComponent";

class AutocompleteComponent extends BaseComponent {
  createAutocomplete(label, options = []) {
    const id = this.generateId();
    return {
      id,
      element: (
        <Autocomplete
          id={id}
          options={options}
          renderInput={(params) => <TextField {...params} label={label} variant="outlined" fullWidth />}
        />
      )
    };
  }
}

export default AutocompleteComponent;
