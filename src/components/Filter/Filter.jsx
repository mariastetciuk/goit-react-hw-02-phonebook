import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ hendleFilterChange }) {
  return (
    <label className={css.label} htmlFor="">
      Find contacts by me
      <input
        className={css.label}
        type="text"
        name="filter"
        onChange={hendleFilterChange}
      />
    </label>
  );
}

Filter.propTypes = {
  hendleFilterChange: PropTypes.func.isRequired,
};
