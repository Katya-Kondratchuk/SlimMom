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
import { FormHelperText, Input, Typography, Box } from '@mui/material';
import ModalWindow from 'components/Modal/ModalWindow.jsx';

const localInitValues = JSON.parse(localStorage?.getItem('item'));
// console.log(localInitValues);

const initialValues = {
  height: localInitValues?.height || '',
  age: localInitValues?.age || '',
  weight: localInitValues?.weight || '',
  desiredWeight: localInitValues?.desiredWeight || '',
  bloodType: localInitValues?.bloodType || '',
};

const schema = yup.object().shape({
  height: yup
    .number()
    .required('Please write down your your height')
    .typeError('Your height must be a number!')
    .positive('Height mast be a positive number')
    .min(130, 'You cant be that short!')
    .max(220, 'Humans cant be that big!'),

  age: yup
    .number()
    .typeError('Your age must be a number!')
    .min(15, 'Aplication is not for children')
    .max(80, 'Better check your weight with a doctor')
    .required('Please write down your your age'),
  weight: yup
    .number()
    .required('Please write down your current weight')
    .typeError('Your current weight must be a number!')
    .min(50, 'You are too light to use this app.')
    .max(350, 'You cant be that big!')
    .positive('Weight mast be a positive number'),

  desiredWeight: yup
    .number()
    .typeError('Your desired weight must be a number!')
    .min(45, 'You cant be that light.')
    .max(100, 'You can do better!')
    .notOneOf(
      [yup.ref('weight'), null],
      'Your desired weight and current weight are same!'
    )
    .required('Please write down your desired weight')
    .positive('Desired weight mast be a positive'),

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

const Home = ({ onSubmit }) => {
  const [open, setOpen] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      localStorage.setItem('item', JSON.stringify(values));
      setSubmitting(false);
    },
    validateOnBlur: true,
  });

  const isValid = schema.isValidSync(formik.values);
  const handleCloseModal = () => {
    setOpen(!open);
  };

  return (
    <Box component="div">
      <Box
        component="div"
        sx={{
          textAlign: 'centr',
          maxWidth: { lg: '608px', md: '518px', xs: '280px' },

          m: {
            xs: '32px auto 0 auto',
            md: '100px auto 0 auto',
            lg: '147px auto 0 0',
          },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: { xs: '34px', md: '68px' },
            textAlign: { xs: 'center', md: 'start' },
            fontSize: { xs: '18px', md: '34px' },
          }}
        >
          Calculate your daily calorie intake right now
        </Typography>
        <Box
          component="form"
          sx={{
            m: { xs: '0 auto', md: '0 auto 0 0' },
            maxWidth: { md: '512px', xs: '240px' },
          }}
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <Box
            component="div"
            sx={{
              display: { md: 'flex' },
              gap: '32px',
            }}
          >
            <Box component="div">
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
                sx={{ width: '242px' }}
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

              <StyledInputLable
                htmlFor="age"
                disableAnimation
                shrink
                error={formik.touched.age && Boolean(formik.errors.age)}
                sx={{ mt: { xs: '32px', md: '20px' } }}
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

              <StyledInputLable
                error={formik.touched.weight && Boolean(formik.errors.weight)}
                disableAnimation
                shrink
                htmlFor="weight"
                sx={{ mt: { xs: '32px', md: '20px' } }}
              >
                Current Weight*
              </StyledInputLable>
              <Input
                notched="true"
                fullWidth
                id="weight"
                name="weight"
                label="Current weight*"
                placeholder="Write down your weight in kg."
                value={formik.values.weight}
                aria-describedby="weight-helper-text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.weight && Boolean(formik.errors.weight)}
                sx={{ width: '240px' }}
              />
              {formik.touched.weight && formik.errors.weight ? (
                <FormHelperText
                  error={formik.touched.weight && Boolean(formik.errors.weight)}
                  id="weight-helper-text"
                >
                  {formik.errors.weight}
                </FormHelperText>
              ) : (
                <FormHelperText id="weight-helper-text"> </FormHelperText>
              )}
            </Box>
            <Box component="div">
              <StyledInputLable
                error={
                  formik.touched.desiredWeight &&
                  Boolean(formik.errors.desiredWeight)
                }
                sx={{ mt: { xs: '32px', md: '0' } }}
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
                sx={{ width: '240px' }}
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
                <FormHelperText id="desiredWeight-helper-text">
                  {' '}
                </FormHelperText>
              )}

              <StyledInputLable
                error={
                  formik.touched.bloodType && Boolean(formik.errors.bloodType)
                }
                sx={{ mt: { xs: '32px', md: '20px' } }}
                disableAnimation
                shrink
                htmlFor="bloodType"
              >
                Blood Type*
              </StyledInputLable>
              <Input
                readOnly
                notched="true"
                id="bloodType"
                name="bloodType"
                value={formik.values.bloodType}
                placeholder="Choose your blood type."
                aria-describedby="bloodType-helper-text"
                error={
                  formik.touched.bloodType && Boolean(formik.errors.bloodType)
                }
                sx={{ width: '240px' }}
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
                  control={<ColorRadioBtn disableRipple={Boolean(true)} />}
                  label="3"
                />
                <MyFormControlLabel
                  value="4"
                  control={<ColorRadioBtn disableRipple={true} />}
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
            </Box>
          </Box>
          <ColorButton
            sx={{
              m: {
                xs: '40px auto 0 auto',
                md: '60px auto 0 32px',
                lg: '60px auto 0 323px',
              },
            }}
            disabled={isValid ? false : true}
            type="submit"
            variant="contained"
            onClick={handleCloseModal}
          >
            {isValid ? `Start losing weight` : `Fill in your data `}
          </ColorButton>
        </Box>
      </Box>
      {open && (
        <ModalWindow
          values={formik.values}
          open={open}
          onClose={handleCloseModal}
          setOpen={setOpen}
        />
      )}
    </Box>
  );
};

export default Home;
