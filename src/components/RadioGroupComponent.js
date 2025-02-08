import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import BaseComponent from './BaseComponent';

class RadioGroupComponent extends BaseComponent {
  createRadioGroup(label, items = []) {
    const id = this.generateId();
    return {
      id,
      element: (
        <FormControl id={id} component="fieldset">
          <FormLabel component="legend">{label}</FormLabel>
          <RadioGroup>
            {items.map((item, index) => (
              <FormControlLabel
                key={index}
                value={item.value}
                control={<Radio />}
                label={item.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )
    };
  }
}

export default RadioGroupComponent;