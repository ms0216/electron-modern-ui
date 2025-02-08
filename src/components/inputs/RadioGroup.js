import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import BaseComponent from '../BaseComponent';

class RadioGroupComponent extends BaseComponent {
  create(label, items = []) {
    const id = this.generateId();
    const element = (
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
    );
    return { id, element };
  }
}

export default RadioGroupComponent;
