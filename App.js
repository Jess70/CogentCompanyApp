import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home'
import SignUp from './Components/Sign'
import SignIn from './Components/Register'
import Drawer from './Components/Drawer'
import Details from './Components/ViewDetails'
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown:false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title:null}}  />
        <Stack.Screen name="SignIn" component={SignIn}options={{ title:null}}  />
        <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown:false}} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
      
}


