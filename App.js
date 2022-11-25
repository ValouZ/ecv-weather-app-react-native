import { StyleSheet, View } from "react-native";
import Weather from "./src";

export default function App() {
  return (
    <View style={styles.container}>
      <Weather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFD5D2",
    flex: 1,
  },
});
