import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";

const API_KEY = "cdbc0f1323ad7ab8d46eeb3d29215fe1";

const weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // add a function to fetch the weather data
  const fetchWeather = async (cityname) => {
    try {
      setLoaded(false);
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
    fetchWeather("Carrieres-sur-Seine");
  }, []);

  // if the data is not loaded, show loading message
  if (!loaded) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather app</Text>
      </View>
      <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeather}/>
    </View>
  );
};

export default weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf5db",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c5d2ef",
    height: 80,
  },
  headerTitle: {
    fontSize: 29,
    fontWeight: "bold",
  },
});
