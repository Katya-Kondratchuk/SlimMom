import { ButtonStyled, LinkyStyled } from 'assets/styles/AuthPages.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/auth/authOperation';
import { selectAuthLoading } from 'redux/auth/authSelectors';
import { Form, WrapperButton } from '../AuthForm.styled';
import InputAuthFrom from '../InputAuthFrom';
import LoadingSpiner from '../LoadingSpiner';

const RegistrForm = () => {
  const loading = useSelector(selectAuthLoading);
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
          disabled={loading}
          sx={{ backgroundColor: '#FC842D' }}
        >
          {loading ? <LoadingSpiner /> : 'Register'}
        </ButtonStyled>
        <LinkyStyled
          variant="outlined"
          sx={{
            color: '#FC842D',
            pointerEvents: `${loading ? 'none' : 'all'}`,
          }}
          to="/login"
        >
          Log in
        </LinkyStyled>
      </WrapperButton>
    </Form>
  );
};

export default RegistrForm;
