// tela02.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tela02() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você está na Tela 2!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003',
  },
  text: {
    color: '#F7EF8A',
    fontSize: 20,
  },
});
