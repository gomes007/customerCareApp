import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { theme } from '../navigation/theme';

const CustomInput = ({ label, placeholder, value, onChangeText }) => {
    const [isFocused, setIsFocused] = useState(false);
  
    return (
      <View style={styles.inputContainer}>
        <Text style={[styles.label, (isFocused || value) && styles.labelFocused]}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#888" 
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    inputContainer: {
      marginBottom: 20,
      position: 'relative', // Necessário para posicionar a label
    },
    label: {
      position: 'absolute',
      left: 15,
      top: 15,
      fontSize: 16,
      color: theme.colors.text,
      backgroundColor: theme.colors.background,
      paddingHorizontal: 5,
      zIndex: 1,
      transition: 'top 0.2s, font-size 0.2s', // Animação suave
    },
    labelFocused: {
      top: -10,
      fontSize: 12,
    },
    input: {
      borderWidth: 1,
      borderColor: '#555',
      borderRadius: 8,
      paddingHorizontal: 15,
      paddingVertical: 10,
      color: theme.colors.text,
      backgroundColor: '#1c1c1c',
    },
  });
  
  export default CustomInput;