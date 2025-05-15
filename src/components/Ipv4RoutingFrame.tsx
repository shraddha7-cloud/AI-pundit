//SINGLE BLOCK FROM THE DROPDOWN


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Ipv4RoutingFrame() {
  return (
    <Box
      sx={{
        bgcolor: '#DBD5FF',
        borderRadius: '4px',
        p: '10px',
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          pl: '16px',
          pr: '16px',
          minHeight: '24px',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: 16,
            color: '#242424',
            lineHeight: '24px',
            textAlign: 'left',
            letterSpacing: 0,
            alignSelf: 'stretch',
            width: '100%',
          }}
        >
          IPV4 Routing*
        </Typography>
      </Box>
      <Divider sx={{ opacity: 0.12, bgcolor: '#000', m: 0, width: '100%' }} />
      <Box
        sx={{
          border: '1px solid #BDBDBD',
          borderRadius: '4px',
          bgcolor: 'transparent',
          p: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: 14,
            color: '#242424',
            lineHeight: '21px',
            textAlign: 'left',
            letterSpacing: 0,
            alignSelf: 'stretch',
            width: '100%',
          }}
        >
          CIDR Address
        </Typography>
        <TextField
          fullWidth
          placeholder="Enter IPV4 Subnet"
          variant="outlined"
          InputProps={{
            sx: {
              fontFamily: 'Poppins',
              fontSize: 16,
              color: '#6D7580',
              bgcolor: '#FFF',
              borderRadius: '4px',
              px: '12px',
              py: '16px',
              lineHeight: '24px',
            },
          }}
          InputLabelProps={{
            sx: {
              fontFamily: 'Poppins',
              fontSize: 12,
              color: '#6D7580',
              bgcolor: '#F0EFFF',
              px: '4px',
              borderRadius: '4px',
              lineHeight: '18px',
            },
            shrink: true,
          }}
          label={
            <Box
              sx={{
                fontFamily: 'Poppins',
                fontSize: 12,
                color: '#6D7580',
                bgcolor: '#F0EFFF',
                px: '4px',
                borderRadius: '4px',
                position: 'relative',
                top: '-10px',
                left: '-4px',
                display: 'inline-block',
                lineHeight: '18px',
              }}
            >
              IPV4 Subnet
            </Box>
          }
        />
      </Box>
      <Box
        sx={{
          border: '1px solid #BDBDBD',
          borderRadius: '4px',
          bgcolor: 'transparent',
          p: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: 14,
            color: '#242424',
            lineHeight: '21px',
            textAlign: 'left',
            letterSpacing: 0,
            alignSelf: 'stretch',
            width: '100%',
          }}
        >
          IP Address Range
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '12px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <TextField
            fullWidth
            placeholder="Enter Start IPV4 Address"
            variant="outlined"
            InputProps={{
              sx: {
                fontFamily: 'Poppins',
                fontSize: 16,
                color: '#6D7580',
                bgcolor: '#FFF',
                borderRadius: '4px',
                px: '12px',
                py: '16px',
                lineHeight: '24px',
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: 'Poppins',
                fontSize: 12,
                color: '#6D7580',
                bgcolor: '#F0EFFF',
                px: '4px',
                borderRadius: '4px',
                lineHeight: '18px',
              },
              shrink: true,
            }}
            label={
              <Box
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: 12,
                  color: '#6D7580',
                  bgcolor: '#F0EFFF',
                  px: '4px',
                  borderRadius: '4px',
                  position: 'relative',
                  top: '-10px',
                  left: '-4px',
                  display: 'inline-block',
                  lineHeight: '18px',
                }}
              >
                Start IPV4 Address
              </Box>
            }
          />
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: 16,
              color: '#242424',
              lineHeight: '24px',
              letterSpacing: 0,
              minWidth: '17px',
              textAlign: 'center',
              alignSelf: 'center',
            }}
          >
            to
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter End IPV4 Address"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton tabIndex={-1} disableRipple sx={{ p: 0, m: 0 }}>
                    <InfoOutlinedIcon sx={{ color: '#000', opacity: 0.56, fontSize: 20 }} />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                fontFamily: 'Poppins',
                fontSize: 16,
                color: '#6D7580',
                bgcolor: '#FFF',
                borderRadius: '4px',
                px: '12px',
                py: '16px',
                lineHeight: '24px',
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: 'Poppins',
                fontSize: 12,
                color: '#6D7580',
                bgcolor: '#F0EFFF',
                px: '4px',
                borderRadius: '4px',
                lineHeight: '18px',
              },
              shrink: true,
            }}
            label={
              <Box
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: 12,
                  color: '#6D7580',
                  bgcolor: '#F0EFFF',
                  px: '4px',
                  borderRadius: '4px',
                  position: 'relative',
                  top: '-10px',
                  left: '-4px',
                  display: 'inline-block',
                  lineHeight: '18px',
                }}
              >
                End IPV4 Address
              </Box>
            }
          />
        </Box>
      </Box>
    </Box>
  );
}