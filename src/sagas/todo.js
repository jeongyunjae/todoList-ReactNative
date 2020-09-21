import {all, takeLatest, takeEvery, put, spawn} from 'redux-saga/effects';
import {
  LOAD_TODO,
  LOAD_TODO_FAILURE,
  ADD_TODO,
  ADD_TODO_FAILURE,
  DELETE_TODO,
  DELETE_TODO_FAILURE,
  EDIT_TODO,
  EDIT_TODO_FAILURE,
} from '../actions/types';

import * as actions from '../actions/todo_actions';

import Axios from 'axios';

function* load() {
  try {
    const data = yield Axios.get('http://34.123.93.48:8000/todo/');
    yield put(actions.loadTodoSuccess(data.data));
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_TODO_FAILURE,
      error: err.response,
    });
  }
}

function* add(action) {
  try {
    const body = {
      content: action.content,
    };
    const {data} = yield Axios.post('http://34.123.93.48:8000/todo/', body);
    yield put(actions.addTodoSuccess(data));
  } catch (err) {
    console.error('test', err);
    yield put({
      type: ADD_TODO_FAILURE,
      error: err.response,
    });
  }
}

function* deleted(action) {
  try {
    yield Axios.delete(`http://34.123.93.48:8000/todo/${action.id}/`);
    yield put(actions.deleteTodoSuccess(action.id));
  } catch (err) {
    console.error(err);
    yield put({
      type: DELETE_TODO_FAILURE,
      error: err.response,
    });
  }
}

function* edit(action) {
  try {
    const body = {
      content: action.content,
    };
    const handOver = {
      id: action.id,
      content: action.content,
    };
    yield Axios.patch(`http://34.123.93.48:8000/todo/${action.id}/`, body);
    yield put(actions.editTodoSuccess(handOver));
  } catch (err) {
    console.error(err);
    yield put({
      type: EDIT_TODO_FAILURE,
      error: err.response,
    });
  }
}

function* watchLoad() {
  yield takeEvery(LOAD_TODO, load);
}

function* watchAdd() {
  yield takeLatest(ADD_TODO, add);
}

function* watchDelete() {
  yield takeLatest(DELETE_TODO, deleted);
}

function* watchEdit() {
  yield takeLatest(EDIT_TODO, edit);
}

export default function* todoSaga() {
  yield all([
    spawn(watchLoad),
    spawn(watchAdd),
    spawn(watchDelete),
    spawn(watchEdit),
  ]);
}
