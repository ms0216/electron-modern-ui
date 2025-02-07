import React from 'react';
import { Paper, Typography } from '@mui/material';

function PaperComponent({ tabValue, handleTabChange, title }) {
  return (
    <Paper>
      <Typography variant="h6">{title}</Typography>
    </Paper>
  );
}

export default PaperComponent;