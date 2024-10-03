import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Switch,
  Alert,
} from "react-native";
import { Component } from "react";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      status: false,
      valor: 0,
      sexo: 0,
      sexos: [
        { key: 0, nome: "Masculino" },
        { key: 1, nome: "Feminino" },
      ],
    };
    this.pegaNome = this.pegaNome.bind(this);
    this.abrirConta = this.abrirConta.bind(this);
  }

  pegaNome(texto) {
    if (texto.length > 0) {
      this.setState({ nome: texto });
    } else {
      this.setState({ nome: "" });
    }
  }

  abrirConta() {
    const { nome, status, valor, sexo, sexos } = this.state;
    const sexoNome = sexos.find((v) => v.key == sexo).nome;
    const statusNome = status ? "Casado" : "Solteiro";

    Alert.alert(
      "Dados da Conta",
      `Nome: ${nome}\nSexo: ${sexoNome}\nLimite: $${valor.toFixed(
        1
      )}\nStatus: ${statusNome}`
    );
  }

  render() {
    let sexosItem = this.state.sexos.map((v) => {
      return <Picker.Item key={v.key} value={v.key} label={v.nome} />;
    });

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome:"
          underlineColorAndroid="transparent"
          onChangeText={this.pegaNome}
        />

        <Text> Seu sexo: </Text>

        <Picker
          selectedValue={this.state.sexo}
          onValueChange={(itemValue) => this.setState({ sexo: itemValue })}
        >
          {sexosItem}
        </Picker>

        <Slider
          minimumValue={0}
          maximumValue={1000}
          onValueChange={(valorSelecionado) =>
            this.setState({ valor: valorSelecionado })
          }
          value={this.state.valor}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#FF0000"
        />
        <Text style={{ textAlign: "center", fontSize: 30 }}>
          Limite da conta: ${this.state.valor.toFixed(1)}
        </Text>

        <Switch
          value={this.state.status}
          onValueChange={(valorSwitch) =>
            this.setState({ status: valorSwitch })
          }
          thumbColor="#FF0000"
        />
        <Text style={{ textAlign: "center", fontSize: 30 }}>
          {this.state.status ? "Casado" : "Solteiro"}
        </Text>

        <Button title="Abrir Conta" onPress={this.abrirConta} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginTop: 90,
    height: 45,
    borderWwidth: 1,
    borderColor: "#222",
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: "center",
    fontSize: 25,
  },
});
export default App;
