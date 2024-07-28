import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Telas do Bottom Tab
function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('HomeDetails')} />
      <Button title="Go to Settings" onPress={() => navigation.navigate('SettingsTab')} />
      <Button title="Go to Profile" onPress={() => navigation.navigate('ProfileTab')} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}

// Telas do Drawer
function NotificationsScreen({ navigation }) {
  return (
    <View>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View>
      <Text>About Screen</Text>
    </View>
  );
}

function ContactScreen({ navigation }) {
  return (
    <View>
      <Text>Contact Screen</Text>
    </View>
  );
}

// Stack Navigators para cada grupo de telas
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const AboutStack = createStackNavigator();
const ContactStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();

function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="HomeMain" 
        component={HomeScreen} 
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="menu" size={25} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerTitle: () => null,  // Oculta o título "Home"
        }}
      />
      <HomeStack.Screen 
        name="HomeDetails" 
        component={DetailsScreen} 
        options={{
          headerTitle: 'Details',
          headerLeft: ({ navigation }) => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={25} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen({ navigation }) {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen 
        name="SettingsMain" 
        component={SettingsScreen} 
        options={{
          headerTitle: 'Settings',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('HomeMain')}>
              <Icon name="arrow-back" size={25} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
        }}
      />
    </SettingsStack.Navigator>
  );
}

function ProfileStackScreen({ navigation }) {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen 
        name="ProfileMain" 
        component={ProfileScreen} 
        options={{
          headerTitle: 'Profile',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('HomeMain')}>
              <Icon name="arrow-back" size={25} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
}

function NotificationsStackScreen({ navigation }) {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen 
        name="NotificationsMain" 
        component={NotificationsScreen} 
        options={{
          headerTitle: 'Notifications',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('HomeMain')}>
              <Icon name="arrow-back" size={25} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
        }}
      />
    </NotificationsStack.Navigator>
  );
}

function AboutStackScreen({ navigation }) {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen 
        name="AboutMain" 
        component={AboutScreen} 
        options={{
          headerTitle: 'About',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('HomeMain')}>
              <Icon name="arrow-back" size={25} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
        }}
      />
    </AboutStack.Navigator>
  );
}

function ContactStackScreen({ navigation }) {
  return (
    <ContactStack.Navigator>
      <ContactStack.Screen 
        name="ContactMain" 
        component={ContactScreen} 
        options={{
          headerTitle: 'Contact',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('HomeMain')}>
              <Icon name="arrow-back" size={25} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
        }}
      />
    </ContactStack.Navigator>
  );
}

// Bottom Tabs Navigator para navegação de abas
function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="HomeTab" 
        component={HomeStackScreen} 
        options={{ headerShown: false }} // Oculta o cabeçalho da aba, controlado pelo Stack
      />
      <Tab.Screen 
        name="SettingsTab" 
        component={SettingsStackScreen} 
        options={{ headerShown: false }} // Oculta o cabeçalho da aba, controlado pelo Stack
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileStackScreen} 
        options={{ headerShown: false }} // Oculta o cabeçalho da aba, controlado pelo Stack
      />
    </Tab.Navigator>
  );
}

// Drawer Navigator para navegação de drawer
function DrawerScreens() {
  return (
    <Drawer.Navigator 
      initialRouteName="HomeDrawer"
      screenOptions={{ headerShown: false }}  // Oculta o cabeçalho do Drawer
    >
      <Drawer.Screen 
        name="HomeDrawer" 
        component={BottomTabs}
        options={{ drawerLabel: 'Home' }} // Oculta o item do drawer
      />
      <Drawer.Screen 
        name="NotificationsDrawer" 
        component={NotificationsStackScreen} 
        options={{ drawerLabel: 'Notifications' }}
      />
      <Drawer.Screen 
        name="AboutDrawer" 
        component={AboutStackScreen} 
        options={{ drawerLabel: 'About' }}
      />
      <Drawer.Screen 
        name="ContactDrawer" 
        component={ContactStackScreen} 
        options={{ drawerLabel: 'Contact' }}
      />
    </Drawer.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Drawer">
        <MainStack.Screen 
          name="Drawer" 
          component={DrawerScreens} 
          options={{ headerShown: false }} 
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
