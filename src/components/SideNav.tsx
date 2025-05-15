import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

const logoUrl = 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e371800-57fa-4e3d-a1ab-992a8742f4aa';
const iconUrls = [
  'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06b6b027-4264-4762-be8d-75187b06c0cc',
  'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c81d66eb-1f4f-47d3-b6c9-44306764968e',
  'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d85c1f0-243e-467a-ad45-aa83da8b8e4e',
  'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee8abfe6-e414-470a-99ea-008bdca3f461',
  'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a591a85-f2b2-4a11-8cc9-67e7525b923e',
];
const settingsIconUrl = 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4df9588c-7937-4605-ada1-7971b66824b1';
const avatarUrl = 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/595d297a-0429-4ab6-9fa2-3a53c8b2bf0c';

const SideNav: React.FC = () => (
  <Box
    sx={{
      width: 72,
      height: '677px',
      bgcolor: '#F0EEFD',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      p: 0,
      boxSizing: 'border-box',
      borderRadius: 0,
      boxShadow: '0px 4px 24px 0px rgba(23, 43, 77, 0.10)',
      minHeight: 0,
    }}
  >
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: '16px' }}>
      <Box
        sx={{
          width: 44,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: '40px',
        }}
      >
        <Box
          component="img"
          src={logoUrl}
          alt="Logo"
          sx={{
            width: 43,
            height: 40,
            display: 'block',
            mx: 'auto',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          mt: '4px',
        }}
      >
        {iconUrls.slice(0, 5).map((url, idx) => (
          <IconButton
            key={url}
            disableRipple
            sx={{
              width: 40,
              height: 40,
              p: '8px',
              borderRadius: '100px',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={url}
              alt={`Nav Icon ${idx + 1}`}
              sx={{
                width: 24,
                height: 24,
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </IconButton>
        ))}
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '8px',
            bgcolor: '#DBD6FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: '8px',
          }}
        >
          <IconButton
            disableRipple
            sx={{
              width: 24,
              height: 24,
              p: 0,
              borderRadius: '100px',
              backgroundColor: 'transparent',
              minWidth: 0,
              minHeight: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={settingsIconUrl}
              alt="Settings"
              sx={{
                width: 21.18,
                height: 20,
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
    <Box sx={{ pb: '16px', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Avatar
        src={avatarUrl}
        alt="User"
        sx={{
          width: 40,
          height: 40,
          alignSelf: 'center',
          boxShadow: '0px 2px 8px 0px rgba(23, 43, 77, 0.08)',
        }}
      />
    </Box>
  </Box>
);

export default SideNav;