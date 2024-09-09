import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Tela04() {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{
                    uri: 'https://media1.tenor.com/m/QUeoNtI3b9gAAAAC/morgana.gif'
                }}
                style={styles.image}/>
            <Text style={styles.text}>
                Dividida entre sua natureza mortal e celestial, Morgana prendeu as asas para
                preservar sua humanidade e inflige sua dor e amargura nos desonestos e
                corruptos. Ela rejeita as leis e tradições que considera injustas e luta pela
                verdade nas sombras.
            </Text>
            <Image
                source={{
                    uri: 'https://media1.tenor.com/m/9Eyt1T8mGyoAAAAC/star-guardian-morgana-morgana.gif'
                }}
                style={styles.image2}/>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('index')}>
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
        padding: 10
    },
    image: {
        width: 498,
        height: 280,
        marginBottom: 20
    },
    text: {
        color: '#F7EF8A',
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 10
    },
    image2: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#F7EF8A',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    },
    buttonText: {
        color: '#003',
        fontSize: 18
    }
});
