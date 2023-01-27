import { React } from "react";
import styled from "styled-components";
const BoardInput = ({ onChange, value, label }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputText type="text" onChange={onChange} value={value} />
    </Container>
  );
};

const Container = styled.div`
  margin: 2rem 0;
`;
const Label = styled.label`
  font-size: 2rem;
`;
const InputText = styled.input`
  width: 35rem;
`;

export default BoardInput;
