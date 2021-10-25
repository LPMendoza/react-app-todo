import React, { useEffect, useState } from 'react';
import HomeComponent from './HomeComponent';
import { useDispatch } from 'react-redux';
import { fetchTasks, addTaskService } from '../../actions/todo';

const HomeContainer = ({ navigation }) => {

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

  const taskDetails = (id) => {
    navigation.navigate('Another', {
      id
    });
  }

  return (
    <HomeComponent 
      saveTask={saveTask}
      navigation={navigation}
      taskDetails={taskDetails}
    />
  )
}

export default HomeContainer;
