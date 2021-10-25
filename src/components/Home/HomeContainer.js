import React, { useEffect } from 'react';
import HomeComponent from './HomeComponent';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, checkTask, fetchTasks, addTaskService } from '../../actions/todo';

const HomeContainer = ({ navigation }) => {

  const tasksStates = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    dispatch(fetchTasks());
  }

  const saveTask = (task) => {
    dispatch(addTaskService(task));
  }

  const handleCheckTask = (id) => {
    dispatch(checkTask(id));
  }

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  }

  return (
    <HomeComponent 
      saveTask={saveTask}
      deleteTask={handleDeleteTask}
      checkTask={handleCheckTask}
      tasks={tasksStates.tasks}
      navigation={navigation}
    />
  )
}

export default HomeContainer;
