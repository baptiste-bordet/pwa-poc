import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import todo from "../modules/todo/todo";

// const initStates = {...todo.initState} as any;
// const reducers = combineReducers({todo: todo.reducer});

const store = createStore(todo.reducer, composeWithDevTools());

export default store;
