import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Weather from "./src/pages/index";
import Favorites from "./src/pages/favorites";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer >
        <Tab.Navigator >
          <Tab.Screen name="ECV Weather APP" component={Weather} />
          <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFD5D2",
    flex: 1,
  },
});
