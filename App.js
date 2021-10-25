import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HomeContainer from './src/components/Home';
import HomeContainer2 from './src/components/Home2/HomeContainer2';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './src/store';

const Stack = createNativeStackNavigator();

const AnotherPage = ({navigation}) => {
  return (
    <View>
      <Text>Another Page</Text>

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
