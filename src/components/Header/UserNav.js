import { MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
// import { toast } from 'react-toastify';
// import { useSelector } from 'react-redux';
// import { selectAuthUserData } from 'redux/auth/authSelectors';
import { NavLinkMenu } from './AuthNav.styled';

const UserNav = ({ handleClose }) => {
  const { t } = useTranslation();
  // const userData = useSelector(selectAuthUserData);

  // const isCalculator = () => {
  //  return toast.warning('Fill data in calculator', {
  //     position: toast.POSITION.TOP_CENTER,
  //     autoClose: 3000,
  //     theme: 'colored',
  //     toastId: 'no',
  //     pauseOnHover: false,
  //   });
  //   // return '/calculator';
  // };
  // console.log(userData?.dailyRate === 0 && userData?.dailyRate === undefined);

  return (
    <>
      <MenuItem
        sx={{
          mr: { xs: 0, lg: '24px' },
          p: 0,
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: 1.2,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        <NavLinkMenu
          style={{
            textDecoration: 'none',
          }}
          to={
            // userData?.dailyRate === 0 && userData?.dailyRate === undefined
            //   ?
            '/diary'
            // :
            // '/calculator'
          }
          onClick={handleClose}
        >
          {t('navigate.diary')}
        </NavLinkMenu>
      </MenuItem>
      <MenuItem
        sx={{
          mr: 0,
          p: 0,
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: 1.2,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        <NavLinkMenu
          style={{
            textDecoration: 'none',
          }}
          to="/calculator"
          onClick={handleClose}
        >
          {t('navigate.calc')}
        </NavLinkMenu>
      </MenuItem>
    </>
  );
};

export default UserNav;
