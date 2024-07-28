import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { DrawerScreens } from './navigation/DrawerScreens';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerScreens />
    </NavigationContainer>
  );
}