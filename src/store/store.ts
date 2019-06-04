import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import todo from "../modules/todo/todo";
import form from "../modules/form/form";
import { MODULE_NAME as TODO_NAME } from "../modules/todo/constant";
import { MODULE_NAME as FORM_NAME } from "../modules/form/constant";

// const initStates = {...todo.initState} as any;
const reducers = combineReducers({
  [TODO_NAME]: todo.reducer,
  [FORM_NAME]: form.reducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
