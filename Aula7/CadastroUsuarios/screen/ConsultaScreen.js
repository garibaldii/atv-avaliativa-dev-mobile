import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const ConsultaScreen = ({navigation}) => {
    const [dados, setDados] = useState([]);

    const handleConsulta = async () => {
        try {
            const response = await axios.get('http://10.68.153.79:3000/api/consulta');
            setDados(response.data);
        } catch (error) {
            console.log(`Erro: ${error}`);
        }
    };

    const renderUserData = ({ item }) => {
        return (
            <View style={styles.userContainer}>
                <Text style={styles.userName}>Nome: {item.nome}</Text>
                <Text style={styles.userEmail}>Email: {item.email}</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Deletar")}>
                    <Text style={styles.buttonText}>🗑 Deletar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Atualizacao")}>
                    <Text style={styles.buttonText}>✏ Atualizar</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Consulta de Usuário</Text>
            <TouchableOpacity style={styles.button} onPress={handleConsulta}>
                <Text style={styles.buttonText}>🐢 Consultar</Text>
            </TouchableOpacity>

            <FlatList
                data={dados}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderUserData}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#d0f0c0', // Verde suave, como a casca do Koopa
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#3a3a3a',
        textAlign: 'center',
        textShadowColor: '#ffffff',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    button: {
        backgroundColor: '#6dbf4b', // Verde mais forte
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        elevation: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    listContainer: {
        paddingBottom: 20,
    },
    userContainer: {
        marginBottom: 15,
        padding: 15,
        borderColor: '#8bc34a', // Verde mais claro
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.5,
        elevation: 5,
        width: '100%',
    },
    userName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#2e2e2e',
    },
    userEmail: {
        fontSize: 16,
        color: '#555555',
    },
});

export default ConsultaScreen;
