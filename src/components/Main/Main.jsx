import { useFormik } from 'formik';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import {
  ColorButton,
  ColorRadioBtn,
  StyledInputLable,
  StyledFormControlLabel,
} from './Main.styled.js';

import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import {
  FormControl,
  FormHelperText,
  Input,
  Typography,
  Paper,
  Box,
} from '@mui/material';
import ModalWindow from 'components/Modal/ModalWindow.jsx';
import { BgImg } from './backgroundImage/BackGround.styled.js';
const initialValues = {
  height: '',
  age: '',
  currentWeight: '',
  desiredWeight: '',
  bloodType: '',
};

const schema = yup.object().shape({
  height: yup
    .number()
    .required('Please write down your your height')
    .typeError('Your height must be a number!')
    .positive()
    .min(130, 'You cant be that short!')
    .max(220, 'Humans cant be that big!'),

  age: yup
    .number()
    .typeError('Your age must be a number!')
    .min(15, 'Aplication is not for children')
    .max(80, 'Better check your weight with a doctor')
    .required('Please write down your your age'),
  currentWeight: yup
    .number()
    .required('Please write down your current weight')
    .typeError('Your current weight must be a number!')
    .min(50, 'You are too light to use this app.')
    .max(350, 'You cant be that big!')
    .positive(),

  desiredWeight: yup
    .number()
    .typeError('Your desired weight must be a number!')
    .min(45, 'You cant be that light.')
    .max(100, 'You can do better!')
    .notOneOf(
      [yup.ref('currentWeight'), null],
      'Your desired weight and current weight are same!'
    )
    // .lessThan(
    //   [yup.ref('currentWeight'), null],
    //   'Your desired weight have to be less then current weight!'
    // )
    .required('Please write down your desired weight'),
  bloodType: yup.string().required('Please chose your blood type'),
});

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  value: PropTypes.string,
};

