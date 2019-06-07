import { put, takeEvery } from 'redux-saga/effects'
import todo from '../modules/todo/todo';
import axios from "axios";

export function* todoSaga() {
  console.log('coucou');
  const { actions } = todo;
  yield takeEvery(actions.addTodo, postTodo);
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
