import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import BaseComponent from "../BaseComponent";

class AutocompleteComponent extends BaseComponent {
  create(label, options = []) {
    const id = this.generateId();
    const element = (
      <Autocomplete
        id={id}
        options={options}
        renderInput={(params) => <TextField {...params} label={label} variant="outlined" fullWidth />}
      />
    );
    return { id, element };
  }
}

export default AutocompleteComponent;
