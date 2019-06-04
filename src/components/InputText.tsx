import * as React from 'react';
import styled from 'styled-components'

interface IInputText {
  onChange: any;
  name: string;
  value: string;
}

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  width: inherit;
`;

const InputText = ({ name, onChange, value }: IInputText) => {

  return (
    <StyledInput type={'text'} name={name} onChange={onChange} value={value} />
  );

};

export default InputText;
