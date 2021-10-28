import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HomeNavigator from './src/components/Home/HomeNavigator';
import HomeContainer2 from './src/components/Home2/HomeContainer2';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons/';
import store from './src/store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions = {{
//           }}
//         >
//           <Stack.Screen name="Home" component={HomeContainer}
//             options={{
//               title: "Home"
//             }}
//           />
//           <Stack.Screen name="Home2" component={HomeContainer2}/>
//           <Stack.Screen name="Another" component={AnotherPage}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//       <StatusBar style="auto" />
//     </Provider>
//   );
// }

// export default function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Tab.Navigator
//           screenOptions = {{
//           }}
//         >
//           <Tab.Screen
//             name="Home"
//             component={HomeContainer}
//             options={{
//               tabBarIcon: ({ focused, color, size }) => {
//                 return <Feather name="home" size={16} color={color} />;
//               },
//               tabBarActiveTintColor: '#700B97',
//             }}
//           />
//           <Tab.Screen
//             name="Home2"
//             component={HomeContainer2}
//             options={{
//               tabBarIcon: ({ focused, color, size }) => {
//                 return <Feather name="settings" size={16} color={color} />;
//               },
//               tabBarActiveTintColor: '#700B97',
//             }}
//             />
//           <Tab.Screen name="Another" component={AnotherPage}/>
//         </Tab.Navigator>
//       </NavigationContainer>
//       <StatusBar style="auto" />
//     </Provider>
//   );
// }

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{}}>
          <Drawer.Screen
            name="Home"
            component={HomeNavigator}
            options={{
              title: 'Home',
            }}
          />
          <Drawer.Screen name="Home2" component={HomeContainer2} />
        </Drawer.Navigator>
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
