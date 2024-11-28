import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Jobs from './components/Jobs';

export default function App() {

  const [nome, setNome] = useState("Professor Helder")

  let img = "https://sujeitoprogramador.com/steve.png"

  const handleMudar = () => {
    setNome("Professor Helder Pestana");
  }

  return (
    <View style = {styles.container}>
      
      <Text style = {{ color: "#FF0000", fontSize: 25, margin: 15}}>Programador</Text>

      <Jobs img={img} largura = {100} altura = {200} fulano = "Steve Jobs" />

      <Text style = {{ fontSize: 30}}> {nome} </Text>

      <Button title='Entrar' onPress={handleMudar} />
      
      <StatusBar style='auto'/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
