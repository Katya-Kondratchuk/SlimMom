import { Button, Divider, Stack } from '@mui/material';
import LoadingSpiner from 'components/AuthForm/LoadingSpiner';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperation';
import {
  selectAuthLoading,
  selectAuthUserName,
} from 'redux/auth/authSelectors';
import { normalizeName } from 'services/normalized';

const UserMenu = ({ styles }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectAuthLoading);
  const name = useSelector(selectAuthUserName);

  return (
    <Stack
      sx={{
        display: styles,
        backgroundColor: { xs: '#E0E0E0', md: 'inherit' },
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
        {loading ? <LoadingSpiner color="#000" size={9} /> : 'Exit'}
      </Button>
    </Stack>
  );
};

export default UserMenu;
