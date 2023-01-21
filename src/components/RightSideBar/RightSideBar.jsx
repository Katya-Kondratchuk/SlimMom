import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import UserMenu from 'components/Header/UserMenu';
import { SideBarRight } from './RightSideBar.styled';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors';
import { ListStyled } from 'components/Dairy/DairyProductList/DairyProductList.styled';

export function arrayRandElement(products = []) {
  const rand = Math.floor(Math.random() * products.length);
  return products[rand];
}
export function RightSideBar({ summaryDayInfo }) {
  const data = useSelector(state => state.daily);
  const backendDate = new Date().toISOString().split('T')[0];
  const todaysData = data?.summaries?.find(({ date }) => date === backendDate);

  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  // const [searchQuery, setSearchQuery] = useState('');
  // const filterData = (query, fobidenPropucts) => {
  //   if (!query) {
  //     return fobidenPropucts;
  //   } else {
  //     return fobidenPropucts.filter(d =>
  //       d.toLowerCase().includes(query.trim())
  //     );
  //   }
  // };
  // const dataFiltered = filterData(searchQuery, fobidenPropucts);
  const {
    kcalConsumed = 0,
    kcalLeft = 0,
    percentsOfDailyRate = 0,
    dailyRate = 0,
    date = backendDate,

    // id = 0,
  } = summaryDayInfo || todaysData || {};
  return (
    <SideBarRight styled={{ marginTop: '292px' }}>
      {isLoggedIn && (
        <UserMenu styles={{ xs: 'none', md: 'none', lg: 'flex' }} />
      )}
      <Stack direction={{ xs: 'column', md: 'row', lg: 'column' }}>
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h4"
          sx={{
            m: {
              xs: '20px auto',
              md: '12px auto 20px auto',
              lg: '149px 123px 36px 94px',
            },
          }}
        >
          Summary for {date}
        </Typography>
        <List
          sx={{
            width: '100%',
            m: {
              xs: '0 auto',
              md: 'auto 79px auto 32px',
              lg: '0 123px 60px 94px',
            },
            maxWidth: { xs: '280px', md: '288px' },
            fontWeight: '700',
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
                kcalLeft || data.dailyRate - kcalConsumed || 0 + '00 kcal'
              }`}
            />
          </ListItem>
          <ListItem
            disableGutters
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <ListItemText primary="Consumed" />
            <ListItemText
              sx={{ textAlign: 'end' }}
              primary={`${kcalConsumed || '000 kcal'}`}
            />
          </ListItem>
          <ListItem
            disableGutters
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <ListItemText primary="Daily rate" />
            <ListItemText
              sx={{ textAlign: 'end' }}
              primary={` ${dailyRate || data.dailyRate || 0 + '00 kcal'}`}
            />
          </ListItem>
          <ListItem
            sx={{ display: 'flex', justifyContent: 'space-between' }}
            disableGutters
          >
            <ListItemText primary="n% of normal" />
            <ListItemText
              sx={{ textAlign: 'end' }}
              primary={`${percentsOfDailyRate.toFixed(0) + '%' || '000kcal'}`}
            />
          </ListItem>
        </List>
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h4"
          sx={{
            m: { xs: '20px auto', md: '12px auto 20px auto' },
            fontWeight: '700',
          }}
        >
          Food you should not eat
        </Typography>
        {/* <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
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
          {/* {dataFiltered?.map(product => (
              <ListItem disableGutters key={product}>
                <ListItemText
                  primary={
                    product
                      ? product
                      : `${arrayRandElement(fobidenPropucts) || ''}`
                  }
                />
              </ListItem>
            ))} */}
        </ListStyled>
      </Stack>
    </SideBarRight>
  );
}
