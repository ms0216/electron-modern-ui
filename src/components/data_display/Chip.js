import React from 'react';
import { Chip } from '@mui/material';
import BaseComponent from '../BaseComponent';

class ChipComponent extends BaseComponent {
  create(label, onDelete = null) {
    const id = this.generateId();
    const element = (
      <Chip id={id} label={label} onDelete={onDelete} />
    );

    return { id, element };
  }
}

export default ChipComponent;