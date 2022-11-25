import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
// import WeatherSearch from "./search";

const WeatherInfo = ({ weatherData }) => {
  const {
    name,
    visibility,
    weather: [{ icon, description }],
    main: { temp, humidity, feels_like },
    wind: { speed },
    sys: { sunrise, sunset },
  } = weatherData;

  let sunsetTemp = new Date(sunset * 1000);
  let sunriseTemp = new Date(sunrise * 1000);

  return (
    <SafeAreaView style={styles.container}>
      {/* <WeatherSearch fetchWeatherData={fetchWeatherData} /> */}
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.largeIcon}
          source={{ uri: `https://openweathermap.org/img/wn/${icon}.png` }}
        />
        <Text style={styles.currentTemp}>{Math.round(temp)} °C</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.extraInfo}>
        <View style={styles.info}>
          <Text style={styles.infoTextMain}>{Math.round(feels_like)} °C</Text>
          <Text style={styles.infoText}>Feels like</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoTextMain}>{humidity} %</Text>
          <Text style={styles.infoText}>Humidity</Text>
        </View>
      </View>
      <View style={styles.extraInfo}>
        <View style={styles.info}>
          <Text style={styles.infoTextMain}>{visibility / 1000} km</Text>
          <Text style={styles.infoText}>Visibility</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoTextMain}>{speed} m/s</Text>
          <Text style={styles.infoText}>Wind Speed</Text>
        </View>
      </View>
      <View style={styles.extraInfo}>
        <View style={styles.info}>
          <Text style={styles.infoTextMain}>
            {sunriseTemp.toLocaleTimeString()}
          </Text>
          <Text style={styles.infoText}>Sunrise</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoTextMain}>
            {sunsetTemp.toLocaleTimeString()}
          </Text>
          <Text style={styles.infoText}>Sunset</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: "#FFD5D2",
    height: "100%",
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 42,
    fontWeight: "bold",
    color: "#FFFFFF",
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
    textTransform: "capitalize",
    marginBottom: 10,
  },
  extraInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  info: {
    width: Dimensions.get("window").width / 2.5,
    backgroundColor: "#E5B9FF",
    padding: 10,
    borderRadius: 10,
    justifyContent: "space-around",
    boxShadow: "0 0 30px 0 rgba(0,0,0,0.3)",
  },
  infoTextMain: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  infoText: {
    textAlign: "center",
    fontSize: 18,
    fontStyle: "italic",
    color: "white",
  },
  favorite: {
    marginTop: 16,
  },
});
