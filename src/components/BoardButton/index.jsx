import React from "react";
import styled from "styled-components";
const BoardButton = ({ name, onClick }) => {
  return (
    <ButtonContainer>
      <Button onClick={onClick}>{name}</Button>
    </ButtonContainer>
  );
};
const ButtonContainer = styled.div``;
const Button = styled.button`
  padding: 0.8rem;
  border-radius: 1rem;
  background-color: pink;
  font-weight: bold;
  color: white;
`;
export default BoardButton;
