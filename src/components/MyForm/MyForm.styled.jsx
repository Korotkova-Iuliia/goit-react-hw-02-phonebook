import styled from "styled-components";
export const Button = styled.button`
  background-color: gray;
  color: white;
  font-size: 0.9em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid lightgray;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    /* transform: scale(1.05); */
    color: white;
    border: 3px solid gray;
    background-color: palevioletred;
  }
`;
export const Form = styled.form`
  background-color: pink;
  width: 25em;
  padding: 1em 1em;
  /* display: flex; */
  flex-direction: column;
  align-items: center;
`;

// export const Input = styled.input`
//   width: 300px;
//   height: 35px;
//   border: 1px solid #ccc;
//   background-color: #fff;
// `;
export const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "0.8em",
}))`
  color: palevioletred;
  /* background-color: lightpink; */
  font-size: 1em;
  border: 2px solid #ccc;
  border-radius: 3px;

  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;
export const Label = styled.label`
  font-family: "Raleway", sans-serif;
  color: ${(props) => props.color || "palevioletred"};
`;
// '#4d4d4d';
