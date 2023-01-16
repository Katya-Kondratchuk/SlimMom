import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/registration">Registration</NavLink>
    </>
  );
};

export default AuthNav;
