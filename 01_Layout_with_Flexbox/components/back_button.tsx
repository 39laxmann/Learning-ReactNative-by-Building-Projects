import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export function BackButton() {
  return (
    <TouchableOpacity onPress={() => router.back()} style={styles.container}>
      <Ionicons name="chevron-back" color="#000000" size={32} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
