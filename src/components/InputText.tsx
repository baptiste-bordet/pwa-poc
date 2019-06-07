import * as React from 'react';
import styled from 'styled-components'

interface IInputText {
  onChange: any;
  name: string;
  value: string;
}

const StyledInput = styled.input`
  padding: 10px;
  border: none;
  background-color: #2C3142;
  color: #FFFFFF;
  width: inherit;
  
  &:focus {
    outline-width: 0;
  }
`;

const InputText = ({ name, onChange, value }: IInputText) => {

  return (
    <StyledInput type={'text'} name={name} onChange={onChange} value={value} />
  );

};

export default InputText;
