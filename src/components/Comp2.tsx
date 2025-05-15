import React from 'react';
import { Paper, Typography } from '@mui/material';

const Comp2 = () => {
  return (
    <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
      <Typography variant="h5" gutterBottom>
        📦 This is Comp2!
      </Typography>
      <Typography variant="body1">
        You can use this space to test more MUI components. 
      </Typography>
    </Paper>
  );
};

export default Comp2;
