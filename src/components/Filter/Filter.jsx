import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;
const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Фильтр по имени
      <Input type="text" value={filter} onChange={onChange} />
    </label>
  );
};
export default Filter;
Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
