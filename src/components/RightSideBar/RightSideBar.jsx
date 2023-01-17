import { List, ListItem, ListItemText, ListSubheader } from '@mui/material';

export default function RightSideBar({ respons, data, products }) {
  return (
    <>
      <List
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
      </List>
    </>
  );
}
