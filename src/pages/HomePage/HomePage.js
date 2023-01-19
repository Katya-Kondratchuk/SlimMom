import { BgImg } from 'components/Main/backGround.styled';
import Home from 'components/Main/Main';
import { StyledContainer } from 'components/Main/Main.styled';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <StyledContainer>
      <BgImg />
      {isLoggedIn ? 'Welcome to slim MOM app!' : <Home />}
    </StyledContainer>
  );
};

export default HomePage;
