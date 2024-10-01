import React, {UseState} from 'react';
import { Text, View, TextInput, Button } from "react-native";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


// Configurações do Firebase (Substitua pelos seus valores)
const firebaseConfig ={
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
  const [email, setEmail] = UseState('');
  const[password, setPassword] = UseState('');

  const handleSignup = async () => {
    try{
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        // O Usuário foi criado com sucesso
        const user = userCredential.user;
        console.log('Usuário criado com sucesso:', user);
      })
      .catch((error) => {
        //tratar erros de cadastro
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Erro ao Criar usuário:', error);
      });
    }catch (error){
      console.error(error);
    }
  };
  return (
    <View>
      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
    />
    <TextInput
    placeholder='Senha'
    secureTextEntry
    value={password}
    onChangeText={setPassword}
    />
    <Button title='Cadastrar' onPress={handleSignup}/>
    </View>
  );
};
export default App;