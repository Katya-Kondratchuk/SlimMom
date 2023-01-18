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

  // getProducts('молоко').then(res => console.log(res));

  // const id = useSelector(selectAuthUserId);
  // const obj = {
  //   weight: 100,
  //   height: 170,
  //   age: 30,
  //   desiredWeight: 60,
  //   bloodType: 1,
  // };
  // const obj2 = {
  //   weight: 120,
  //   height: 170,
  //   age: 30,
  //   desiredWeight: 60,
  //   bloodType: 1,
  // };

  // postDailyRateWithId(id, obj).then(res => console.log(res));
  // postDailyRateWithId(id, obj2).then(res => console.log(res));
  // console.log(id);

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
