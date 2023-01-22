import Header from 'components/Header';
import LoaderSuspense from 'components/LoaderSuspense/LoaderSuspense';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<LoaderSuspense />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
