import React from 'react';
import { View, Image, ScrollView, StyleSheet, Text } from 'react-native';
import { Link } from '@react-navigation/native';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lolzin</Text>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}>
                <Link to="/tela02" style={styles.box}>
                    <Image
                        source={{
                            uri: 'https://pbs.twimg.com/media/Fz5ZgtyaEAE8kMI.jpg'
                        }}
                        style={styles.image}
                    />
                </Link>
                <Text style={styles.title}>Lux</Text>
                <Link to="/tela03" style={styles.box}>
                    <Image
                        source={{
                            uri: 'https://64.media.tumblr.com/36ee9686549e49185c51c2e52eb2b27c/5cd40311cd32f791-' +
                                    '39/s1280x1920/21416cbca419873e86e4f8ce9fdf859737d24ba3.png'
                        }}
                        style={styles.image}
                    />
                </Link>
                <Text style={styles.title}>Ahri</Text>
                <Link to="/tela04" style={styles.box}>
                    <Image
                        source={{
                            uri: 'https://64.media.tumblr.com/14e7247c4c876c27e1cc18bd6d6afc83/4a002d40c3ae8dc3-' +
                                    'af/s640x960/64a336bfc7d554bdfec5869373d9560a6e248514.jpg'
                        }}
                        style={styles.image}
                    />
                </Link>
                <Text style={styles.title}>Morgana</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003',
        paddingTop: 20
    },
    title: {
        color: '#F7EF8A',
        fontSize: 35,
        textAlign: 'center',
        marginBottom: 10,
        textShadowColor: '#FFD700', 
        textShadowOffset: { width: 1, height: 1 }, 
        textShadowRadius: 10, 
    },
    scrollView: {
        flex: 1
    },
    scrollViewContent: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    box: {
        height: 300,
        width: 300,
        borderColor: '#F7EF8A',
        borderWidth: 5,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    }
});
