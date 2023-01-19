import { List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import { SideBarRight } from './RightSideBar.styled';

// backgroundImage:'url(../images/desktoprightSideBar.png)' backgroundColor:'#F0F1F3',
export function RightSideBar({ summaryDayInfo }) {
  const { kcalConsumed, kcalLeft, percentsOfDailyRate, dailyRate, date } =
    summaryDayInfo;
  return (
    <>
      <SideBarRight>
        {/* <table style={{margin:' 292px auto 60px', grid:'20px'}}>
  <tr>
    <th sx ={{mb:'20px'}}>Summary from...</th>
  </tr>
  <tr>
    <td>Left</td>
    <td>backend</td>
  </tr>
  <tr>
    <td>Consumed</td>

    <td>backend</td>
  </tr>
  <tr>
    <td>Daily rate
</td>
    <td>backend</td>
  </tr>
  <tr>
    <td>n% of normal</td>
    <td>backend</td>
  </tr>
</table>
 <table style={{margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'}}>
  <tr>
    <th>Food not recommended</th>
  </tr>
  <tr>
    <td>backend</td>
  </tr>
  <tr>
    <td>backend</td>
  </tr>
  <tr>
    <td>backend</td>
  </tr>
  <tr>
    <td>backend</td>
  </tr>
</table> */}
        {/* 
<ul style ={{listStyle:"none"}}>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul> */}

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
          {/* {products.map(product => (
          <ListItem disableGutters>
            <ListItemText primary={`${product}`} />
          </ListItem>
        ))} */}
        </List>
      </SideBarRight>
    </>
  );
}
