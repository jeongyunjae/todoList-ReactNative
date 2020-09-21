import {
  LOAD_TODO,
  LOAD_TODO_SUCCESS,
  LOAD_TODO_FAILURE,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  EDIT_TODO,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_FAILURE,
} from './types';

export function loadTodo() {
  return {
    type: LOAD_TODO,
  };
}

export function loadTodoSuccess(data) {
  return {
    type: LOAD_TODO_SUCCESS,
    data,
  };
}

export function loadTodoFailure() {
  return {
    type: LOAD_TODO_FAILURE,
  };
}

export function addTodo(data) {
  return {
    type: ADD_TODO,
    content: data,
  };
}

export function addTodoSuccess(data) {
  return {
    type: ADD_TODO_SUCCESS,
    data,
  };
}

export function addTodoFailure() {
  return {
    type: ADD_TODO_FAILURE,
  };
}

export function editTodo(body) {
  return {
    type: EDIT_TODO,
    id: body.id,
    content: body.content,
  };
}

export function editTodoSuccess(handOver) {
  return {
    type: EDIT_TODO_SUCCESS,
    payload: {
      id: handOver.id,
      content: handOver.content,
    },
  };
}

export function editTodoFailure() {
  return {
    type: EDIT_TODO_FAILURE,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  };
}

export function deleteTodoSuccess(id) {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: id,
  };
}

export function deleteTodoFailure() {
  return {
    type: DELETE_TODO_FAILURE,
  };
}
