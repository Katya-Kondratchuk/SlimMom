// import { TextField, Typography } from '@mui/material';
import moment from 'moment';
import { Box } from '@mui/system';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useEffect, useState } from 'react';
import { HeadingStyled } from './DiaryDateСalendar.styled';

export default function DiaryDateСalendar({ onDateChange }) {
  const [value, setValue] = useState(moment(new Date()));

  useEffect(() => {
    onDateChange(value);
  }, [onDateChange, value]);

  const viewDate = new Date(value).toLocaleDateString();
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DesktopDatePicker
        label="Basic example"
        value={value}
        onChange={newValue => {
          setValue(newValue);
        }}
        renderInput={({ inputRef, InputProps }) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginTop: {
                xs: '40px',
                md: '52px',
                lg: '0px',
              },
            }}
          >
            <HeadingStyled ref={inputRef}>{viewDate}</HeadingStyled>
            {InputProps?.endAdornment}
          </Box>
        )}
      />
    </LocalizationProvider>
  );
}
