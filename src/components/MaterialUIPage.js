import React from 'react';
import { Button, Container, Typography } from '@mui/material';

function MaterialUIPage() {
  return (
    <Container>
      <Typography variant="h1" component="h2" gutterBottom>
        Material-UI
      </Typography>
      <Button variant="contained" color="primary">
        Hello Material-UI
      </Button>
    </Container>
  );
}

export default MaterialUIPage;