import axios from "axios";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const CHECK = "CHECK";
export const GET = "GET";

const getTasks = (payload) => {
  return {
  type: GET,
  payload: payload.tasks
}}

export const fetchTasks = () => dispatch => {
  axios("http://192.168.1.74:3000/api/todo")
  .then((response) => dispatch(getTasks(response.data)))
}

export const addTask = (task) => ({
  type: ADD,
  payload: {
    id: Math.random(),
    value: task,
    status: 1
  }
});

export const addTaskService = (task) => dispatch => {
  axios.post("http://192.168.1.74:3000/api/todo", {
    data: task
  })
  .then((response) => dispatch(fetchTasks()))
}


export const checkTask = (id) => ({
  type: CHECK,
  payload: {
    id,
  }
});

export const deleteTask = (id) => ({
  type: DELETE,
  payload: {
    id
  }
});