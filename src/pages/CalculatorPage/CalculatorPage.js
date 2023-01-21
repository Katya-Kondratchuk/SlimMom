import Home from 'components/Main/Main';
import { StyledContainer } from 'components/Main/Main.styled';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';

const CalculatorPage = () => {
  return (
    <StyledContainer style={{ display: 'flex' }}>
      <Home />
      <RightSideBar />
    </StyledContainer>
  );
};

export default CalculatorPage;
