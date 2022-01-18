import styled from "styled-components";
export const ButtonDel = styled.button`
  background-color: gray;
  color: white;
  font-size: 0.9em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid lightgray;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    color: white;
    border: 3px solid gray;
    background-color: palevioletred;
  }
`;
