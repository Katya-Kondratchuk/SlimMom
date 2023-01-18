import { Button, Divider, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperation';
import { selectAuthUserName } from 'redux/auth/authSelectors';
import { normalizeName } from 'services/normalized';

const UserMenu = ({ styles }) => {
  const dispatch = useDispatch();
  const name = useSelector(selectAuthUserName);

  return (
    <Stack
      sx={{
        display: styles,
        backgroundColor: '#E0E0E0',
        justifyContent: 'flex-end',
      }}
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      <p
        style={{
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: 1.2,
          textAlign: 'right',
          letterSpacing: '0.04em',
          color: '#212121',
        }}
      >
        {name ? normalizeName(name) : 'User'}
      </p>
      <Button
        sx={{
          border: 'none',
          textTransform: 'capitalize',
          marginLeft: 0,
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: 1.2,
          textAlign: 'right',
          letterSpacing: '0.04em',
          color: '#9B9FAA',
        }}
        onClick={() => dispatch(logoutUser())}
      >
        Exit
      </Button>
    </Stack>
  );
};

export default UserMenu;
