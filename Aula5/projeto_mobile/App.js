import React from "react";
import { StatusBar, SafeAreaView, Text, View } from "react-native";

import mock from "./src/mocks/cesta";
import Cesta from "./src/telas";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
