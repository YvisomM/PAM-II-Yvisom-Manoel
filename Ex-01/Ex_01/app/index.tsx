import React from 'react';
import { StyleSheet, Text, View, Image, Button, Linking, ScrollView } from 'react-native';

const App = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>EX 1</Text>

    {/* Primeiro GIF */}
    <View style={styles.gifContainer}>
      <Image
        style={styles.gif}
        source={{
          uri: 'https://media.tenor.com/nE9laAoTsBEAAAAi/luffy-gear-5-laughing-sticker.gif',
        }}
      />
    </View>

    {/* Botão 1 */}
    <View style={styles.buttonContainer}>
      <Button
        title="Clique aqui"
        color="#6961da"
        onPress={() => {
          Linking.openURL('https://www.youtube.com/watch?v=DNC28dpB9_Y');
        }}
      />
    </View>

    {/* Segundo GIF e Botão 2 */}
    <View style={styles.gifContainer}>
      <Image
        style={styles.gif}
        source={{
          uri: 'https://i.imgur.com/qrLaW3o.gif',
        }}
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button
        title="Clique aqui"
        color="#07E0A4"
        onPress={() => {
          Linking.openURL('https://www.youtube.com/watch?v=i0we6am_25g');
        }}
      />
    </View>

    {/* Terceiro GIF e Botão 3 */}
    <View style={styles.gifContainer}>
      <Image
        style={styles.gif}
        source={{
          uri: 'https://media1.tenor.com/m/17mQgrXCTKcAAAAC/liebe-black-clover.gif',
        }}
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button
        title="Clique aqui"
        color="#5B0609"
        onPress={() => {
          Linking.openURL('https://www.youtube.com/watch?v=xj9aaqzKBwM');
        }}
      />
    </View>

    {/* Quarto GIF e Botão 4 */}
    <View style={styles.gifContainer}>
      <Image
        style={styles.gif}
        source={{
          uri: 'https://64.media.tumblr.com/b9284e8d72b549d3a63296bf3886709d/tumblr_mf5hdt4mlN1qkbwm5o7_r1_500.gif',
        }}
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button
        title="Clique aqui"
        color="#AA94EA"
        onPress={() => {
          Linking.openURL('https://www.youtube.com/watch?v=M2Yx0ZrkTU8');
        }}
      />
    </View>

    <View style={styles.gifContainer}>
      <Image
        style={styles.gif}
        source={{
          uri: 'https://i.pinimg.com/originals/84/cc/e1/84cce1a2eee56319e34a2c913131039c.gif',
        }}
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button
        title="Clique aqui"
        color="#102718"
        onPress={() => {
          Linking.openURL('https://www.youtube.com/watch?v=zVgKnfN9i34');
        }}
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Center content horizontally
    padding: 24,
    backgroundColor: '#eafbea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#6961da',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  gifContainer: {
    alignItems: 'center', // Center the GIF horizontally
    marginVertical: 10, // Add some spacing between elements
  },
  gif: {
    width: 200,
    height: 180,
  },
  buttonContainer: {
    marginVertical: 10, // Add some spacing between the GIF and the button
  },
});

export default App;
