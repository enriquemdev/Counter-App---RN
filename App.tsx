import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <Pressable
        style={styles.plusButton}
        onPress={() => setCount((current) => current + 1)}
        onLongPress={() => setCount(0)}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>+1</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  counter: {
    fontSize: 120,
    fontWeight: 100,
  },

  plusButton: {
    borderRadius: 20,
    backgroundColor: "#65558F",
    padding: 20,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
