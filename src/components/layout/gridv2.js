import React from 'react';
import { Grid } from '@mui/material';
import BaseComponent from '../BaseComponent';

class GridComponent extends BaseComponent {
    createGrid(children, props = {container: true, spacing: 2}) {
        const id = this.generateId();
        return {
        id,
        element: (
            <Grid
            id={id}
            container={props.container}
            spacing={props.spacing}
            >
                {children}
            </Grid>
        )
        };
    }
}

export default GridComponent;