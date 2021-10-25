import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HomeContainer from './src/components/Home';
import HomeContainer2 from './src/components/Home2/HomeContainer2';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fetchTask } from './src/actions/todo';
import store from './src/store';

const Stack = createNativeStackNavigator();

const AnotherPage = ({route, navigation}) => {

  const task_showed = useSelector((state) => state.todoReducer.task_showed);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTask(route.params.id));
  }, []);

  return (
    <View
      style={{
        padding: 32
      }}
    >
      <Text
        style={{
          fontSize: 32,
          color: '#333'
        }}
      >Details</Text>

      <Text
        style={{
          fontSize: 24,
          marginTop: 16,
          marginBottom: 24,
          color: '#333'
        }}
      >
        {task_showed && task_showed.value}
      </Text>

      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <View style={{
          backgroundColor: "#f5f5f5",
          borderRadius: 10,
          padding: 16,
        }}>
          <Text style={{
          color: "#700B97",
          textAlign: "center"
          }}>Home</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions = {{
          }}
        >
          <Stack.Screen name="Home" component={HomeContainer}
            options={{
              title: "Home"
            }}
          />
          <Stack.Screen name="Home2" component={HomeContainer2}/>
          <Stack.Screen name="Another" component={AnotherPage}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
