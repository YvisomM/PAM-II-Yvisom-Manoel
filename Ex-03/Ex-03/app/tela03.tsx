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

export default function Tela03() {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{
                    uri: 'https://media1.tenor.com/m/OaenBPLYCCYAAAAC/ahri-league-of-legends.gif'
                }}
                style={styles.image}/>
            <Text style={styles.text}>
                A ligação de Ahri com a magia do mundo espiritual é inata. Ela é uma vastaya com
                traços de raposa, capaz de manipular as emoções de sua presa e consumir sua
                essência, devorando também as memórias e as percepções de cada alma absorvida.
            </Text>
            <Image
                source={{
                    uri: 'https://media1.tenor.com/m/OSqeXeb6dfIAAAAC/ahri-kda.gif'
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
