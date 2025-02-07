import React from 'react';
import { Snackbar, Button } from '@mui/material';

function SnackbarComponent({ snackbarOpen, handleSnackbarClose, message, actionText }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={snackbarOpen}
      autoHideDuration={6000}
      onClose={handleSnackbarClose}
      message={message}
      action={
        <Button color="secondary" size="small" onClick={handleSnackbarClose}>
          {actionText}
        </Button>
      }
    />
  );
}

export default SnackbarComponent;