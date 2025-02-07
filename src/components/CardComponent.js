import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function CardComponent({ title, subtitle, content }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">
          {subtitle}
        </Typography>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardComponent;