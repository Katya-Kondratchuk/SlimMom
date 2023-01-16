import { Link, NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <Link to="/">Logo</Link>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/registration">Registration</NavLink>
    </>
  );
};

export default AuthNav;
