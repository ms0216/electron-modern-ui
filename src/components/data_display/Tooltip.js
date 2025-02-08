import React from 'react';
import { Tooltip } from '@mui/material';
import BaseComponent from '../BaseComponent';

class TooltipComponent extends BaseComponent {
  create(title, content) {
    const id = this.generateId();
    const element = (
      <Tooltip id={id} title={title}>
        {content}
      </Tooltip>
    );

    return { id, element };
  }
}

export default TooltipComponent;