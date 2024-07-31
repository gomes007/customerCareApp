import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import React from 'react';
import { DrawerScreens } from './navigation/DrawerScreens';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor="#d60b52" style="light" />
    <NavigationContainer>
      <DrawerScreens />
    </NavigationContainer>
    </>
  );
}