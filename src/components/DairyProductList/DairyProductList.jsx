// import DairyProdactItem from 'components/DairyProdactItem/DairyProdactItem';
// import PropTypes from 'prop-types';

export default function DairyProductList({ products, onDeleteContact }) {
  return (
    <ul>
      {/* {products.map(({ id, name, enterGrams, enterKcal }) => {
        return (
          <DairyProdactItem
            key={id}
            name={name}
            grams={enterGrams}
            kcal={enterKcal}
            deleteContact={event => onDeleteContact(id, event)}
          />
        );
      })} */}
    </ul>
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
