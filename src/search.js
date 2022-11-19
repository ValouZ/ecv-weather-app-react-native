import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

const WeatherSearch = ({ fetchWeatherData }) => {
  const [cityName, setCityName] = useState("");
  return (
    <View style={style.searchBar}>
      <TextInput style={style.input} placeholder="Rechercher une ville" value={cityName} onChangeText={(text) => setCityName(text)} />
      <EvilIcons name="search" size={28} color="black" onPress={() => fetchWeatherData(cityName)} />
    </View>
  );
};

export default WeatherSearch;

const style = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: "#9cd3d8",
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: "100%",
  },
});
