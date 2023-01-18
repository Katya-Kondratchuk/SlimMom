import { ButtonStyled, LinkyStyled } from 'assets/styles/AuthPages.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperation';
import { Form, WrapperButton } from '../AuthForm.styled';
import InputAuthFrom from '../InputAuthFrom';

const RegistrForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const handlerSubmitRegister = e => {
    e.preventDefault();

    if (!username || !email || !password) {
      return;
    }

    dispatch(registerUser({ username, email, password }));
    resetForm();
  };

  return (
    <Form onSubmit={handlerSubmitRegister}>
      <InputAuthFrom
        id="standard-required-register-name"
        label="Name"
        type="text"
        name="username"
        sx={{
          mb: '40px',
        }}
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <InputAuthFrom
        id="standard-required-register-email"
        label="Email"
        type="email"
        name="email"
        sx={{
          mb: '40px',
        }}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <InputAuthFrom
        id="standard-required-register-pass"
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
          to="/registration"
        >
          Register
        </ButtonStyled>
        <LinkyStyled variant="outlined" sx={{ color: '#FC842D' }} to="/login">
          Log in
        </LinkyStyled>
      </WrapperButton>
    </Form>
  );
};

export default RegistrForm;
