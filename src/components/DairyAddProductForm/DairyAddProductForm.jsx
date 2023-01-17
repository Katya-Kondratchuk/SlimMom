import { TextField } from '@mui/material';
// import { useSelector } from 'react-redux';
// import { selectAuthUserId } from 'redux/auth/authSelectors';
// import { getProducts, postDailyRateWithId } from 'services/api/base_api';
// import { useSelector } from 'react-redux';
// import { selectAuthRefreshToken } from 'redux/auth/authSelectors';
// import { getProducts } from 'services/api/base_api';
// import PropTypes from 'prop-types';

export default function DairyAddProductForm() {
  const handelSubmit = e => {
    e.preventDefault();
    // const productName = e.target.elements.name.value.trim();
    // const productGrams = e.target.elements.grams.value.trim();

    // const newProduct = {
    //   name: productName,
    //   grams: productGrams,
    // };

    // if (!findeName && !findeNumber) {
    //   dispatch(postOperation(newContact));
    //   e.target.reset();
    // } else {
    //   alert(`${newName} is already in contacts`);
    // }
  };

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
    <form onSubmit={handelSubmit}>
      <TextField
        id="standard-basic"
        label="Enter product name"
        variant="filled"
      />
      {/* <label>
        Enter product name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Enter product name. For example Bread, Nut, Poultry meat, Eggplant"
          required
        />
      </label> */}
      <label>
        Grams
        <input
          type="number"
          name="grams"
          title="Enter the amount of grams"
          required
        />
      </label>
      <button type="submit">
        Add<span></span>
      </button>
    </form>
  );
}

// DairyAddProductForm.propTypes = {
//   onSubmiting: PropTypes.func.isRequired,
// };
