import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import Nav from './src/components/Nav';

function App() {
  return (
    <NavigationContainer>
      <Nav />
    </NavigationContainer>
  );
}

export default App;
