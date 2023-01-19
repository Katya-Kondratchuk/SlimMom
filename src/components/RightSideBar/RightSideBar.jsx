import { List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import { useSelector } from 'react-redux';
import { SideBarRight } from './RightSideBar.styled';
import { v4 as uuidv4 } from 'uuid';
export function arrayRandElement(products = []) {
  const rand = Math.floor(Math.random() * products.length);
  return products[rand];
}
// backgroundImage:'url(../images/desktoprightSideBar.png)' backgroundColor:'#F0F1F3',
export function RightSideBar({ summaryDayInfo }) {
  const data = useSelector(state => state.daily);
  const products = data.notAllowedProducts;
  const backendDate = new Date().toISOString().split('T')[0];
  const todaysData = data?.summaries?.find(({ date }) => date === backendDate);
  console.log(summaryDayInfo);
  console.log(todaysData);
  // const id = uuidv4();
  const {
    kcalConsumed = 0,
    kcalLeft = 0,
    percentsOfDailyRate = 0,
    dailyRate = 0,
    date = 0,
  } = summaryDayInfo || todaysData || {};

  // Получаем случайный ключ массива
  // const rand = () => Math.floor(Math.random() * products.length);
  // console.log(products[rand]);

  return (
    <>
      <SideBarRight>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          subheader={<ListSubheader>Summary for {date}</ListSubheader>}
        >
          <ListItem disableGutters>
            <ListItemText primary={`Left ${kcalLeft}`} />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary={`Consumed ${kcalConsumed}`} />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary={`Daily rate ${dailyRate}`} />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary={`n% of normal ${percentsOfDailyRate}`} />
          </ListItem>
        </List>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          subheader={<ListSubheader>`Food not recommended`</ListSubheader>}
        >
          <ListItem disableGutters key={uuidv4()}>
            <ListItemText primary={`${arrayRandElement(products) || ''}`} />
          </ListItem>
          <ListItem disableGutters key={uuidv4()}>
            <ListItemText primary={`${arrayRandElement(products) || ''}`} />
          </ListItem>
          <ListItem disableGutters key={uuidv4()}>
            <ListItemText primary={`${arrayRandElement(products) || ''}`} />
          </ListItem>
          <ListItem disableGutters key={uuidv4()}>
            <ListItemText primary={`${arrayRandElement(products) || ''}`} />
          </ListItem>
        </List>
      </SideBarRight>
    </>
  );
}
