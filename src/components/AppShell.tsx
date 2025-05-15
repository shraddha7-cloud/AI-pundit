import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const logoUrl = 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/873a53a6-2b95-406c-a984-72a731838336';
const avatarUrl = 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bee4ec5-f7d2-4ab3-aff2-e8cc17d99712';
const applicationsIconUrl = 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46f4c721-3afe-4747-9274-f98c220fe3cf';
const jwtKeysIconUrl = 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5de22db4-ad7b-484e-a3d5-4fc61f1e422a';
const menuIconUrl = 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc271b8f-bc2a-4367-8fad-fe46886061a3';

export default function AppShell() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw', bgcolor: '#000' }}>
      <Box
        sx={{
          width: 312,
          bgcolor: '#F0EFFF',
          p: 2,
          pt: 2,
          pb: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          flexShrink: 0,
          boxSizing: 'border-box',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', height: 40, mb: 1 }}>
          <img
            src={logoUrl}
            alt="Logo"
            style={{ width: 44, height: 40, display: 'block' }}
          />
          <Typography
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: 12,
              color: '#696984',
              ml: 2,
              lineHeight: '18px',
              alignSelf: 'stretch',
              display: 'flex',
              alignItems: 'center',
              height: 40,
            }}
          >
            Powered by Aryaka
          </Typography>
        </Box>
        <List
          disablePadding
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            p: 0,
            m: 0,
          }}
        >
          <ListItem disablePadding sx={{ borderRadius: 1 }}>
            <ListItemButton
              sx={{
                px: 0.5,
                py: 1,
                borderRadius: 1,
                minHeight: 48,
                gap: 1.5,
                alignItems: 'center',
                '&:hover': { bgcolor: 'transparent' },
              }}
              selected={false}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: 1.5, alignItems: 'center', display: 'flex' }}>
                <Box
                  component="img"
                  src={applicationsIconUrl}
                  alt="Applications"
                  sx={{
                    width: 20,
                    height: 16,
                    opacity: 0.54,
                    display: 'block',
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Applications"
                sx={{ m: 0 }}
                primaryTypographyProps={{
                  sx: {
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: 16,
                    color: '#6D7580',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    alignSelf: 'stretch',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              bgcolor: 'rgba(124,80,248,0.08)',
              borderRadius: 1,
            }}
          >
            <ListItemButton
              sx={{
                px: 0.5,
                py: 1,
                borderRadius: 1,
                minHeight: 48,
                gap: 1.5,
                alignItems: 'center',
                '&:hover': { bgcolor: 'rgba(124,80,248,0.08)' },
              }}
              selected
            >
              <ListItemIcon sx={{ minWidth: 0, mr: 1.5, alignItems: 'center', display: 'flex' }}>
                <Box
                  component="img"
                  src={jwtKeysIconUrl}
                  alt="JWT Keys"
                  sx={{
                    width: 20,
                    height: 18,
                    opacity: 0.54,
                    display: 'block',
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary="JWT Keys"
                sx={{ m: 0 }}
                primaryTypographyProps={{
                  sx: {
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: 16,
                    color: '#6D7580',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    alignSelf: 'stretch',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Box
          sx={{
            width: '100%',
            height: 64,
            bgcolor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 3,
            flexShrink: 0,
            boxSizing: 'border-box',
          }}
        >
          <IconButton
            sx={{
              width: 40,
              height: 40,
              p: 1,
              bgcolor: 'transparent',
              '&:hover': { bgcolor: 'transparent' },
              mr: 1,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}
            disableRipple
            edge="start"
          >
            <Box
              component="img"
              src={menuIconUrl}
              alt="Menu"
              sx={{
                width: 18,
                height: 12,
                display: 'block',
                color: '#bdbdbd',
              }}
            />
          </IconButton>
          <Box sx={{ flex: 1 }} />
          <Avatar
            src={avatarUrl}
            sx={{
              width: 40,
              height: 40,
              ml: 0,
            }}
          />
        </Box>
        <Box sx={{ flex: 1, bgcolor: '#000' }} />
      </Box>
    </Box>
  );
}