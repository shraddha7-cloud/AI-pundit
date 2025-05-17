import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const ControlsRoot = styled(Stack)({
  width: '100%',
  height: 32, // Reduced from 40
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  paddingLeft: '0px', // Align with the heading by removing left padding
});

const LeftControls = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'flex-end',
  height: 32, // Reduced from 40
  marginLeft: 0, // Ensure no left margin
  paddingLeft: 0, // Ensure no left padding
});

const StyledTextField = styled(TextField)({
  width: 300,
  height: 32, // Reduced from 40
  marginLeft: 0, // Ensure no left margin
  '& .MuiOutlinedInput-root': {
    height: 32, // Reduced from 40
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 4,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '21px',
    color: '#6D7580',
    background: '#fff',
    '& fieldset': {
      borderColor: 'rgba(0,0,0,0.23)',
    },
  },
  '& .MuiInputAdornment-root': {
    marginRight: 8,
  },
  '& .MuiInputBase-input': {
    padding: '8px 0',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '21px',
    color: '#6D7580',
    alignSelf: 'stretch',
  },
});

const RightControls = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  height: 32, // Reduced from 40 to match smaller button height
  gap: 8, // Reduced from 12 for tighter spacing as seen in screenshot
});

const StyledIconButton = styled(IconButton)({
  width: 28, // Reduced from 32
  height: 28, // Reduced from 32
  minWidth: 28, // Reduced from 32
  minHeight: 28, // Reduced from 32
  borderRadius: 4,
  background: '#E9E6FF',
  padding: 4, // Reduced from 5
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    background: '#D1C6FF',
  },
});

const GrayButton = styled(Button)({
  minWidth: 80, // Reduced from 86
  height: 28, // Reduced from 32
  borderRadius: 4,
  background: '#FFFFFF', // Changed from #F9F9F9 to white as requested
  color: 'rgba(0,0,0,0.38)',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 500,
  fontSize: 12, // Reduced from 13
  lineHeight: '18px', // Reduced from 19.5px
  padding: '3px 8px', // Reduced padding
  textTransform: 'none',
  boxShadow: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: 6, // Reduced from 8
  '&:hover': {
    background: '#F0F0F0',
  },
});

const AddButton = styled(Button)({
  minWidth: 110, // Reduced from 133
  height: 32, // Reduced from 40
  borderRadius: 4,
  background: '#7C4DFA',
  color: '#fff',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 500,
  fontSize: 13, // Reduced from 15
  lineHeight: '20px', // Reduced from 22.5px
  padding: '6px 16px', // Reduced padding
  textTransform: 'none',
  boxShadow: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: 6, // Reduced from 8
  '&:hover': {
    background: '#6B3DF7',
  },
});

export default function Controls() {
  return (
    <ControlsRoot>
      <LeftControls>
        <StyledTextField
          variant="outlined"
          placeholder="Search Site"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9904f769-0307-447c-ba3e-94f78d4ab6fd"
                  alt=""
                  width={17}
                  height={17}
                  style={{ opacity: 0.56, display: 'block' }}
                />
              </InputAdornment>
            ),
            style: { paddingLeft: 12, paddingRight: 12 },
          }}
          inputProps={{
            style: {
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: 14,
              lineHeight: '21px',
              color: '#6D7580',
              alignSelf: 'stretch',
            },
          }}
        />
      </LeftControls>
      <RightControls>
        <StyledIconButton>
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8eaf7b2-bd40-4cd5-9b6e-022117fcf488"
            alt=""
            width={18}
            height={18}
            style={{ display: 'block' }}
          />
        </StyledIconButton>
        <GrayButton startIcon={
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b79dcc2-373c-4dcc-9529-6e4c24037056"
            alt=""
            width={13}
            height={14}
            style={{ opacity: 0.38, display: 'block' }}
          />
        }>
          Delete
        </GrayButton>
        <GrayButton startIcon={
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/806028e5-424a-4e8c-ac05-b5460986ecf8"
            alt=""
            width={15}
            height={15}
            style={{ opacity: 0.38, display: 'block' }}
          />
        }>
          Export
        </GrayButton>
        <AddButton startIcon={
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6983184e-e1ba-4f25-886f-71683718125c"
            alt=""
            width={20}
            height={20}
            style={{ display: 'block' }}
          />
        }>
          Add Site
        </AddButton>
      </RightControls>
    </ControlsRoot>
  );
}