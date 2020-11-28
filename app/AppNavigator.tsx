import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {/*<Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />*/}
      <Stack.Screen
        name="Login Screen"
        component={LoginScreen}
      />
    </Stack.Navigator>
  )
}

export const LoggedInNavigator = () => {
  return (
    <Stack.Navigator>
      {/*<Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />*/}
      <Stack.Screen
        name="Search Screen"
        component={SearchScreen}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  )
}