import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao App!</Text>
            
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Text style={styles.buttonText}>🐢 Ir para Cadastro</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Consulta')}
            >
                <Text style={styles.buttonText}>📋 Ir para Consulta</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0f2', 
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#3a3a3a',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#6dbf4b',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 25,
        elevation: 5,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HomeScreen;
