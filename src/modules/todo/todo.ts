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
const addTodo = createAction<TodoItem>(`${MODULE_NAME}/ADD_TODO`);


// REDUCERS
const _addTodo = (state: TodoState, payload: TodoItem) =>
  produce(state, draft => {
    draft[T.todos].unshift(payload);
  });


const reducer = createReducer({
  [addTodo.toString()]: (state: TodoState, payload: any) =>
    _addTodo(state, payload)
}, initState);

export default {
  initState,
  reducer,
  selector,
  actions: {
    addTodo
  }
}
