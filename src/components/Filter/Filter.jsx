import React from "react";
import PropTypes from "prop-types";
const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Фильтр по имени
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};
export default Filter;
Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
