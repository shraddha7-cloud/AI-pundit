import React from 'react';
import { styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const BreadcrumbLink = styled(Link)({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '24px',
  color: '#242424',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  alignSelf: 'flex-start',
});

const BreadcrumbCurrent = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '24px',
  color: '#242424',
  alignSelf: 'flex-start',
});

const Title = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 500,
  fontSize: 20,
  lineHeight: '30px',
  color: '#363636',
  textAlign: 'left',
  alignSelf: 'flex-start',
  marginTop: 8,
});

function ChevronSeparator() {
  return (
    <span style={{ display: 'flex', alignItems: 'center', margin: '0 4px' }}>
      <img
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f61d3396-0422-461a-996f-4dd8246a3de8"
        alt=""
        width={10}
        height={10}
        style={{
          opacity: 0.56,
          display: 'block',
        }}
      />
    </span>
  );
}

export default function PageHeading() {
  return (
    <Stack direction="row" alignItems="flex-start" width="100%">
      <Stack spacing={1} minWidth={0} alignItems="flex-start">
        <Breadcrumbs
          separator={<ChevronSeparator />}
          aria-label="breadcrumb"
          sx={{
            minHeight: 24,
            p: 0,
            m: 0,
            alignItems: 'center',
          }}
        >
          <BreadcrumbLink href="#">Settings</BreadcrumbLink>
          <BreadcrumbLink href="#">General</BreadcrumbLink>
          <BreadcrumbCurrent>Site Management</BreadcrumbCurrent>
        </Breadcrumbs>
        <Title>Site Management</Title>
      </Stack>
    </Stack>
  );
}