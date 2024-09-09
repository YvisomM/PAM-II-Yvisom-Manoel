import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function Tela02() {
    const navigation = useNavigation(); 

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{
                    uri: 'https://i.pinimg.com/originals/f6/ca/12/f6ca1268f5bfa335c71ee58a960df49e.gif'
                }}
                style={styles.image}
            />
            <Text style={styles.text}>
                Luxanna Stemmaguarda nasceu em Demacia, um reino insular onde habilidades
                mágicas são vistas com medo e desconfiança. 
                Capaz de dobrar a luz à sua vontade,
                ela cresceu temendo ser descoberta e exilada, e foi forçada a manter seus
                poderes em segredo.
            </Text>
            <Image
                source={{
                    uri: 'https://i.pinimg.com/originals/bc/3d/fa/bc3dfa536dcbe996f7fe27db6edd88b9.gif'
                }}
                style={styles.image2}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('index')}>
                <Text style={styles.buttonText}>Voltar para a Tela Inicial</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003',
        padding: 10,
    },
    image: {
        width: 498,
        height: 280,
        marginBottom: 20,
    },
    text: {
        color: '#F7EF8A',
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 10,
    },
    image2: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#F7EF8A',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#003',
        fontSize: 18,
    },
});
