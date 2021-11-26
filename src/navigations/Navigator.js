import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();
const AppNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{header: () => null}}>  
        <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigator;