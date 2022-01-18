import styled from "styled-components";
export const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "text",
  color: "green",
  // or we can define dynamic ones
  size: props.size || "0.8em",
}))`
  color: palevioletred;

  font-size: 1em;
  border: 2px solid #ccc;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;
export const Label = styled.label`
  font-family: "Raleway", sans-serif;
  color: ${(props) => props.color || "palevioletred"};
`;
