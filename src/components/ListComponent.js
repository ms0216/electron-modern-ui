import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function ListComponent({ items }) {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
}

export default ListComponent;