import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import HomePage from '../Components/HomePage'
import Activity from './Activity'
import Profile from '../Components/Profile'
import Filter from './Filter'

const Drawer = createDrawerNavigator();

export default function App() {
    return (
    
        <NavigationContainer independent='true'>
            <Drawer.Navigator initialRouteName="HomePage">
                <Drawer.Screen name="Home" component={HomePage} />
                <Drawer.Screen name="Activity" component={Activity} />
                <Drawer.Screen name="Profile" component={Profile} /> 
                <Drawer.Screen name="Total Earning" component="Total Earning" /> 
                <Drawer.Screen name="Filter" component={Filter} /> 
                <Drawer.Screen name="Favorite" component="Favorite"  /> 
                <Drawer.Screen name="Share" component="Share" /> 
                <Drawer.Screen name="Reset Password"  component="Reset Paswword"/> 
                <Drawer.Screen name="LogOut" component="LogOut" />
            </Drawer.Navigator>
        </NavigationContainer>
      
    );
  }