import { TextField } from '@mui/material';
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
