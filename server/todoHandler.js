export const originTodos = [];

const getUniqueID = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const addTodo = todo => {
  if(!todo.id) {
    todo.id = getUniqueID();
    originTodos.unshift(todo);
  } else {
    const index = originTodos.findIndex(originTodo => originTodo.id === todo.id)
    originTodos[index].value = todo.value;
    originTodos[index].status = todo.status;
  }

  return originTodos;
};
