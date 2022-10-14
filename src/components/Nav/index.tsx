import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstScreen from '../FirstScreen';
import SecondScreen from '../SecondScreen';
import ThirdScreen from '../ThirdScreen';

const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="direction" component={FirstScreen} />
      <Tab.Screen name="position" component={SecondScreen} />
      <Tab.Screen name="justifyContent" component={ThirdScreen} />
    </Tab.Navigator>
  );
}
export default MyTabs;
