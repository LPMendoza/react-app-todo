import axios from 'axios';
export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const CHECK = 'CHECK';
export const GET = 'GET';
export const GETTING = 'GETTING';
export const GET_TASK = 'GET_TASK';

const getTasks = (payload) => {
  return {
    type: GET,
    payload: payload.tasks,
  };
};

const gettingTask = (payload) => {
  return {
    type: GETTING,
  };
};

export const fetchTasks = () => (dispatch) => {
  dispatch(gettingTask());
  axios('http://192.168.1.74:3000/api/todo')
    .then((response) => {
      dispatch(getTasks(response.data));
    })
    .catch((error) => {});
};

const getTask = (task) => {
  return {
    type: GET_TASK,
    payload: task,
  };
};

export const fetchTask = (id) => (dispatch) => {
  axios(`http://192.168.1.74:3000/api/todo/${id}`).then((response) =>
    dispatch(getTask(response.data))
  );
};

export const addTask = (task) => ({
  type: ADD,
  payload: task,
});

export const addTaskService = (task) => (dispatch) => {
  axios({
    method: 'post',
    url: 'http://192.168.1.74:3000/api/todo',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({ task }),
  }).then((response) => {
    dispatch(fetchTasks());
  });
};

export const checkTask = (id) => ({
  type: CHECK,
  payload: {
    id,
  },
});

export const deleteTask = (id) => ({
  type: DELETE,
  payload: {
    id,
  },
});
