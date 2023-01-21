import {
  Autocomplete,
  InputAdornment,
  TextField,
  useMediaQuery,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
  FabStyled,
  FieldStyled,
  FormStyled,
} from './DairyAddProductForm.styled';
import { getProducts } from 'services/api/base_api';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { ColorButton } from 'components/Main/Main.styled';
import debounce from 'lodash.debounce';

export default function DairyAddProductForm({ onSubmitting, onHiddenClick }) {
  const [query, setQuery] = useState('');
  const [weigth, setWeigth] = useState('');
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');

  const isMobile = useMediaQuery('(max-width:767px)');

  const formEl = useRef();
  const buttonEl = useRef();

  // console.log(productList);
  // console.log(selectedProduct);
  // console.log(weigth);
  // console.log(query);

  useEffect(() => {
    if (query === '') {
      setProductList([]);
      return;
    }

    console.log('useEffect get products');
    getProducts(query).then(res => {
      const products = res[0]?.title ? res : [];
      // console.log(typeof res === 'object');
      // console.log(typeof res);
      // console.log(res[0]);
      // console.log(products);

      setProductList(products);
    });
  }, [query]);

  const productListValue = productList.map(({ title }) => title.ru);

  const hendleSubmit = e => {
    e.preventDefault();

    setWeigth(e.target.elements.grams.value.trim());

    if (!selectedProduct) {
      return;
    }
    const { _id } = productList.find(elem => elem.title.ru === selectedProduct);

    onSubmitting({ weight: weigth, id: _id });
    setQuery('');
    setWeigth('');
    e.currentTarget.reset();
  };

  const handleChangeView = value => {
    if (value) {
      onHiddenClick(value);
      formEl.current.style.display = 'block';
      buttonEl.current.style.display = 'none';
      formEl.current.parentElement.classList.add('afterInvisible');
    } else {
      onHiddenClick(value);
      formEl.current.style.display = 'none';
      buttonEl.current.style.display = 'flex';
      formEl.current.parentElement.classList.remove('afterInvisible');
    }
  };

  const debouncedQuery = debounce(e => {
    setQuery(e.target.value);
  }, 300);

  return (
    <FormStyled onSubmit={hendleSubmit}>
      <div className="wrapper" ref={formEl}>
        <Autocomplete
          sx={{ display: { xs: 'block', md: 'inline-block' } }}
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
              onChange={debouncedQuery}
              // setQuery(e.target.value)}
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
          onChange={e => setWeigth(e.target.value)}
          sx={{
            width: {
              xs: 280,
              md: 150,
            },

            mx: 3,
            margin: {
              xs: 0,
            },
            marginBottom: {
              xs: '60px',
              md: 0,
            },
            '&.MuiTextField-root .MuiInputBase-root': {
              backgroundColor: 'white',
              '::before': {
                borderColor: '#e0e0e0',
              },
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
        <ColorButton
          sx={{
            display: {
              xs: 'block',
              md: 'none',
            },
            margin: '0 auto',
            marginBottom: '20px',
            boxShadow: '0px 4px 10px rgba(252, 132, 45, 0.5)',
          }}
          onClick={() => (isMobile ? handleChangeView(false) : null)}
          type="submit"
          disabled={query && weigth ? false : true}
        >
          Add
        </ColorButton>
      </div>
      <FabStyled
        ref={buttonEl}
        onClick={() => (isMobile ? handleChangeView(true) : null)}
        aria-label="add"
        type={isMobile ? 'button' : 'submit'}
      >
        <AddIcon />
      </FabStyled>
    </FormStyled>
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
