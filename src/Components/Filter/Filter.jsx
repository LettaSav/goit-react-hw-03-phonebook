import useStyles from './useStyle';

import PropTypes from 'prop-types';

const Filter = ({ onChange, value }) => {
  const classes = useStyles();
  return (
    <>
      <label className={classes.contacts_label}>Find contacts by name </label>
      <input
        className={classes.contacts_input}
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
