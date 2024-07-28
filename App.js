import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';

import FixedLabelExample from './screens/FixedLabelExample';
import HomeScreen from './screens/HomeScreen';
import MyComponent from './screens/MyComponent';
import Ticket from './screens/Ticket';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Cadastro" 
        component={FixedLabelExample}
        options={({ navigation }) => ({
          title: 'Cadastro',
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'HomeStack') {
            iconName = 'home';
          } else if (route.name === 'Cadastro') {
            iconName = 'add-circle';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home' }} />
      <Tab.Screen name="Cadastro" component={FixedLabelExample} options={{ title: 'Cadastro' }} />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "#fff",
        sceneContainerStyle: {
          backgroundColor: "#dad1d1",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerActiveTintColor: "#351401",
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={HomeTabs}
        options={{
          title: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tickets"
        component={Ticket}
        options={{
          title: "Tickets",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="ticket" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="MyComponent"
        component={MyComponent}
        options={{
          title: "MyComponent",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "#fff",
            contentStyle: {
              backgroundColor: "#dad1d1",
            },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
