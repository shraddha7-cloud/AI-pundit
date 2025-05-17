import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import AppShell from './components/AppShell';
import SideNav from './components/SideNav';
import XfrmRoutingForm from './components/XfrmRoutingForm';
import PageHeading from './components/PageHeading';
import Controls from './components/Controls';
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {/* Top navbar */}
        <AppShell />
        
        {/* Content area with sidebar and main content */}
        <Box sx={{ display: 'flex', width: '100%' }}>
          {/* Sidebar */}
          <Box 
            sx={{ 
              position: 'fixed', 
              height: 'calc(100vh - 53px)', 
              top: '53px',
              left: 0, // Ensure it's flush with the left edge
              m: 0, // No margin
              p: 0, // No padding
            }}>
            <SideNav />
          </Box>
          
          {/* Main content */}
          <Box sx={{ marginLeft: '72px', width: 'calc(100% - 72px)', marginTop: '0' }}>
            <Box sx={{ p: 3 }}>
              <PageHeading />
              <Box sx={{ mt: 2 }}> {/* Add spacing between heading and controls */}
                <Controls />
              </Box>
              {/* <XfrmRoutingForm /> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
