import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeContainer from '.';
import { fetchTasks, addTaskService } from '../../actions/todo';
import { fetchTask } from '../../actions/todo';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const AnotherPage = ({ route, navigation }) => {
  const task_showed = useSelector((state) => state.todoReducer.get('task_showed'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTask(route.params.id));
  }, []);

  return (
    <View
      style={{
        padding: 32,
      }}
    >
      <Text
        style={{
          fontSize: 32,
          color: '#333',
        }}
      >
        Details
      </Text>

      <Text
        style={{
          fontSize: 24,
          marginTop: 16,
          marginBottom: 24,
          color: '#333',
        }}
      >
        {task_showed && task_showed.value}
      </Text>

      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <View
          style={{
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            padding: 16,
          }}
        >
          <Text
            style={{
              color: '#700B97',
              textAlign: 'center',
            }}
          >
            Home
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const HomeNavigator = () => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeContainer} />
        <Stack.Screen component={AnotherPage} name="Another" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
