import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroScreen from "./screen/CadastroScreen";
import ConsultaScreen from "./screen/ConsultaScreen";
import HomeScreen from "./screen/HomeScreen";
import DeleteScreen from "./screen/DeleteScreen";
import AtualizacaoScreen from "./screen/AtualizacaoScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Página Inicial" }}
        />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Consulta" component={ConsultaScreen} />
        <Stack.Screen name="Deletar" component={DeleteScreen} />
        <Stack.Screen name="Atualizacao" component={AtualizacaoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;