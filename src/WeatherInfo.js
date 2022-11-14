import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";

const WeatherInfo = ({ weatherData }) => {
  const {
    name,
    visibility,
    weather: [{ icon, description }],
    main: { temp, humidity, feels_like },
    wind: { speed },
    sys: { sunrise, sunset },
  } = weatherData;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.logo}>
        <Image style={styles.largeIcon} source={{ uri: `https://openweathermap.org/img/wn/${icon}.png` }} />
        <Text style={styles.currentTemp}>{temp} °C</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </SafeAreaView>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: "#e96e50",
    marginTop: 10,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  largeIcon: {
    width: 100,
    height: 100,
  },
  currentTemp: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
