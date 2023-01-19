import { ButtonStyled, LinkyStyled } from 'assets/styles/AuthPages.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/auth/authOperation';
import { Form, WrapperButton } from '../AuthForm.styled';
import InputAuthFrom from '../InputAuthFrom';
import { selectAuthLoading } from 'redux/auth/authSelectors';
import LoadingSpiner from '../LoadingSpiner';

const LoginForm = () => {
  const loading = useSelector(selectAuthLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handlerSubmitLogin = e => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    dispatch(loginUser({ email, password }));
    resetForm();
  };

  return (
    <Form onSubmit={handlerSubmitLogin}>
      <InputAuthFrom
        id="standard-required-login-email"
        label="Email"
        type="email"
        name="email"
        value={email}
        sx={{
          mb: '40px',
        }}
        onChange={e => setEmail(e.target.value)}
      />

      <InputAuthFrom
        id="standard-required-login-pass"
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <WrapperButton>
        <ButtonStyled
          type="submit"
          variant="contained"
          disabled={loading}
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
        >
          Register
        </LinkyStyled>
      </WrapperButton>
    </Form>
  );
};

export default LoginForm;
