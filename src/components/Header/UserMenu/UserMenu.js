import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperation';
import { selectAuthUserName } from 'redux/auth/authSelectors';
import { normalizeName } from 'services/normalized';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectAuthUserName);

  return (
    <div>
      <p>{name ? normalizeName(name) : 'User'}</p>
      <button onClick={() => dispatch(logoutUser())}>Exit</button>
    </div>
  );
};

export default UserMenu;
