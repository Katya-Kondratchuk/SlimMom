// import React from 'react';
import Modal from '@mui/material/Modal';
import { Divider, IconButton, ListItemText, Typography } from '@mui/material';
import { BoxStyled, StyledItem } from './ModalWindow.styled';
import { postDailyRate } from 'services/api/base_api';
import { useEffect } from 'react';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';
import { ColorButton } from '../Main/Main.styled';

import ClearIcon from '@mui/icons-material/Clear';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Box } from '@mui/system';

const ModalWindow = ({ values, open, onClose, setOpen }) => {
  const [data, setData] = useState({});
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  Object.keys(values).forEach((key, index) => {
    if (typeof values[key] === 'string') values[key] = Number(values[key]);
  });

  useEffect(() => {
    postDailyRate(values).then(res => setData(res));
  }, [values]);
  const handleCloseBtn = () => setOpen(!open);
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
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
        <IconButton
          onClick={handleCloseBtn}
          sx={{
            position: 'absolute',
            top: '-40px',
            left: 20,
            display: { xs: 'block', md: 'none' },
          }}
        >
          <KeyboardReturnIcon />
        </IconButton>

        <Typography
          id="modal-modal-title"
          variant="h2"
          component="span"
          sx={{
            m: { xs: '0 auto 42px auto', md: '64px auto 20px auto' },
            textAlign: { xs: 'start', md: 'center' },
            fontSize: { xs: '18px', md: '36px' },
            maxWidth: { xs: '280px', md: '508px' },
          }}
        >
          Your recommended daily calorie intake is
        </Typography>
        <Typography id="modal-modal-title" variant="h3" component="p">
          {data.dailyRate} ккал.
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
            maxWidth: '330px',
            m: '0 auto',
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h4"
            sx={{
              m: { xs: '20px auto', md: '12px auto 20px auto' },
            }}
          >
            Foods you should not eat
          </Typography>
          <ol
            type="1"
            style={{
              minHeight: '112px',
              marginBottom: '40px',
              padding: '0',
            }}
          >
            {data?.notAllowedProducts?.slice(0, 4).map(item => (
              <StyledItem
                component="li"
                disablePadding
                key={uuidv4()}
                style={{
                  marginBotton: { xs: '14px' },
                }}
              >
                <ListItemText
                  primary={item}
                  sx={{
                    color: '#9B9FAA',
                  }}
                />
              </StyledItem>
            ))}
          </ol>
          {/* <List
            component="ol"
            sx={{
              minHeight: '112px',
              mb: '40px',
              p: '0',
            }}
          >
            {data?.notAllowedProducts?.slice(0, 4).map(item => (
              <ListItem
                disablePadding
                key={uuidv4()}
                sx={{
                  mb: { xs: '14px' },
                }}
              >
                <ListItemText
                  primary={item}
                  sx={{
                    color: '#9B9FAA',
                  }}
                />
              </ListItem>
            ))}
          </List> */}
        </Box>
        <Link
          component="button"
          style={{
            margin: '0 auto',
            textDecoration: 'none',
          }}
          to={isLoggedIn ? '/diary' : '/registration'}
          onClick={onClose}
          // underline="none"
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
  );
};

export default ModalWindow;
