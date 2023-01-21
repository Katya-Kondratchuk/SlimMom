// import React from 'react';
import Modal from '@mui/material/Modal';
import {
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { BoxStyled } from './ModalWindow.styled';
import { postDailyRate } from 'services/api/base_api';
import { useEffect } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';
import { ColorButton } from '../Main/Main.styled';
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Box } from '@mui/system';
import { arrayRandElement } from 'components/RightSideBar/RightSideBar';
import { ListStyled } from '../DairyProductList/DairyProductList.styled';
import Filter from './Filter';
import LoadingSpiner from '../AuthForm/LoadingSpiner/LoadingSpiner';
import { useTheme } from '@mui/material/styles';
const ModalWindow = ({ values, open, onClose, setOpen }) => {
  const [data, setData] = useState({});
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const fobidenPropucts = data.notAllowedProducts;
  const [loading, setLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const filterData = (query, fobidenPropucts) => {
    if (!query) {
      return fobidenPropucts;
    } else {
      return fobidenPropucts.filter(d =>
        d.toLowerCase().includes(query.trim())
      );
    }
  };

  const dataFiltered = filterData(searchQuery, fobidenPropucts);

  Object.keys(values).forEach((key, index) => {
    if (typeof values[key] === 'string') values[key] = Number(values[key]);
  });

  useEffect(() => {
    setLoading(true);

    postDailyRate(values)
      .then(res => setData(res))
      .finally(() => setLoading(false));
    console.log(postDailyRate(values));
  }, [values]);

  const handleCloseBtn = () => setOpen(!open);

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop={mobile ? true : false}
      >
        <BoxStyled>
          <IconButton
            onClick={handleCloseBtn}
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              display: { xs: 'none', md: 'block' },
            }}
          >
            <ClearIcon />
          </IconButton>

          <Box
            component="div"
            sx={{
              backgroundColor: '#E0E0E0',
              width: '100vw',
              hight: '40px',
              position: 'absolute',
              zIndex: 2,
              top: '-40px',
              left: 0,
              display: { xs: 'block', md: 'none' },
            }}
          >
            <IconButton onClick={handleCloseBtn} sx={{ ml: '20px' }}>
              <KeyboardReturnIcon />
            </IconButton>
          </Box>
          <Typography
            id="modal-modal-title"
            variant="h2"
            component="span"
            sx={{
              m: { xs: '20px auto 42px auto', md: '24px auto 20px auto' },
              textAlign: { xs: 'start', md: 'center' },
              fontSize: { xs: '18px', md: '36px' },
              maxWidth: { xs: '280px', md: '508px' },
              lineHeight: '1.4',
            }}
          >
            Your recommended daily calorie intake is
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="h3"
            component="p"
            sx={{
              mb: '30px',
            }}
          >
            {loading ? (
              <LoadingSpiner color="#264061" />
            ) : (
              Math.ceil(data.dailyRate, 1) + ' kcal'
            )}
          </Typography>
          <Divider
            variant="middle"
            sx={{
              maxWidth: '280px',
              m: '0 auto',
            }}
          />
          <Box
            component="div"
            sx={{
              maxWidth: '380px',
              m: '0 auto',
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h4"
              sx={{
                m: { xs: '20px auto', md: '12px auto 20px auto' },
                textAlign: 'center',
              }}
            >
              Food you should not eat
            </Typography>
            <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ListStyled
              sx={{
                height: '140px',
                marginBottom: '30px',
                marginTop: '10px',
                marginLeft: '8px',
                maxWidth: '100%',
                '& .MuiListItem-root': {
                  padding: 0,
                },
                '&.MuiList-root': {
                  marginTop: 0,
                },
              }}
            >
              {dataFiltered?.map(product => (
                <ListItem disableGutters key={product}>
                  <ListItemText
                    primary={
                      product
                        ? product
                        : `${arrayRandElement(fobidenPropucts) || ''}`
                    }
                  />
                </ListItem>
              ))}
            </ListStyled>
          </Box>
          <Link
            component="button"
            style={{
              margin: '0 auto',
              textDecoration: 'none',
            }}
            to={isLoggedIn ? '/diary' : '/registration'}
            onClick={onClose}
          >
            <ColorButton
              sx={{
                m: '0 auto',
              }}
            >
              Start losing weight
            </ColorButton>
          </Link>
        </BoxStyled>
      </Modal>
    </>
  );
};

export default ModalWindow;
