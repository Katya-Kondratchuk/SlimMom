import { Box } from '@mui/material';
import ContainerLayout from 'components/Container/Container';
import {
  ButtonStyled,
  LinkyStyled,
  TitleStyled,
} from 'pages/RegistrationPage/Register.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperation';

const LoginPage = () => {
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
    <ContainerLayout>
      <Box
        sx={{
          display: { md: 'flex' },
          flexDirection: { md: 'column' },
          alignItems: { md: 'flex-start' },
        }}
      >
        <TitleStyled
          sx={{
            marginTop: { md: '170px' },
          }}
        >
          Log in
        </TitleStyled>
        <form
          onSubmit={handlerSubmitLogin}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
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
          {/* <Box sx={{ display: { md: 'flex' } }}> */}
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
            Registration
          </LinkyStyled>
          {/* </Box> */}
        </form>
      </Box>
    </ContainerLayout>
  );
};

export default LoginPage;
