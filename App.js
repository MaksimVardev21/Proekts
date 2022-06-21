import React from 'react';
import BusinessTripForm from './BusinessTripForm';
import BusinessTripList from './BusinessTripList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer
    >
      <Stack.Navigator initialRouteName='BusinessTripList'>
      <Stack.Screen name="BusinessTripList" component={BusinessTripList} options={{title: 'BusinessTripList'}}/>
      <Stack.Screen name="BusinessTripForm" component={BusinessTripForm} options={{title: 'BusinessTripForm'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
} 
