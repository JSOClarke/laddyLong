import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MonthIndex() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Month Index</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6D57FC",
  },
});
