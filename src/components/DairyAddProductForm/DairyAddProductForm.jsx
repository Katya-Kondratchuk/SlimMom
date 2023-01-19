import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { FabStyled, FieldStyled } from './DairyAddProductForm.styled';
import { getProducts } from 'services/api/base_api';
import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

export default function DairyAddProductForm({ onSubmitting }) {
  const [query, setQuery] = useState('');
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');

  // console.log(productList);
  // console.log(selectedProduct);
  // console.log(id);
  // console.log(query);

  useEffect(() => {
    if (query === '') {
      setProductList([]);
      return;
    }
    getProducts(query).then(res => {
      // console.log(res);

      // const products =
      //   typeof res === 'object' ? [] : res.map(({ title }) => title.ru);
      const products = res[0]?.title ? res : [];
      // console.log(typeof res === 'object');
      // console.log(typeof res);
      // console.log(res[0]);
      // console.log(products);

      setProductList(products);
    });
  }, [query]);

  // if (!findeName && !findeNumber) {
  //   dispatch(postOperation(newContact));
  //   e.target.reset();
  // } else {
  //   alert(`${newName} is already in contacts`);
  // }

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
  const productListValue = productList.map(({ title }) => title.ru);

  const hendleSubmit = e => {
    e.preventDefault();

    const weight = e.target.elements.grams.value.trim();
    if (!selectedProduct) {
      return;
    }
    const { _id } = productList.find(elem => elem.title.ru === selectedProduct);

    onSubmitting({ weight, id: _id });
    setQuery('');
    e.currentTarget.reset();
  };

  return (
    <form
      style={{ alignItems: 'center', display: 'flex' }}
      onSubmit={hendleSubmit}
    >
      <Autocomplete
        sx={{ display: 'inline-block' }}
        disablePortal
        id="combo-box-demo"
        freeSolo
        value={query}
        onChange={(_, value) => {
          setSelectedProduct(value);
        }}
        noOptionsText="No products"
        options={productListValue}
        renderInput={params => (
          <FieldStyled
            required
            {...params}
            onChange={e => setQuery(e.target.value)}
            value={query}
            id="filled-product"
            label="Enter product name"
            name="product"
            variant="filled"
          />
        )}
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
          // '&.MuiTextField-root .MuiInputBase-root.Mui-focused': {
          //   backgroundColor: '#1acebf26',
          // },
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

// <FieldStyled
//   required
//   onChange={e => setQuery(e.target.value)}
//   value={query}
//   options={productList}
//   id="filled-product"
//   label="Enter product name"
//   name="product"
//   variant="filled"
// />
