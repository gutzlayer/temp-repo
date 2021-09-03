import P from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      placeholder="Type your search"
      className="text-input"
      type="search"
      onChange={handleChange}
      value={searchValue}
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
