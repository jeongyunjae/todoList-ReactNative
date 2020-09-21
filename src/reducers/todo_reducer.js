import {
  LOAD_TODO_SUCCESS,
  LOAD_TODO_FAILURE,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_FAILURE,
} from '../actions/types';

const initialState = [];

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TODO_SUCCESS:
      return action.data;
    case LOAD_TODO_FAILURE:
      return state;
    case ADD_TODO_SUCCESS:
      return state.concat(action.data);
    case ADD_TODO_FAILURE:
      return state;
    case EDIT_TODO_SUCCESS:
      let myIndex = state.findIndex(
        (element) => element.id === action.payload.id,
      );
      return [
        ...state.slice(0, myIndex),
        {...state[myIndex], content: action.payload.content},
        ...state.slice(myIndex + 1),
      ];
    case EDIT_TODO_FAILURE:
      return state;
    case DELETE_TODO_SUCCESS:
      return state.filter((todoData) => todoData.id !== action.payload);
    case DELETE_TODO_FAILURE:
      return state;

    default:
      return state;
  }
}
