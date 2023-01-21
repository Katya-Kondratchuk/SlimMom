import { Stack } from '@mui/material';
import Home from 'components/Main/Main';
import { StyledContainer } from 'components/Main/Main.styled';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';

const CalculatorPage = () => {
  return (
    <StyledContainer>
      <Stack direction={{ xs: 'column', md: 'column', lg: 'row' }}>
        <Home> </Home>
        <RightSideBar />
      </Stack>
    </StyledContainer>
  );
};
export default CalculatorPage;
