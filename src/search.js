import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

const WeatherSearch = ({ fetchWeatherData }) => {
  const [cityName, setCityName] = useState("");
  return (
    <View style={style.searchBar}>
      <TextInput
        style={style.input}
        placeholder="Rechercher une ville"
        placeholderTextColor={"white"}
        value={cityName}
        onChangeText={(text) => setCityName(text)}
      />
      <EvilIcons
        name="search"
        size={28}
        color="black"
        onPress={() => fetchWeatherData(cityName)}
      />
    </View>
  );
};

export default WeatherSearch;

const style = StyleSheet.create({
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 50,
    paddingVertical: 5,
    borderRadius: 25,
    marginLeft: 25,
    paddingHorizontal: 35,
    backgroundColor: "#E5B9FF",
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: "100%",
    color: "white",
  },
});
