import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const ChevronRightIcon = () => (
  <Box
    component="span"
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      mx: 0,
    }}
  >
    <svg
      width="6.17"
      height="10"
      viewBox="0 0 6.17 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.56, display: 'block' }}
    >
      <path
        d="M1 1L5 5L1 9"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Box>
);

export default function PageHeading() {
  return (
    <Box
      sx={{
        width: 1560,
        height: 62,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
        p: 0,
        m: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          height: '100%',
        }}
      >
        <Breadcrumbs
          separator={<ChevronRightIcon />}
          aria-label="breadcrumb"
          sx={{
            p: 0,
            m: 0,
            fontFamily: 'Poppins',
            fontSize: 16,
            lineHeight: '24px',
            color: '#242424',
            '& ol': {
              alignItems: 'center',
            },
          }}
        >
          <Link
            underline="none"
            color="inherit"
            href="#"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '24px',
              color: '#242424',
              letterSpacing: 0,
              p: 0,
              m: 0,
              textAlign: 'left',
              display: 'inline',
              minWidth: 0,
              minHeight: 0,
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Dashboard
          </Link>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '24px',
              color: '#242424',
              letterSpacing: 0,
              p: 0,
              m: 0,
              textAlign: 'left',
              display: 'inline',
              minWidth: 0,
              minHeight: 0,
            }}
          >
            JWT Keys
          </Typography>
        </Breadcrumbs>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 500,
            fontSize: 20,
            lineHeight: '30px',
            color: '#363636',
            letterSpacing: 0,
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            height: 30,
            minHeight: 30,
            p: 0,
            m: 0,
            alignSelf: 'stretch',
          }}
        >
          JWT Keys
        </Typography>
      </Box>
    </Box>
  );
}