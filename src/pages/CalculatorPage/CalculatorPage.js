import Home from 'components/Main/Main';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';

const CalculatorPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Home />
      <RightSideBar />
    </div>
  );
};

export default CalculatorPage;
