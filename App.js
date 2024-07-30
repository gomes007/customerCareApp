import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { DrawerScreens } from './navigation/DrawerScreens';
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <NavigationContainer>
      <DrawerScreens />
    </NavigationContainer>
    </>
  );
}