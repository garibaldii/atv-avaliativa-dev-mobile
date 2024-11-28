import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const DeleteScreen = () => {
    const [id, setId] = useState("");

    const handleDelete = async () => {
        if (!id) {
            console.log("Erro", "O campo id é obrigatório");
            return;
        }

        try {
            const response = await axios.delete(`http://10.68.153.110:3000/api/deletar/${id}`);
            Alert.alert("Sucesso", response.data.message);
            setId('');
        } catch (err) {
            console.error("Erro ao deletar o usuário", err);
            Alert.alert("Erro", "Erro ao deletar o usuário");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Deletar Usuário 🗑</Text>

            <TextInput
                style={styles.input}
                placeholder='ID do usuário'
                value={id}
                onChangeText={setId}
                keyboardType='numeric'
            />

            <Button title="Deletar Usuário" onPress={handleDelete} color="#6200ee" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d0f0c0',
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
    input: {
        height: 50,
        width: '100%',
        borderColor: '#8bc34a',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
});

export default DeleteScreen;
