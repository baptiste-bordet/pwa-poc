import * as React from 'react';

interface IAddTodo {
  onSubmit: any;
  onChange: any;
  value: string;
}

const AddTodo = ({ onSubmit, onChange, value }: IAddTodo) => {

  return (
    <form onSubmit={onSubmit}>
      <input type={'text'} name={'addTodo'} onChange={onChange} value={value} />
      <button type={'submit'}>Add</button>
    </form>
  );

};

export default AddTodo;
