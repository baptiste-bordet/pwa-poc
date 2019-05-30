import { createAction, createReducer } from "redux-act";
import { MODULE_NAME, TODO as T, TODO_STATUS } from "./constant";
import { TodoState } from "./model";
import produce from "immer";
import { set } from 'lodash';
import selector from './selector';


const initState = {
  [MODULE_NAME]: {
    todos: [],
  }
};

// ACTIONS
const addTodo = createAction(`${MODULE_NAME}/ADD_TODO`);


// REDUCERS
const _addTodo = (state: TodoState, payload: any) =>
  produce(state, draft => {
    const newItem = {
      value: '',
      status: TODO_STATUS.TODO
    };
    // return set(draft, [MODULE_NAME, 'todos'], state[MODULE_NAME].todos.push(newItem));
    draft[MODULE_NAME][T.todos].push(newItem);
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
