import * as React from 'react';
import InputText from "@Components/InputText";

import styled from 'styled-components'
import Button from "@Components/Button";


interface IAddTodo {
  onSubmit: any;
  onChange: any;
  value: string;
}

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
`;


const AddTodo = ({ onSubmit, onChange, value }: IAddTodo) => {

  return (
    <form onSubmit={onSubmit}>
      <FlexContainer>
        <InputText name={'addTodo'} onChange={onChange} value={value} />
        <Button type={'submit'} label={'Add'} />
      </FlexContainer>
    </form>
  );

};

export default AddTodo;
