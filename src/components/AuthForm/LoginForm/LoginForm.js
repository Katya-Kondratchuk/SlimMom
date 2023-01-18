import { ButtonStyled, LinkyStyled } from 'assets/styles/AuthPages.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperation';
import { Form, WrapperButton } from '../AuthForm.styled';
import InputAuthFrom from '../InputAuthFrom';

const LoginForm = () => {
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
          sx={{ backgroundColor: '#FC842D' }}
        >
          Log in
        </ButtonStyled>
        <LinkyStyled
          variant="outlined"
          sx={{ color: '#FC842D' }}
          to="/registration"
        >
          Register
        </LinkyStyled>
      </WrapperButton>
    </Form>
  );
};

export default LoginForm;
