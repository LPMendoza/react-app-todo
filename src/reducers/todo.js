import { ADD, DELETE, CHECK, GET, GETTING, GET_TASK } from "../actions/todo";
const initialState = {
  tasks: [],
  task_showed: {
    value: ""
  },
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING:
      return {...state, isFetching: true};
    case GET:
      return {tasks: action.payload, isFetching: false};
    case GET_TASK:
      return {...state, task_showed: action.payload};
    case ADD:
      return {tasks: [...state.tasks, action.payload]}
    case DELETE:
      return {tasks: state.tasks.filter((task) => task.id != action.payload.id)};
    case CHECK:
      let indexUpdate;
      state.tasks.forEach((task, index) => {
        task.id == action.payload.id && (indexUpdate = index);
      });
      let copyTask = Object.assign([], state.tasks);
      copyTask[indexUpdate].status = 0;
      return {tasks: copyTask};
    default:
      return state;
  }
}

export default todoReducer;