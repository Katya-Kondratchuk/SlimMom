import { List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import { useSelector } from 'react-redux';
import { SideBarRight } from './RightSideBar.styled';
export function arrayRandElement(products = []) {
  const rand = Math.floor(Math.random() * products.length);
  return products[rand];
}
export function RightSideBar({ summaryDayInfo }) {
  const data = useSelector(state => state.daily);
  const products = data.notAllowedProducts;
  const backendDate = new Date().toISOString().split('T')[0];
  const todaysData = data?.summaries?.find(({ date }) => date === backendDate);
  console.log(products);
  console.log(data);
  const {
    kcalConsumed = 0,
    kcalLeft = 0,
    percentsOfDailyRate = 0,
    dailyRate = 0,
    date = backendDate,
    id = 0,
  } = summaryDayInfo || todaysData || {};

  return (
    <>
      <SideBarRight>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          subheader={<ListSubheader>Summary for {date}</ListSubheader>}
        >
          <ListItem
            disableGutters
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <ListItemText primary="Left" />
            <ListItemText
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
              sx={{ textAlight: 'end' }}
              primary={`${kcalConsumed || '000 kcal'}`}
            />
          </ListItem>
          <ListItem
            disableGutters
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <ListItemText primary="Daily rate" />
            <ListItemText
              sx={{ textAlight: 'end' }}
              primary={` ${dailyRate || data.dailyRate || 0 + '00 kcal'}`}
            />
          </ListItem>
          <ListItem
            sx={{ display: 'flex', justifyContent: 'space-between' }}
            disableGutters
          >
            <ListItemText primary="n% of normal" />
            <ListItemText
              sx={{ textAlight: 'end' }}
              primary={`${percentsOfDailyRate.toFixed(0) + '%' || '000kcal'}`}
            />
          </ListItem>
        </List>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          subheader={<ListSubheader> Food not recommended</ListSubheader>}
        >
          {/* {products.map((item, id) => (
              <ListItem disableGutters key={id}>
            <ListItemText primary={`${arrayRandElement(products) || ''}`} />
          </ListItem>
        ))} */}
          {/* <ListItem disableGutters>
            <ListItemText primary={`${arrayRandElement(products) || ''}`} />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary={`${arrayRandElement(products) || ''}`} />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary={`${arrayRandElement(products) || ''}`} />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary={`${arrayRandElement(products) || ''}`} />
          </ListItem> */}
        </List>
      </SideBarRight>
    </>
  );
}
