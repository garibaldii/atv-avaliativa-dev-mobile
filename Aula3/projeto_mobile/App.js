import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import imagem from "./assets/tgb.jpg";
import imagem2 from "./assets/bomber.jpg";

export default function App() {
  let jogo1 = "The Great Battle IV";
  let jogo2 = "Super Bomberman 5";

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Jogos</Text>
      <StatusBar style="auto" />
      <Image
        source={imagem}
        style={{ width: 350, height: 250, marginTop: 30 }}
      />
      <Text
        style={{
          fontSize: 40,
          color: "#f11",
          marginTop: 20,
          textDecorationLine: "underline",
        }}
      >
        {jogo1}
      </Text>
      <Image
        source={imagem2}
        style={{ width: 350, height: 250, marginTop: 50 }}
      />
      <Text
        style={{
          fontSize: 40,
          color: "#f11",
          marginTop: 20,
          textDecorationLine: "underline",
        }}
      >
        {jogo2}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#259",
    alignItems: "center",
    justifyContent: "center",
  },
});
