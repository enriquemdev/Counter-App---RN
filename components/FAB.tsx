import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

interface Props {
  label: string;
  position?: "left" | "right";

  // Methods
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  label,
  onPress,
  onLongPress,
  position = "right",
}: Props) {
  return (
    <Pressable
      style={[
        styles.floatingButton,
        position === "left" ? styles.positionLeft : styles.positionRight,
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    borderRadius: 20,
    backgroundColor: "#65558F",
    padding: 20,
    position: "absolute",
    bottom: 30,
    // right: 30,

    /// Shadow styles
    shadowColor: "#000", // Only this shadow prop works on both platforms

    // ios only
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    // Android equivalent
    elevation: 3,
  },

  positionRight: {
    right: 30,
  },

  positionLeft: {
    left: 30,
  },
});
