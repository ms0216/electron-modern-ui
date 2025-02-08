import React from 'react';
import { Tooltip } from '@mui/material';
import BaseComponent from '../BaseComponent';

class TooltipComponent extends BaseComponent {
    createTooltip(title, content) {
        const id = this.generateId();
        return {
        id,
        element: (
            <Tooltip
            id={id}
            title={title}
            >
                {content}
            </Tooltip>
        )
        };
    }
}

export default TooltipComponent;