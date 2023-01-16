import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Radio, InputLabel, FormControlLabel } from '@mui/material';
export const ColorButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF',
  backgroundColor: '#FC842D',
  chubby: true,

  '&:hover': {
    backgroundColor: '#FFFFFF',
    color: '#FC842D',
  },
}));
export const ColorRadioBtn = styled(Radio)(({ theme }) => ({
  color: '#E0E0E0',
  '&.Mui-checked': {
    color: '#FC842D',
  },
}));
export const StyledInputLable = styled(InputLabel)(({ theme }) => ({
  color: '#9B9FAA',
  fontWeight: 700,
  fontSize: 14,
  lineHeight: 1.14,
}));
export const StyledFormControlLabel = styled(props => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  '.MuiFormControlLabel-label': checked && {
    color: '#FC842D',
  },
}));
