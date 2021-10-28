import { Map, fromJS } from 'immutable';
import { ADD, DELETE, CHECK, GET, GETTING, GET_TASK } from '../actions/todo';
const initialState = Map({
  tasks: [],
  task_showed: {
    value: '',
  },
});

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING:
      return state.set('isFetching', true);
    case GET:
      return Map({ tasks: action.payload, isFetching: false, error: false });
    case GET_TASK:
      return state.merge({ task_showed: action.payload });
    case ADD:
      return state.set('tasks', action.payload);
    case DELETE:
      return Map({
        ...state,
        tasks: state.get('tasks').filter((task) => task.id != action.payload.id),
      });
    case CHECK:
      let indexUpdate;
      state.get('tasks').forEach((task, index) => {
        task.id == action.payload.id && (indexUpdate = index);
      });
      let copyTask = Object.assign([], state.get('tasks'));
      copyTask[indexUpdate].status = 0;
      return Map({ tasks: copyTask });
    default:
      return state;
  }
};

export default todoReducer;