const Home = () => {
  const [open, setOpen] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(false);
    },
    validateOnBlur: true,
  });
  const isValid = schema.isValidSync(formik.values);
  const handleCloseModal = () => {
    setOpen(!open);
  };
  return (
    <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
      <BgImg />
      <Box
        component="form"
        sx={{ width: '608px', mt: '147px' }}
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <Typography variant="mainTitle" component="h1" sx={{ mb: '41px' }}>
          Calculate your daily calorie intake right now
        </Typography>
        <FormControl variant="standard">
          <StyledInputLable
            htmlFor="height"
            disableAnimation
            shrink
            error={formik.touched.height && Boolean(formik.errors.height)}
          >
            Height*
          </StyledInputLable>
          <Input
            notched="true"
            id="height"
            placeholder="Write down your height in sm."
            value={formik.values.height}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.height && Boolean(formik.errors.height)}
            sx={{ width: '240px', mt: '17px', mr: '32px' }}
          />
          {formik.touched.height && formik.errors.height ? (
            <FormHelperText
              error={formik.touched.height && Boolean(formik.errors.height)}
              id="height-helper-text"
            >
              {formik.errors.height}
            </FormHelperText>
          ) : (
            <FormHelperText id="height-helper-text"> </FormHelperText>
          )}
        </FormControl>
        <FormControl variant="standard">
          <StyledInputLable
            htmlFor="age"
            disableAnimation
            shrink
            error={formik.touched.age && Boolean(formik.errors.age)}
          >
            Age*
          </StyledInputLable>
          <Input
            notched="true"
            id="age"
            value={formik.values.age}
            placeholder="Write down your age."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.age && Boolean(formik.errors.age)}
            variant="standard"
            sx={{ width: '240px' }}
          />
          {formik.touched.age && formik.errors.age ? (
            <FormHelperText
              error={formik.touched.age && Boolean(formik.errors.age)}
              id="age-helper-text"
            >
              {formik.errors.age}
            </FormHelperText>
          ) : (
            <FormHelperText id="age-helper-text"> </FormHelperText>
          )}
        </FormControl>
        <FormControl
          sx={{ width: '240px', mt: '17px', mr: '32px' }}
          variant="standard"
        >
          <StyledInputLable
            error={
              formik.touched.currentWeight &&
              Boolean(formik.errors.currentWeight)
            }
            disableAnimation
            shrink
            htmlFor="currentWeight"
          >
            Current Weight*
          </StyledInputLable>
          <Input
            notched="true"
            fullWidth
            id="currentWeight"
            name="currentWeight"
            label="Current weight*"
            placeholder="Write down your weight in kg."
            value={formik.values.currentWeight}
            aria-describedby="currentWeight-helper-text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.currentWeight &&
              Boolean(formik.errors.currentWeight)
            }
          />
          {formik.touched.currentWeight && formik.errors.currentWeight ? (
            <FormHelperText
              error={
                formik.touched.currentWeight &&
                Boolean(formik.errors.currentWeight)
              }
              id="currentWeight-helper-text"
            >
              {formik.errors.currentWeight}
            </FormHelperText>
          ) : (
            <FormHelperText id="currentWeight-helper-text"> </FormHelperText>
          )}
        </FormControl>
        <FormControl sx={{ width: '240px', mt: '17px' }} variant="standard">
          <StyledInputLable
            error={formik.touched.bloodType && Boolean(formik.errors.bloodType)}
            disableAnimation
            shrink
            htmlFor="bloodType"
          >
            Blood Type*
          </StyledInputLable>
          <Input
            disabled
            notched="true"
            id="bloodType"
            name="bloodType"
            value={formik.values.bloodType}
            placeholder="Choose your blood type."
            aria-describedby="bloodType-helper-text"
            error={formik.touched.bloodType && Boolean(formik.errors.bloodType)}
          />
          <RadioGroup
            notched="true"
            row
            aria-labelledby="bloodType"
            name="bloodType"
            value={formik.values.bloodType}
            onChange={formik.handleChange}
            sx={{
              color: '#9B9FAA',
              '&.Mui-checked': {
                color: '#FC842D',
              },
            }}
          >
            <MyFormControlLabel
              value="1"
              control={<ColorRadioBtn />}
              label="1"
            />
            <MyFormControlLabel
              value="2"
              control={<ColorRadioBtn />}
              label="2"
            />
            <MyFormControlLabel
              value="3"
              control={<ColorRadioBtn />}
              label="3"
            />
            <MyFormControlLabel
              value="4"
              control={<ColorRadioBtn />}
              label="4"
            />
          </RadioGroup>
          {formik.touched.bloodType && formik.errors.bloodType ? (
            <FormHelperText
              error={
                formik.touched.bloodType && Boolean(formik.errors.bloodType)
              }
              id="bloodType-helper-text"
            >
              {formik.errors.bloodType}
            </FormHelperText>
          ) : (
            <FormHelperText id="bloodType-helper-text"></FormHelperText>
          )}
        </FormControl>
        <FormControl sx={{ width: '240px' }} variant="standard">
          <StyledInputLable
            error={
              formik.touched.desiredWeight &&
              Boolean(formik.errors.desiredWeight)
            }
            disableAnimation
            shrink
            htmlFor="desiredWeight"
          >
            Desired Weight*
          </StyledInputLable>
          <Input
            notched="true"
            fullWidth
            id="desiredWeight"
            name="desiredWeight"
            label="Desired Weight*"
            placeholder="Your desired weight in kg."
            value={formik.values.desiredWeight}
            aria-describedby="desiredWeight-helper-text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.desiredWeight &&
              Boolean(formik.errors.desiredWeight)
            }
          />
          {formik.touched.desiredWeight && formik.errors.desiredWeight ? (
            <FormHelperText
              error={
                formik.touched.desiredWeight &&
                Boolean(formik.errors.desiredWeight)
              }
              id="desiredWeight-helper-text"
            >
              {formik.errors.desiredWeight}
            </FormHelperText>
          ) : (
            <FormHelperText id="desiredWeight-helper-text"></FormHelperText>
          )}
        </FormControl>
      </Box>
      <ColorButton
        disabled={isValid ? false : true}
        type="submit"
        variant="contained"
        onClick={handleCloseModal}
      >
        Start losing weight
      </ColorButton>
      {open && (
        <ModalWindow
          values={formik.values}
          open={open}
          onClose={handleCloseModal}
        />
      )}
    </Paper>
  );
};

export default Home;
