import { createAction, createReducer } from "redux-act";
import { MODULE_NAME, TODO as T } from "./constant";
import { TodoItem, TodoState } from "./model";
import produce from "immer";
import { set } from 'lodash';
import selector from './selector';


const initState = {
  todos: [],
};

// ACTIONS
const setTodos = createAction<TodoItem[]>(`${MODULE_NAME}/SET_TODOS`);
const addTodo = createAction<TodoItem>(`${MODULE_NAME}/ADD_TODO`);
const storeTodo = createAction<TodoItem>(`${MODULE_NAME}/STORE_TODO`);


// REDUCERS
const _setTodos = (state: TodoState, payload: TodoItem[]) =>
  produce(state, draft => {
    draft[T.todos] = payload;
  });
const _storeTodo = (state: TodoState, payload: TodoItem) =>
  produce(state, draft => {
    draft[T.todos].unshift(payload);
  });


const reducer = createReducer({
  [setTodos.toString()]: (state: TodoState, payload: any) =>
    _setTodos(state, payload),
  [storeTodo.toString()]: (state: TodoState, payload: any) =>
    _storeTodo(state, payload)
}, initState);

export default {
  initState,
  reducer,
  selector,
  actions: {
    setTodos,
    storeTodo,
    addTodo,
  }
}
