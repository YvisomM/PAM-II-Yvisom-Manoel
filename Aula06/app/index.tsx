import React, { useState, useEffect } from 'react';
import { View, TextInput, Alert, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Configurações do Firebase 
const firebaseConfig = {
  apiKey: "AIzaSyBL80-q6IR02x6CX0svaD3aibrepOdfPtw",
  authDomain: "meuprimeirofirebase-a2115.firebaseapp.com",
  projectId: "meuprimeirofirebase-a2115",
  storageBucket: "meuprimeirofirebase-a2115.appspot.com",
  messagingSenderId: "530734620375",
  appId: "1:530734620375:web:c7f9db6a7f5482e13b5a92"
};

// Inicialize o Firebase antes de qualquer uso
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      try {
        const snapshot = await nomesCollection.get();
        const nomesData = snapshot.docs.map(doc => ({
          id: doc.id,
          nomeCompleto: `${doc.data().Nome} ${doc.data().Sobrenome}`,
        }));
        setNomes(nomesData);
      } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Ocorreu um erro ao buscar os dados.');
      }
    };

    fetchData();
  }, []);

  const sendData = async () => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      const docRef = await nomesCollection.add({
        Nome: nome,
        Sobrenome: sobrenome
      });
      Alert.alert('Sucesso', 'Dados cadastrados com sucesso!');
      setNome('');
      setSobrenome('');
      fetchData();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar os dados.');
    }
  };

  const updateData = async () => {
    if (documentId) {
      const nomesCollection = firebase.firestore().collection('Nomes');
      try {
        await nomesCollection.doc(documentId).update({
          Nome: nome,
          Sobrenome: sobrenome
        });
        Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
        setDocumentId('');
        setNome('');
        setSobrenome('');
        fetchData();
      } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Ocorreu um erro ao atualizar os dados.');
      }
    } else {
      Alert.alert('Erro', 'Nenhum documento selecionado para atualização.');
    }
  };

  const deleteData = async () => {
    if (documentId) {
      const nomesCollection = firebase.firestore().collection('Nomes');
      try {
        await nomesCollection.doc(documentId).delete();
        Alert.alert('Sucesso', 'Dados excluídos com sucesso!');
        setDocumentId('');
        setNome('');
        setSobrenome('');
        fetchData();
      } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Ocorreu um erro ao excluir os dados.');
      }
    } else {
      Alert.alert('Erro', 'Nenhum documento selecionado para exclusão.');
    }
  };

  const fetchData = async () => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      const snapshot = await nomesCollection.get();
      const nomesData = snapshot.docs.map(doc => ({
        id: doc.id,
        nomeCompleto: `${doc.data().Nome} ${doc.data().Sobrenome}`,
      }));
      setNomes(nomesData);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao buscar os dados.');
    }
  };

  const handleItemPress = (item) => {
    const [nome, sobrenome] = item.nomeCompleto.split(' ');
    setNome(nome);
    setSobrenome(sobrenome);
    setDocumentId(item.id);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <TouchableOpacity style={styles.button} onPress={sendData}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={updateData}>
        <Text style={styles.buttonText}>Atualizar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={deleteData}>
        <Text style={styles.buttonText}>Excluir</Text>
      </TouchableOpacity>
      <Text style={styles.instruction}>Para atualizar, clique no nome desejado:</Text>
      <FlatList
        data={nomes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handleItemPress(item)}>
            <Text style={styles.itemText}>{`Nome Completo: ${item.nomeCompleto}`}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#B0E0E6',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004d40', 
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 16,
  },
  instruction: {
    fontSize: 14,
    marginBottom: 10,
    color: '#000', 
  },
  item: {
    padding: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    backgroundColor: '#00796b', 
    borderRadius: 5,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#ffffff', 
  },
});

export default App;
