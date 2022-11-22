import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherSearch from "./search";

const API_KEY = "cdbc0f1323ad7ab8d46eeb3d29215fe1";

const weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [cityName, setCityName] = useState("Paris");

  // add a function to fetch the weather data
  const fetchWeather = async (cityname) => {
    try {
      setLoaded(false);
      setCityName(cityname);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`);
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  // remember my city name
  useEffect(() => {
    fetchWeather(cityName);
  }, []);

  // if the data is not loaded, show loading message
  if (!loaded) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>ECV Weather app</Text>
        </View>
        <Text style={styles.more}>Loading {cityName} data...</Text>
      </View>
    );
  } else if (weatherData == null) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>ECV Weather app</Text>
        </View>
        <WeatherSearch fetchWeatherData={fetchWeather} />
        <Text style={styles.more}> {cityName} not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ECV Weather app</Text>
      </View>
      <WeatherSearch fetchWeatherData={fetchWeather} />
      <WeatherInfo weatherData={weatherData} />
    </View>
  );
};

export default weather;

const styles = StyleSheet.create({
  container: {},
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#85aff9",
    height: 80,
  },
  headerTitle: {
    fontSize: 29,
    fontWeight: "bold",
  },
  more: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
  },
});
