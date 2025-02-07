import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

function RadioGroupComponent({ legend, options }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{legend}</FormLabel>
      <RadioGroup row>
        {options.map((option, index) => (
          <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioGroupComponent;