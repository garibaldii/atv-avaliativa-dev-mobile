import { View, TextInput, Text, Button, StyleSheet } from "react-native";

export default function RegistroScreen({ route }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Usuário</Text>
            <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#888" />
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#888" />
            <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#888" secureTextEntry />
            <Button title="CADASTRAR" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", // Centraliza horizontalmente
        padding: 10, // Espaçamento interno
    },
    title: {
        fontSize: 20,
        marginBottom: 20, // Espaço abaixo do título
    },
    input: {
        height: 30,
        width: "100%", // Para ocupar toda a largura
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15, // Espaço entre os inputs
        paddingHorizontal: 10,
        backgroundColor: "#f9f9f9", // Cor de fundo dos inputs
    },
});
