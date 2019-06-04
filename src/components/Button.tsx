import * as React from 'react';
import styled from 'styled-components'

interface IButton {
  label: string;
  type: string;
}

const StyledButton = styled.button`
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
`;

const Button = ({ label, type }: IButton) => {

  return (
    <StyledButton type={type} >{label}</StyledButton>
  );

};

export default Button;
