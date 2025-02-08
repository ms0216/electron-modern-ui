import React from 'react';
import { Chip } from '@mui/material';
import BaseComponent from '../BaseComponent';

class ChipComponent extends BaseComponent {
    createChip(label, onDelete=null) {
        const id = this.generateId();
        return {
        id,
        element: (
            <Chip
            id={id}
            label={label}
            onDelete={onDelete}
            />
        )
        };
    }
}

export default ChipComponent;