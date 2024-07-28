import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { AboutStack, ContactStack, NotificationsStack } from './Stacks';
import { BottomTabs } from './BottomTabs';

const Drawer = createDrawerNavigator();

export function DrawerScreens() {
  return (
    <Drawer.Navigator initialRouteName="HomeDrawer" screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeDrawer" component={BottomTabs} />
      <Drawer.Screen name="NotificationsDrawer" component={NotificationsStack} />
      <Drawer.Screen name="AboutDrawer" component={AboutStack} />
      <Drawer.Screen name="ContactDrawer" component={ContactStack} />
    </Drawer.Navigator>
  );
}