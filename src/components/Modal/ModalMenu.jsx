import React from 'react';
import Modal from '@mui/material/Modal';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { BoxStyled } from './ModalWindow.styled';
import { postDailyRate } from 'services/api/base_api';
import { useEffect } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';

const ModalWindow = ({ values, open, onClose }) => {
  const [data, setData] = useState({});
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  const { height, age, currentWeight, desiredWeight, bloodType } = values;

  useEffect(() => {
    const value = {
      height: Number(height),
      age: Number(age),
      weight: Number(currentWeight),
      desiredWeight: Number(desiredWeight),
      bloodType: Number(bloodType),
    };

    postDailyRate(value).then(res => setData(res));
  }, [height, age, currentWeight, desiredWeight, bloodType]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyled>
        <Typography id="modal-modal-title" variant="h2" component="span">
          Your recommended daily calorie intake is
        </Typography>
        <Typography id="modal-modal-title" variant="h3" component="p">
          {data.dailyRate}
          {/* <Typography id="modal-modal-title" variant="subtitle1" component="p"> */}
          ккал
          {/* </Typography> */}
        </Typography>
        <Typography id="modal-modal-title" variant="h4" component="span">
          Foods you should not eat
          <List>
            {data?.notAllowedProducts?.slice(0, 4).map(item => (
              <ListItem disablePadding key={uuidv4()}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Typography>
        <Link to={isLoggedIn ? '/diary' : '/registration'} onClick={onClose}>
          Start losing weight
        </Link>
      </BoxStyled>
    </Modal>
  );
};

export default ModalWindow;
