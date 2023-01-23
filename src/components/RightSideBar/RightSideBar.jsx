import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import UserMenu from 'components/Header/UserMenu';
import { SideBarRight, WrapperFilter } from './RightSideBar.styled';
import {
  selectAuthIsLoggedIn,
  selectAuthUserData,
} from '../../redux/auth/authSelectors';
import { ListStyled } from 'components/Dairy/DairyProductList/DairyProductList.styled';
import { useState } from 'react';
import Filter from 'components/Modal/Filter';
import { useRef } from 'react';

export function arrayRandElement(products = []) {
  const rand = Math.floor(Math.random() * products.length);
  return products[rand];
}
export function RightSideBar({ summaryDayInfo }) {
  const data = useSelector(state => state.daily);
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const userData = useSelector(selectAuthUserData);
  const [searchQuery, setSearchQuery] = useState('');

  const backendDate = new Date().toISOString().split('T')[0];
  const todaysData = data?.summaries?.find(({ date }) => date === backendDate);
  const fobidenPropucts =
    userData?.notAllowedProducts || data.notAllowedProducts;

  const overWeigth = useRef();

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

  const {
    kcalConsumed = 0,
    kcalLeft = 0,
    percentsOfDailyRate = 0,
    dailyRate = 0,
    date = backendDate,
  } = summaryDayInfo || todaysData || {};

  const handleOverWeigth = () => {
    if (+percentsOfDailyRate.toFixed(0) > 100) {
      overWeigth?.current?.classList.add('chahgeColor');
    } else {
      overWeigth?.current?.classList.remove('chahgeColor');
    }
  };
  handleOverWeigth();

  return (
    <SideBarRight>
      {isLoggedIn && (
        <Box sx={{ marginTop: { xs: '0px', lg: '122px' }, mr: '16px' }}>
          <UserMenu styles={{ xs: 'none', md: 'none', lg: 'flex' }} />
        </Box>
      )}
      <Stack
        direction={{ xs: 'column', md: 'row', lg: 'column' }}
        sx={{
          gap: { xs: '40px', md: '60px', lg: '0' },
          justifyContent: { md: 'center' },
        }}
      >
        <Box>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h4"
            sx={{
              m: {
                xs: '0 auto',
                md: '0px auto 20px auto',
                lg: '100px auto 36px auto',
              },
              maxWidth: { xs: '280px', md: '380px' },
              fontWeight: '16px',
            }}
          >
            Summary for {date}
          </Typography>
          <List
            sx={{
              m: {
                xs: '0 auto',
                md: '60px auto 0px auto',
                lg: '0 auto 30px auto',
              },
              width: { xs: '280px', md: '300px', lg: '380px' },
              fontWeight: '700',
              '& .MuiListItem-root': {
                py: { xs: '6px', md: '8px', lg: '3px' },
              },
            }}
          >
            <ListItem
              disableGutters
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <ListItemText primary="Left" />
              <ListItemText
                sx={{ textAlign: 'end' }}
                primary={` ${
                  kcalLeft || Math.ceil(dailyRate - kcalConsumed) || 0 + '00'
                } kcal`}
              />
            </ListItem>
            <ListItem
              disableGutters
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <ListItemText primary="Consumed" />
              <ListItemText
                sx={{ textAlign: 'end' }}
                primary={`${Math.ceil(kcalConsumed, 1) || '000'} kcal`}
              />
            </ListItem>
            <ListItem
              disableGutters
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <ListItemText primary="Daily rate" />
              <ListItemText
                sx={{ textAlign: 'end' }}
                primary={` ${dailyRate || data.dailyRate || 0 + '00'} kcal`}
              />
            </ListItem>
            <ListItem
              ref={overWeigth}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                '&.chahgeColor': { color: 'red' },
              }}
              disableGutters
            >
              <ListItemText primary="n% of normal" />
              <ListItemText
                sx={{ textAlign: 'end' }}
                primary={`${
                  +percentsOfDailyRate.toFixed(0) > 100
                    ? +percentsOfDailyRate.toFixed(0) - 100 + ' % overweidth!'
                    : +percentsOfDailyRate.toFixed(0) + '%' && '000'
                } kcal`}
              />
            </ListItem>
          </List>
        </Box>
        <Box>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h4"
            sx={{
              m: {
                xs: '20px auto',
                md: '0px auto 20px auto',
              },
              fontWeight: '700',
              maxWidth: { xs: '280px', lg: '380px' },
            }}
          >
            Food you should not eat
          </Typography>
          {data && (
            <WrapperFilter>
              {' '}
              <Filter
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />{' '}
            </WrapperFilter>
          )}
          {data && (
            <ListStyled
              className="List"
              sx={{
                m: {
                  xs: '0 auto',
                  md: '0 auto',
                  lg: '0 auto',
                },
                maxWidth: { xs: '280px', md: '300px', lg: '380px' },
                fontWeight: '700',
                '& .MuiListItem-root': {
                  padding: { xs: '6px', md: '4px', lg: '6px' },
                },
                '&.MuiList-root.List': {
                  marginTop: '15px',
                  maxHeight: '150px',
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
          )}
        </Box>
      </Stack>
    </SideBarRight>
  );
}
