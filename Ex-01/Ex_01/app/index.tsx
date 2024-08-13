import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Teste</Text>

    <Image style={styles.logo}
       source={{
        uri: 'https://media.tenor.com/nE9laAoTsBEAAAAi/luffy-gear-5-laughing-sticker.gif',
      }}

    />

  
  </View>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  logo :{
    width: 200, 
    height: 180,
    paddingTop: 50,
   alignItems :'center'
    
  },

});

export default App;