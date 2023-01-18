import {
  ButtonStyled,
  LinkyStyled,
  TitleStyled,
} from 'pages/RegistrationPage/Register.styled';
import ContainerLayout from 'components/Container/Container';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperation';

const RegistrationPage = () => {
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
    <ContainerLayout>
      <TitleStyled>Register</TitleStyled>
      <form
        onSubmit={handlerSubmitRegister}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <input
          required
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <ButtonStyled
          type="submit"
          variant="contained"
          sx={{ backgroundColor: '#FC842D' }}
          to="/registration"
        >
          Registration
        </ButtonStyled>
        <LinkyStyled variant="outlined" sx={{ color: '#FC842D' }} to="/login">
          Log in
        </LinkyStyled>
      </form>
    </ContainerLayout>
  );
};

export default RegistrationPage;
