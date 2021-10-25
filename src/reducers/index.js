import { combineReducers } from "redux";
import todoReducer from "./todo";
import { FETCHING } from '../actions/index';


const defaultState = {
  isFetching: false
}
const generalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, isFetching: true}
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  generalReducer,
  todoReducer
});

export default rootReducer;