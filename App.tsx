import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FAB from "./components/FAB";

export default function App() {
  const [count, setCount] = useState(0);

  const setZero = () => setCount(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      {/* <Pressable
        style={styles.plusButton}
        onPress={() => setCount((current) => current + 1)}
        onLongPress={() => setCount(0)}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>+1</Text>
      </Pressable> */}

      <FAB
        label="-1"
        onPress={() => setCount((current) => current - 1)}
        onLongPress={setZero}
        position="left"
      />

      <FAB
        label="+1"
        onPress={() => setCount((current) => current + 1)}
        onLongPress={setZero}
        position="right"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
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
    bottom: 30,
    right: 30,

    /// Shadow styles
    shadowColor: "#000", // Only this shadow prop works on both platforms

    // ios only
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    // Android equivalent
    elevation: 3,
  },
});
