import { InputAdornment, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { FabStyled, FieldStyled } from './DairyAddProductForm.styled';
// import PropTypes from 'prop-types';

export default function DairyAddProductForm({ onSubmitting }) {
  // if (!findeName && !findeNumber) {
  //   dispatch(postOperation(newContact));
  //   e.target.reset();
  // } else {
  //   alert(`${newName} is already in contacts`);
  // }

  return (
    <form onSubmit={onSubmitting}>
      <FieldStyled
        required
        id="filled-product"
        label="Enter product name"
        name="product"
        variant="filled"
      />
      <TextField
        required
        label="Grams"
        id="filled-number"
        name="grams"
        type="number"
        sx={{
          width: 150,
          mx: 3,
          '&.MuiTextField-root .MuiInputBase-root.Mui-focused': {
            backgroundColor: '#1acebf26',
          },
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end">gr</InputAdornment>,
        }}
        inputProps={{
          inputMode: 'numeric',
          pattern: 'd{4}',
          max: 9999,
        }}
        variant="filled"
      />
      <FabStyled aria-label="add" type="submit">
        <AddIcon />
      </FabStyled>
    </form>
  );
}

// DairyAddProductForm.propTypes = {
//   onSubmiting: PropTypes.func.isRequired,
// };
