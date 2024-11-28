import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";
 
const AtualizacaoScreen = () => {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
 
  const handleAlteracao = async () => {
    if (!id || !nome || !email || !senha) {
      Alert.alert("Erro", "Todos os campos são obrigatórios");
      return;
    }
 
    try {
      const response = await axios.put(
        `http://10.68.152.110:3000/api/atualizacao/${id}`,
        {
          nome,
          email,
          senha,
        }
      );
      Alert.alert("Sucesso", "Usuário alterado com sucesso!");
      console.log(response.data);
      setId("");
      setNome("");
      setEmail("");
      setSenha("");
    } catch (error) {
      console.error("Erro ao atualizar usuário: ", error);
      Alert.alert("Erro", "Falha ao atualizar");
    }
  };
 
  return (
<View style={styles.container}>
<Text style={styles.title}>Atualização de Usuário</Text>
 
      <TextInput
        style={styles.input}
        placeholder="ID do Usuário"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />
 
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
 
      <Button
        title="Atualizar Usuário"
        onPress={handleAlteracao}
        color="#6200ee"
      />
</View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffaa",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#3a3a3a",
    textAlign: "center",
    textShadowColor: "#ffffff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#dddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
});
 
export default AtualizacaoScreen;