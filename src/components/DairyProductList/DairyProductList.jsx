import DairyProdactItem from 'components/DairyProdactItem/DairyProdactItem';
import { ListStyled } from './DairyProductList.styled';
// import PropTypes from 'prop-types';

export default function DairyProductList({ poducts, onDeleteProduct, dayId }) {
  return (
    <ListStyled>
      {poducts.map(({ id, weight, title, kcal }) => {
        return (
          <DairyProdactItem
            key={id}
            name={title}
            grams={weight}
            kcal={kcal.toFixed(0)}
            deleteProduct={event =>
              onDeleteProduct({ dayId: dayId, eatenProductId: id })
            }
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
