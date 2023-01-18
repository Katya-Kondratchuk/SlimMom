import ContainerLayout from 'components/Container/Container';
import RegisterForm from 'components/AuthForm/RegisterForm';
import {
  AuthWrapper,
  BgWrapper,
  TitleStyled,
} from 'assets/styles/AuthPages.styled';

const RegistrationPage = () => {
  return (
    <AuthWrapper>
      <ContainerLayout>
        <TitleStyled>Register</TitleStyled>
        <RegisterForm />
        <BgWrapper />
      </ContainerLayout>
    </AuthWrapper>
  );
};

export default RegistrationPage;
