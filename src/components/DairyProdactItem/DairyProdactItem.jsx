import PropTypes from 'prop-types';

export default function DairyProdactItem({ name, grams, kcal, deleteProduct }) {
  return (
    <li>
      <p>{name}</p>
      <p> {grams} g</p>
      <p> {kcal} kcal</p>
      <button type="button" onClick={deleteProduct}>
        Delete
      </button>
    </li>
  );
}

DairyProdactItem.propTypes = {
  name: PropTypes.string.isRequired,
  grams: PropTypes.string.isRequired,
  kcal: PropTypes.string.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};
