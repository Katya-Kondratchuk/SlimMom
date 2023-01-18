import ContainerLayout from 'components/Container/Container';
import LoginForm from 'components/AuthForm/LoginForm';
import {
  AuthWrapper,
  BgWrapper,
  TitleStyled,
} from 'assets/styles/AuthPages.styled';

const LoginPage = () => {
  return (
    <AuthWrapper>
      <ContainerLayout sx={{ pt: '160px' }}>
        <TitleStyled>Log in</TitleStyled>
        <LoginForm />
        <BgWrapper />
      </ContainerLayout>
    </AuthWrapper>
  );
};

export default LoginPage;
