import React from 'react';
import Provider from '../context/Provider';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/login';
import Game from '../Screens/game';
import Register from '../Screens/register';
import Home from '../Screens/home';
import Play from '../Screens/play';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Provider>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Game"
          component={Game}
        />
        <Stack.Screen
          name="Play"
          component={Play}
        />
      </Provider>
  </Stack.Navigator>
  )
}
