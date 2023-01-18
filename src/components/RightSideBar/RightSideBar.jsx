// import { List, ListItem, ListItemText, ListSubheader } from '@mui/material';

export default function RightSideBar({ respons, data, products }) {
  return (
    <>
    <div style = {{backgroundColor:'grey', height:'850px', width:'517px',display:'grid'}}>
 <table style={{margin:' 292px auto 60px', grid:'20px'}}>
  <tr>
    <th>Summary from...</th>
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
 <table style={{margin:'auto ', grid:'20px'}}>
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
</table>

<ul style ={{listStyle:"none"}}>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
      
    </div>
      {/* <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        subheader={<ListSubheader>`Summary for ${data}`</ListSubheader>}
      >
        <ListItem disableGutters>
          <ListItemText primary={`Left ${respons.left}`} />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText primary={`Consumed ${respons.consumed}`} />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText primary={`Daily rate ${respons.rate}`} />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText primary={`n% of normal ${respons.normal}`} />
        </ListItem>
      </List>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        subheader={<ListSubheader>`Food not recommended`</ListSubheader>}
      >
        {products.map(product => (
          <ListItem disableGutters>
            <ListItemText primary={`${product}`} />
          </ListItem>
        ))}
      </List> */}
    </>
  );
}
