import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function RoutingForm() {
  return (
    <Box
      sx={{
        backgroundColor: '#F4F3FF',
        borderRadius: '4px',
        p: '10px',
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'stretch',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'stretch',
          minHeight: '24px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: 16,
            color: '#242424',
            lineHeight: '24px',
            textAlign: 'left',
            alignSelf: 'stretch',
          }}
        >
          Typography
        </Typography>
      </Box>

      <Box
        sx={{
          bgcolor: '#DBD5FF',
          borderRadius: '4px',
          p: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignSelf: 'stretch',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'stretch',
            pl: '16px',
            pr: '16px',
            minHeight: '24px',
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
              alignSelf: 'stretch',
              letterSpacing: 0,
            }}
          >
            IPV4 Routing*
          </Typography>
        </Box>
        <Divider sx={{ opacity: 0.12, bgcolor: '#000', m: 0, alignSelf: 'stretch' }} />
        <Box
          sx={{
            border: '1px solid #BDBDBD',
            borderRadius: '4px',
            bgcolor: 'transparent',
            p: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignSelf: 'stretch',
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
              alignSelf: 'stretch',
              letterSpacing: 0,
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
                fontSize: 16, // Increased from 12 to 16 for better visibility
                color: '#6D7580',
                bgcolor: '#F0EFFF',
                px: '4px',
                borderRadius: '4px',
                lineHeight: '24px', // Match input line height
              },
              shrink: true,
            }}
            label="IPV4 Subnet"
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
            alignSelf: 'stretch',
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
              alignSelf: 'stretch',
              letterSpacing: 0,
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
              alignSelf: 'stretch',
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
                  fontSize: 16, // Increased from 12 to 16 for better visibility
                  color: '#6D7580',
                  bgcolor: '#F0EFFF',
                  px: '4px',
                  borderRadius: '4px',
                  lineHeight: '24px', // Match input line height
                },
                shrink: true,
              }}
              label="Start IPV4 Address"
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
                    <InfoOutlinedIcon sx={{ color: '#000', opacity: 0.56, fontSize: 20 }} />
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
                  fontSize: 16, // Increased from 12 to 16 for better visibility
                  color: '#6D7580',
                  bgcolor: '#F0EFFF',
                  px: '4px',
                  borderRadius: '4px',
                  lineHeight: '24px', // Match input line height
                },
                shrink: true,
              }}
              label="End IPV4 Address"
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: '#DBD5FF',
          borderRadius: '4px',
          p: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignSelf: 'stretch',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'stretch',
            pl: '16px',
            pr: '16px',
            minHeight: '24px',
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
              alignSelf: 'stretch',
              letterSpacing: 0,
            }}
          >
            IPV6 Routing
          </Typography>
        </Box>
        <Divider sx={{ opacity: 0.12, bgcolor: '#000', m: 0, alignSelf: 'stretch' }} />
        <Box
          sx={{
            border: '1px solid #BDBDBD',
            borderRadius: '4px',
            bgcolor: 'transparent',
            p: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignSelf: 'stretch',
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
              alignSelf: 'stretch',
              letterSpacing: 0,
            }}
          >
            CIDR Address
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter IPV6 Subnet"
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
                fontSize: 16, // Increased from 12 to 16 for better visibility
                color: '#6D7580',
                bgcolor: '#F0EFFF',
                px: '4px',
                borderRadius: '4px',
                lineHeight: '24px', // Match input line height
              },
              shrink: true,
            }}
            label="IPV6 Subnet"
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
            alignSelf: 'stretch',
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
              alignSelf: 'stretch',
              letterSpacing: 0,
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
              alignSelf: 'stretch',
            }}
          >
            <TextField
              fullWidth
              placeholder="Enter Start IPV6 Address"
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
                  fontSize: 16, // Increased from 12 to 16 for better visibility
                  color: '#6D7580',
                  bgcolor: '#F0EFFF',
                  px: '4px',
                  borderRadius: '4px',
                  lineHeight: '24px', // Match input line height
                },
                shrink: true,
              }}
              label="Start IPV6 Address"
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
              placeholder="Enter End IPV6 Address"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <InfoOutlinedIcon sx={{ color: '#000', opacity: 0.56, fontSize: 20 }} />
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
                  fontSize: 16, // Increased from 12 to 16 for better visibility
                  color: '#6D7580',
                  bgcolor: '#F0EFFF',
                  px: '4px',
                  borderRadius: '4px',
                  lineHeight: '24px', // Match input line height
                },
                shrink: true,
              }}
              label="End IPV6 Address"
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: '#F4F3FF',
          borderRadius: '4px',
          p: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          alignSelf: 'stretch',
        }}
      >
        <TextField
          fullWidth
          placeholder=""
          value="10"
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
              fontSize: 16, // Increased from 12 to 16 for better visibility
              color: '#6D7580',
              bgcolor: '#F0EFFF',
              px: '4px',
              borderRadius: '4px',
              lineHeight: '24px', // Match input line height
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
              Metric *
            </Box>
          }
        />
      </Box>
    </Box>
  );
}