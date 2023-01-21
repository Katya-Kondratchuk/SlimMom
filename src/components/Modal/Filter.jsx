import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#264061',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#264061',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#264061',
    },
  },
});

const Filter = ({ setSearchQuery }) => (
  <form
    style={{
      m: '0 auto',
      textAlign: 'center',
    }}
  >
    <CssTextField
      id="search-bar"
      className="text"
      onInput={e => {
        setSearchQuery(e.target.value);
      }}
      label="Enter product"
      variant="outlined"
      placeholder="Search..."
      sx={{
        width: {
          xs: '80vw',
          md: '380px',
        },
        maxWidth: '100%',
      }}
      // disabled={loading || !isValid}
    />
  </form>
);
export default Filter;
