import React from 'react';
import { Button, Text, View } from 'react-native';
import { theme } from '../navigation/theme'; 

export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text }}>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('HomeDetails')} />
    </View>
  );
}


export function DetailsScreen() {
  return (
    <View>
      <Text>Details Screens</Text>
    </View>
  );
}