import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { todoSaga } from '../saga/todoSaga';

import todo from "../modules/todo/todo";
import form from "../modules/form/form";

import { MODULE_NAME as TODO_NAME } from "../modules/todo/constant";
import { MODULE_NAME as FORM_NAME } from "../modules/form/constant";

// const initStates = {...todo.initState} as any;
const reducers = combineReducers({
  [TODO_NAME]: todo.reducer,
  [FORM_NAME]: form.reducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(todoSaga);

export default store;
