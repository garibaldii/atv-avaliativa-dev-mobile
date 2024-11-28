import React from "react";
import { View, Text } from "react-native";
 
export default function DetailsScreen({ route }) {
  const { itemId } = route.params;
 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tela de detalhes</Text>
      <Text>Item Id: {itemId}</Text>
    </View>
  );
}