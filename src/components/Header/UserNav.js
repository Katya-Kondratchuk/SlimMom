import { NavLink } from 'react-router-dom';

const UserNav = () => {
  return (
    <>
      <NavLink to="/diary">Diary</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
    </>
  );
};

export default UserNav;
