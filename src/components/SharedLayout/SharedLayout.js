import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
