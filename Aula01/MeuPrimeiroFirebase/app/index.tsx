import firebase from 'firebase/compat/app';
import 'firebase/combat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBL80-q6IR02x6CX0svaD3aibrepOdfPtw",
  authDomain: "meuprimeirofirebase-a2115.firebaseapp.com",
  projectId: "meuprimeirofirebase-a2115",
  storageBucket: "meuprimeirofirebase-a2115.appspot.com",
  messagingSenderId: "530734620375",
  appId: "1:530734620375:web:c7f9db6a7f5482e13b5a92"
};


firebase.initializeApp(firebaseConfig);


import React, {useEffect, useState } from 'react';
import{ View, Text, FlatList } from 'react-native';

export default function App() {
    const [nomes, setNomes] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const nomesCollection = firebase.firestore().collection('Nomes');
            const snapshot = await nomesCollection.get();

            const data = [];
            snapshot.forEach((doc) => {
                data.push({id: doc.id, ...doc.data() });
            });

            setNomes(data);
        };

        fetchData();
    }, []);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Lista de Nomes:</Text>
            <FlatList
            data={nomes}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <View>
                    <Text>{item.nome} {item.sobrenome}</Text>
                    </View>
            )}
            />
        </View>
    );
}