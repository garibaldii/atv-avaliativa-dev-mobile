import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const CadastroScreen = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [id, setId] = useState('');

    const [usuario, setUsuarios] = useState('')

    const handleCadastro = async () => {
        try {
            const response = await axios.post('http://10.68.153.79:3000/api/cadastro', {nome, email, senha });
            console.log(response.data);
            Alert.alert("Cadastro realizado com sucesso!");
            setNome('');
            setEmail('');
            setSenha('');
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            Alert.alert("Erro", "Não foi possível realizar o cadastro.");
        }
    };

    const fetchUsuarios = async () => {
        try {
            const response = await axios.get('http://10.68.153.79:3000/api/cadastro');
            setUsuarios(response.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };



    // Chama a função fetchUsuarios quando o componente é montado
    // useEffect(() => {
    //     fetchUsuarios();
    // }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Usuário</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                <Text style={styles.buttonText}>🐢 Cadastrar</Text>
            </TouchableOpacity>
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
    button: {
        backgroundColor: '#6dbf4b',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        elevation: 5,
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

export default CadastroScreen;
