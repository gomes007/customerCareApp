import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AboutScreen } from '../screens/AboutScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { DetailsScreen, HomeScreen } from '../screens/HomeScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Stack = createStackNavigator();

// Opções padrão de cabeçalho para telas com seta de voltar
const defaultScreenOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" size={25} style={{ marginLeft: 10 }} />
    </TouchableOpacity>
  ),
});

// Opções de cabeçalho para a tela HomeMain com menu hambúrguer e sem título
const homeMainOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Icon name="menu" size={25} style={{ marginLeft: 10 }} />
    </TouchableOpacity>
  ),
  headerTitle: '', // Define um título vazio para remover "HomeMain"
});

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={homeMainOptions}
      />
      <Stack.Screen
        name="HomeDetails"
        component={DetailsScreen}
        options={{
          ...defaultScreenOptions,
          headerTitle: 'Details',
        }}
      />
    </Stack.Navigator>
  );
}

export function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen 
        name="SettingsMain" 
        component={SettingsScreen} 
        options={{ headerTitle: 'Settings' }} // Define o título explicitamente
      />
    </Stack.Navigator>
  );
}

export function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen 
        name="ProfileMain" 
        component={ProfileScreen} 
        options={{ headerTitle: 'Profile' }} // Define o título explicitamente
      />
    </Stack.Navigator>
  );
}

export function NotificationsStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen 
        name="NotificationsMain" 
        component={NotificationsScreen} 
        options={{ headerTitle: 'Notifications' }} // Define o título explicitamente
      />
    </Stack.Navigator>
  );
}

export function AboutStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen 
        name="AboutMain" 
        component={AboutScreen} 
        options={{ headerTitle: 'About' }} // Define o título explicitamente
      />
    </Stack.Navigator>
  );
}

export function ContactStack() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen 
        name="ContactMain" 
        component={ContactScreen} 
        options={{ headerTitle: 'Contact' }} // Define o título explicitamente
      />
    </Stack.Navigator>
  );
}
