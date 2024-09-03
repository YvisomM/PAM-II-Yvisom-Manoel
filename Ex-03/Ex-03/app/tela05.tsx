
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tela05() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você está na Tela 5!</Text>
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