import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.outer}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  container: {
    height: (height * 9) / 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
