import { StyleSheet, View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
