import * as React from 'react';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          background: '#fff',
          borderRadius: 4,
          width: '100%',
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
            fontFamily: 'Poppins',
            fontSize: 14,
            lineHeight: '20px',
            color: '#333333', // Darkened from #6D7580
            '& fieldset': {
              borderColor: 'rgba(0,0,0,0.23)',
            },
            '&:hover fieldset': {
              borderColor: '#7C3AED',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#7C3AED',
            },
          },
          '& input': {
            fontFamily: 'Poppins',
            fontSize: 14, 
            color: '#333333', // Darkened from #6D7580
            padding: '10px 8px', 
            height: '20px', 
          },
          '& .MuiInputLabel-root': {
            display: 'none',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(0,0,0,0.12)',
        },
      },
    },
  },
});

const Root = styled(Box)({
  background: '#F4F3FF',
  borderRadius: 4,
  padding: 10,
  width: '100%', // Full width
  height: 'auto',
  minHeight: '500px',
  margin: 0,
});

const SectionCard = styled(Paper)({
  background: '#DBD6FD',
  borderRadius: 4,
  padding: 10,
  boxShadow: 'none',
  marginBottom: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  width: '100%', // Ensure it takes full width
});

const SectionHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 12, // Reduced from 16
  paddingRight: 12, // Reduced from 16
  height: 20, // Reduced from 24
});

const SectionTitle = styled(Typography)({
  fontFamily: 'Poppins',
  fontWeight: 500,
  fontSize: 14, // Reduced from 16
  color: '#121212', // Darkened from #242424
  lineHeight: '20px', // Reduced from 24px
  alignSelf: 'stretch',
});

const GroupCard = styled(Paper)({
  background: 'transparent',
  borderRadius: 4,
  border: '1px solid rgba(189, 189, 189, 0.3)', // Made border more subtle
  padding: 10,
  marginBottom: 0,
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  width: '100%', // Ensure it takes full width
});

const GroupLabel = styled(Typography)({
  fontFamily: 'Poppins',
  fontWeight: 500,
  fontSize: 13, // Reduced from 14
  color: '#121212', // Darkened from #242424
  marginBottom: 6, // Reduced from 8
  lineHeight: '18px', // Reduced from 21px
  alignSelf: 'stretch',
});

const LabelWrap = styled(Box)({
  position: 'absolute',
  top: -8, // Adjusted from -9 to -8 to move it more toward the center
  left: 12,
  background: 'transparent',
  paddingLeft: 4,
  paddingRight: 4,
  borderRadius: 4,
  zIndex: 1,
  display: 'inline-flex',
  alignItems: 'center',
  height: 18,
});

const FieldWrap = styled(Box)({
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'stretch',
});

const RangeRow = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  gap: 20,
  width: '100%',
});

function LabeledTextField({
  label,
  placeholder,
  value,
  endAdornment,
}: {
  label: string;
  placeholder: string;
  value?: string;
  endAdornment?: React.ReactNode;
}) {
  return (
    <FieldWrap>
      <LabelWrap>
        <Typography sx={{ 
          fontFamily: 'Poppins', 
          fontSize: 11, 
          color: '#454545', // Darkened from #6D7580
          background: 'transparent', 
          lineHeight: '14px',
          paddingBottom: '2px',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          maxWidth: '100%'
        }}>
          {label}
        </Typography>
      </LabelWrap>
      <TextField
        variant="outlined"
        placeholder={placeholder}
        defaultValue={value}
        InputProps={{
          sx: { pl: 1, pr: 1, height: 44 },
          endAdornment,
        }}
      />
    </FieldWrap>
  );
}

