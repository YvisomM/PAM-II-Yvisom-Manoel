import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, } from 'react-native';
import { Audio } from 'expo-av';
import { ScrollView } from 'react-native-gesture-handler';

export default function Tela02() {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/Lux Ult.mp3') 
    );
    setSound(sound);
    await sound.playAsync();
    setIsPlaying(true);
  }

  async function pauseSound() {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  async function resumeSound() {
    if (sound && !isPlaying) {
      await sound.playAsync();
      setIsPlaying(true);
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
         <Image
            source={{ uri: 'https://pbs.twimg.com/media/Fz5ZgtyaEAE8kMI.jpg'}}
            style={styles.image}
          />
      <Text style={styles.text}>Você está na Tela 2!</Text>
       
      <Button title="Play" onPress={playSound} />
      <Button title="Pause" onPress={pauseSound} />
      <Button title="Continue" onPress={resumeSound} />
      </View>
     
    </ScrollView>
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
  image: {
    width: '100%',
    height: '100%',
  },
});
