import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const menuIconUrl = 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cd87982-ad59-4a99-af2c-f289f7d024c9';

const AppShell: React.FC = () => (
  <Box
    sx={{
      width: '100%', // Make header responsive
      maxWidth: '100%', // Ensure it fills the full width
      height: '53px',
      bgcolor: '#FFF',
      boxShadow: '0px 4px 12px 0px rgba(23, 43, 77, 0.12)',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: '24px',
      position: 'sticky', // Keep navbar fixed at the top
      top: 0,
      zIndex: 1100, // Ensure navbar is above other content
      overflow: 'visible',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        minHeight: '64px',
        flexGrow: 1,
      }}
    >
      <IconButton
        disableRipple
        sx={{
          width: 40,
          height: 40,
          p: '8px',
          borderRadius: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
        }}
      >
        <Box
          component="img"
          src={menuIconUrl}
          alt="Menu"
          sx={{
            width: 18,
            height: 12,
            display: 'block',
          }}
        />
      </IconButton>
    </Box>
    <Button
      variant="outlined"
      sx={{
        color: '#449E40',
        borderColor: 'rgba(68, 158, 64, 0.5)',
        borderRadius: '4px',
        px: '22px',
        py: '8px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '22.5px',
        letterSpacing: 0,
        textTransform: 'none',
        minWidth: 0,
        minHeight: 0,
        boxSizing: 'border-box',
        alignSelf: 'center',
        '&:hover': {
          borderColor: '#449E40',
          backgroundColor: 'rgba(68, 158, 64, 0.04)',
        },
      }}
    >
      Apply Configuration
    </Button>
  </Box>
);

export default AppShell;