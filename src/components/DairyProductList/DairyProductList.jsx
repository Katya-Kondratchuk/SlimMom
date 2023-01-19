import DairyProdactItem from 'components/DairyProdactItem/DairyProdactItem';
import { ListStyled } from './DairyProductList.styled';
// import PropTypes from 'prop-types';

export default function DairyProductList({ poducts, onDeleteContact }) {
  return (
    <ListStyled>
      {poducts.map(({ id, weight, title, calories }) => {
        return (
          <DairyProdactItem
            key={id}
            name={title.ru}
            grams={weight}
            kcal={calories}
            deleteContact={event => onDeleteContact(id, event)}
          />
        );
      })}
    </ListStyled>
  );
}

// DairyProductList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
