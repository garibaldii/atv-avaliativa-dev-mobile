import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import Texto from "./texto";

import topo from "../../assets/topo.jpg";

const width = Dimensions.get("screen").width;

export default function Topo({ titulo }) {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});