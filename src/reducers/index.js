import { combineReducers } from 'redux';
import todoReducer from './todo';
import { FETCHING, FETCH_ERROR } from '../actions/index';

const defaultState = {
  isFetching: false,
};
const generalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, isFetching: true };
    case FETCH_ERROR:
      return { ...state, error: true, code: action.code, message: action.message };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  generalReducer,
  todoReducer,
});

export default rootReducer;
