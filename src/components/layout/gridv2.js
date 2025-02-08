import React from 'react';
import { Grid } from '@mui/material';
import BaseComponent from '../BaseComponent';

class GridComponent extends BaseComponent {
    create(children, props = {container: true, spacing: 2}) {
        const id = this.generateId();
        const element = (
            <Grid
            id={id}
            container={props.container}
            spacing={props.spacing}
            >
                {children}
            </Grid>
        );

        return { id, element };
    }
}

export default GridComponent;