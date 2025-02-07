import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import BaseComponent from "./BaseComponent";

class SelectComponent extends BaseComponent {
  createSelect(label, options = []) {
    const id = this.generateId();
    return {
      id,
      element: (
        <FormControl variant="outlined" fullWidth>
          <InputLabel id={`${id}-label`}>{label}</InputLabel>
          <Select
            labelId={`${id}-label`}
            id={id}
            label={label}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )
    };
  }
}

export default SelectComponent;
