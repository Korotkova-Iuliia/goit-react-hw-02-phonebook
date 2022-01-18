import styled from "styled-components";
export const ButtonDel = styled.button`
  align-items: right;
  background-color: gray;
  color: white;
  font-size: 0.9em;
  margin: 1em;
  padding: 0.25em 1em;
  margin: 0;
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
export const Text = styled.p`
  font-size: 1.2em;
`;
export const SpanText = styled.span`
  color: palevioletred;
`;
export const ContactsHolder = styled.div`
  display: flex;
  margin-top: 1em;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;
