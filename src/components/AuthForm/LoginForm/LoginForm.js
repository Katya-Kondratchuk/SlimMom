import { ButtonStyled, LinkyStyled } from 'assets/styles/AuthPages.styled';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/auth/authOperation';
import { Form, WrapperButton } from '../AuthForm.styled';
import { selectAuthLoading } from 'redux/auth/authSelectors';
import LoadingSpiner from '../LoadingSpiner';
import { useFormik } from 'formik';
import * as yup from 'yup';
import InputAuthFrom from '../InputAuthFrom';

const LoginForm = () => {
  const loading = useSelector(selectAuthLoading);
  const dispatch = useDispatch();

  let schema = yup.object().shape({
    email: yup
      .string()
      .typeError('Length must be greater than 3 and less than 254')
      .min(3, 'Min length 3!')
      .max(254, 'Max length 254!')
      .email('Invalid email - u need @ and .')
      .required('Required'),
    password: yup
      .string()
      .min(8, 'Min length 8!')
      .max(100, 'Max length 100!')
      .typeError('Length must be greater than 8 and less than 100')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(loginUser(values));
    },
  });

  const isValid = schema.isValidSync(formik.values);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputAuthFrom
        id="standard-required-login-email"
        label="Email"
        type="email"
        name="email"
        sx={{
          mb: '40px',
        }}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik?.errors?.email ?? ''}
      />

      <InputAuthFrom
        id="standard-required-login-pass"
        label="Password"
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik?.errors?.password ?? ''}
      />

      <WrapperButton>
        <ButtonStyled
          type="submit"
          variant="contained"
          disabled={loading || !isValid}
          sx={{ backgroundColor: '#FC842D' }}
        >
          {loading ? <LoadingSpiner /> : 'Log in'}
        </ButtonStyled>
        <LinkyStyled
          variant="outlined"
          sx={{
            color: '#FC842D',
            pointerEvents: `${loading ? 'none' : 'all'}`,
          }}
          to="/registration"
        >
          Register
        </LinkyStyled>
      </WrapperButton>
    </Form>
  );
};

export default LoginForm;
