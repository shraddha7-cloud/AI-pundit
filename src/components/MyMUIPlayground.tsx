// src/components/MyMUIPlayground.tsx
import * as React from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

export default function MyMUIPlayground() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>MUI Playground 🎮</h2>
      <Slider defaultValue={30} aria-label="Volume" valueLabelDisplay="auto" />
      <br />
      <Button variant="contained" color="primary">
        Click Me!
      </Button>
    </div>
  );
}
