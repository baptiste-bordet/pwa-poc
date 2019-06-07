import { put, takeEvery } from 'redux-saga/effects'
import todo from '../modules/todo/todo';
import axios from "axios";

export function* todoSaga() {
  const { actions } = todo;
  yield takeEvery(actions.addTodo, postTodo);
  yield takeEvery(actions.synchronize, synchronize);
}

function* postTodo(action) {
  const { payload } = action;
  const { actions } = todo;

  try {
    const response = yield axios.post('http://localhost:3000/todo', payload);
    yield put(actions.setTodos(response.data));
  } catch (error) {
    yield put(actions.storeTodo(payload));
  }
}

function* synchronize(action) {
  const { payload } = action;
  const { actions } = todo;

  try {
    const response = yield axios.post('http://localhost:3000/todos', payload);
    yield put(actions.setTodos(response.data));
    console.log('synchronized !');
  } catch (error) {
    console.log('not synchronized !');
  }
}