function RangeFields({
  startLabel,
  endLabel,
  startPlaceholder,
  endPlaceholder,
  infoIcon,
}: {
  startLabel: string;
  endLabel: string;
  startPlaceholder: string;
  endPlaceholder: string;
  infoIcon?: boolean;
}) {
  return (
    <RangeRow>
      <FieldWrap sx={{ flex: 1 }}>
        <LabelWrap>
          <Typography sx={{ 
            fontFamily: 'Poppins', 
            fontSize: 11, 
            color: '#454545', // Darkened from #6D7580
            background: 'transparent', 
            lineHeight: '14px',
            paddingBottom: '2px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            maxWidth: '100%'
          }}>
            {startLabel}
          </Typography>
        </LabelWrap>
        <TextField
          variant="outlined"
          placeholder={startPlaceholder}
          InputProps={{
            sx: { pl: 1, pr: 1, height: 44 },
          }}
        />
      </FieldWrap>
      <Typography sx={{ fontFamily: 'Poppins', fontSize: 14, color: '#121212', mx: 0.5, minWidth: 12, textAlign: 'center' }}>
        to
      </Typography>
      <FieldWrap sx={{ flex: 1 }}>
        <LabelWrap>
          <Typography sx={{ 
            fontFamily: 'Poppins', 
            fontSize: 11, 
            color: '#454545', // Darkened from #6D7580
            background: 'transparent', 
            lineHeight: '14px',
            paddingBottom: '2px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            maxWidth: '100%'
          }}>
            {endLabel}
          </Typography>
        </LabelWrap>
        <TextField
          variant="outlined"
          placeholder={endPlaceholder}
          InputProps={{
            sx: { pl: 1, pr: 1, height: 44 },
            endAdornment: infoIcon ? (
              <InputAdornment position="end">
                <InfoOutlinedIcon sx={{ color: 'rgba(0,0,0,0.7)', fontSize: 16 }} /> 
              </InputAdornment>
            ) : undefined,
          }}
        />
      </FieldWrap>
    </RangeRow>
  );
}

export default function XfrmRoutingForm() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Box 
            display="flex" 
            alignItems="center" 
            justifyContent="space-between" 
            width="100%" 
            sx={{ 
              p: '10px', 
              bgcolor: '#F4F3FF' 
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: 14,
                color: '#121212', // Darkened from #242424
                lineHeight: '20px',
              }}
            >
              XFRM
            </Typography>
            <ArrowDropUpIcon
              sx={{
                color: 'rgba(0,0,0,0.7)', // Darkened from rgba(0,0,0,0.56)
                fontSize: 20,
              }}
            />
          </Box>
          
          <SectionCard>
            <SectionHeader>
              <SectionTitle>IPV4 Routing*</SectionTitle>
            </SectionHeader>
            <Divider />
            <GroupCard>
              <GroupLabel>CIDR Address</GroupLabel>
              <LabeledTextField label="IPV4 Subnet" placeholder="Enter IPV4 Subnet" />
            </GroupCard>
            <GroupCard>
              <GroupLabel>IP Address Range</GroupLabel>
              <RangeFields
                startLabel="Start IPV4 Address"
                endLabel="End IPV4 Address"
                startPlaceholder="Enter Start IPV4 Address"
                endPlaceholder="Enter End IPV4 Address"
                infoIcon
              />
            </GroupCard>
          </SectionCard>
          
          <SectionCard>
            <SectionHeader>
              <SectionTitle>IPV6 Routing</SectionTitle>
            </SectionHeader>
            <Divider />
            <GroupCard>
              <GroupLabel>CIDR Address</GroupLabel>
              <LabeledTextField label="IPV6 Subnet" placeholder="Enter IPV6 Subnet" />
            </GroupCard>
            <GroupCard>
              <GroupLabel>IP Address Range</GroupLabel>
              <RangeFields
                startLabel="Start IPV6 Address"
                endLabel="End IPV6 Address"
                startPlaceholder="Enter Start IPV6 Address"
                endPlaceholder="Enter End IPV6 Address"
                infoIcon
              />
            </GroupCard>
          </SectionCard>
          
          <Box sx={{ mt: 2 }}> 
            <LabeledTextField 
              label="Metric *"
              placeholder=""
              value="10"
            />
          </Box>
        </Stack>
      </Root>
    </ThemeProvider>
  );
}