import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './ViewDetails'
import Home from './HomePage2'
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer independent='true'>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown:false}} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
      
}


