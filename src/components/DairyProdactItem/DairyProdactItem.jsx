import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import PropTypes from 'prop-types';

export default function DairyProdactItem({ name, grams, kcal, deleteProduct }) {
  return (
    <>
      <ListItem>
        <ListItemText
          sx={{
            width: 240,
            mr: 4,
            borderBottom: '1px solid #80808038',
            flexGrow: 0,
          }}
          primary={name}
        />
        <ListItemText
          sx={{
            width: 107,
            ml: 2,
            textAlign: 'right',
            borderBottom: '1px solid #80808038',
            flexGrow: 0,
          }}
          primary={`${grams} g`}
        />
        <ListItemText
          sx={{
            width: 106,
            ml: 4,
            mr: 2,
            textAlign: 'right',
            borderBottom: '1px solid #80808038',
            flexGrow: 0,
          }}
          primary={`${kcal} kcal`}
        />
        <IconButton edge="end" aria-label="delete" onClick={deleteProduct}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </>
  );
}

// DairyProdactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   grams: PropTypes.string.isRequired,
//   kcal: PropTypes.string.isRequired,
//   deleteProduct: PropTypes.func.isRequired,
// };
