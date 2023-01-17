import SharedLayout from 'components/SharedLayout';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuthRoute } from './RequireAuthRoute';
import { RequireNotAuthRoute } from './RequireNotAuthRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage'));
const CalculatorPage = lazy(() => import('pages/CalculatorPage'));

const AllRouts = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="login"
              element={
                <RequireNotAuthRoute
                  component={<LoginPage />}
                  redirectTo="/diary"
                />
              }
            />
            <Route
              path="registration"
              element={
                <RequireNotAuthRoute
                  component={<RegistrationPage />}
                  redirectTo="/login"
                />
              }
            />
            <Route
              path="diary"
              element={
                <RequireAuthRoute
                  component={<DiaryPage />}
                  redirectTo="/login"
                />
              }
            />
            <Route
              path="calculator"
              element={
                <RequireAuthRoute
                  component={<CalculatorPage />}
                  redirectTo="/login"
                />
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default AllRouts;
