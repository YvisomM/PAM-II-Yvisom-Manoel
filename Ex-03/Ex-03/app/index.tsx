import React from 'react';
import { View, Image, ScrollView, StyleSheet, Text } from 'react-native';
import { Link } from '@react-navigation/native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lolzin</Text>
      <ScrollView
        style={styles.scrollView}
        
        contentContainerStyle={styles.scrollViewContent}
      >
        <Link to="/tela02" style={styles.box}>
          <Image
            source={{ uri: 'https://pbs.twimg.com/media/Fz5ZgtyaEAE8kMI.jpg' }}
            style={styles.image}
          />
        </Link>
        <Text style={styles.title}>Lux</Text>
        <Link to="/tela03" style={styles.box}>
          <Image
            source={{ uri: 'https://64.media.tumblr.com/36ee9686549e49185c51c2e52eb2b27c/5cd40311cd32f791-39/s1280x1920/21416cbca419873e86e4f8ce9fdf859737d24ba3.png' }}
            style={styles.image}
          />
        </Link>
        <Text style={styles.title}>Ahri</Text>
        <Link to="/tela04" style={styles.box}>
          <Image
            source={{ uri: 'https://statics.koreanbuilds.net/tile_200x200/Syndra.webp' }}
            style={styles.image}
          />
        </Link>
        <Text style={styles.title}>Syndra</Text>
        <Link to="/tela05" style={styles.box}>
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/7c/e4/d4/7ce4d40d2c91b34b323f1d6a59df1b3b.jpg' }}
            style={styles.image}
          />
        </Link>
        <Text style={styles.title}>Diana</Text>
        <Link to="/tela06" style={styles.box}>
          <Image
            source={{ uri: 'https://i.pinimg.com/564x/32/4c/20/324c20711a3c6cfa605eeed09b319e44.jpg' }}
            style={styles.image}
          />
        </Link>
        <Text style={styles.title}>Morgana</Text>
        <Link to="/tela07" style={styles.box}>
          <Image
            source={{ uri: 'https://preview.redd.it/new-zyra-icon-upscaled-v0-2m9275qnvgib1.jpg?width=1080&crop=smart&auto=webp&s=3fbe927110f364920c36f6ca9db2a2571f64ae41' }}
            style={styles.image}
          />
        </Link>
        <Text style={styles.title}>Zyra</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003',
    paddingTop: 20, 
  },
  title: {
    color: '#F7EF8A',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 10, 
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  box: {
    height: 300,
    width: 300,
    borderColor: '#F7EF8A',
    borderWidth: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
