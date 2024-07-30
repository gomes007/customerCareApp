import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { BottomTabs } from './BottomTabs';
import { AboutStack, ContactStack, NotificationsStack, TicketStack } from './Stacks';
import { theme } from './theme';

const Drawer = createDrawerNavigator();

export function DrawerScreens() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeDrawer"
      screenOptions={{
        headerShown: false,
        drawerContentStyle: {
          backgroundColor: theme.colors.card,
        },
        drawerActiveTintColor: theme.colors.primary,
        drawerInactiveTintColor: theme.colors.text,
        drawerActiveBackgroundColor: theme.colors.background,
        sceneContainerStyle: { backgroundColor: theme.colors.background },
        drawerLabelStyle: {
          marginLeft: -15, 
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabs}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="NotificationsDrawer"
        component={NotificationsStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="notifications-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="AboutDrawer"
        component={AboutStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="information-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="ContactDrawer"
        component={ContactStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="call-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="TicketDrawer"
        component={TicketStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="ticket-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}