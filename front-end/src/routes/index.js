import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/login';
import Game from '../Screens/game';
import Register from '../Screens/register';
import Home from '../Screens/home';
import Play from '../Screens/play';
import Ranking from '../Screens/ranking';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
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
        <Stack.Screen
          name="Ranking"
          component={Ranking}
        />
  </Stack.Navigator>
  )
}
