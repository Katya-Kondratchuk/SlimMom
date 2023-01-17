import { Divider, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperation';
import { selectAuthUserName } from 'redux/auth/authSelectors';
import { normalizeName } from 'services/normalized';

const UserMenu = ({ styles }) => {
  const dispatch = useDispatch();
  const name = useSelector(selectAuthUserName);

  return (
    <Stack
      sx={{ display: styles }}
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      {name ? normalizeName(name) : 'User'}

      {/* <p>{name ? normalizeName(name) : 'User'}</p> */}
      <button onClick={() => dispatch(logoutUser())}>Exit</button>
    </Stack>
  );
};

export default UserMenu;
