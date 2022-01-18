import styled from "styled-components";
export const Button = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;

  &:hover {
    cursor: pointer;
    transform: scale(1.25);
    color: white;
    border: 2px solid white;
    background-color: gray;
    :nth-child(1) {
      color: green;
      border: 2px solid green;
    }
  }
`;
