import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const WelcomeStore = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Video Store
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default WelcomeStore;