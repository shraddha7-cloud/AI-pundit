import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DropdownHeaderCollapsed = () => (
  <Box
    sx={{
      width: 1796,
      height: 44,
      bgcolor: '#F4F3FF',
      borderRadius: 4,
      p: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      boxSizing: 'border-box',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 24,
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          fontSize: 16,
          lineHeight: '24px',
          color: '#242424',
          letterSpacing: 0,
          alignSelf: 'stretch',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Typography
      </Typography>
      <Box
        sx={{
          width: 24,
          height: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec88a038-4255-47dd-a106-16888af98d82"
          alt="Arrow Up"
          style={{
            width: 10,
            height: 5,
            transform: 'rotate(180deg)',
            opacity: 0.56,
            display: 'block',
          }}
        />
      </Box>
    </Box>
  </Box>
);

export default DropdownHeaderCollapsed;