import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Proptypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Clouds: {
    iconName: "weather-hail",
    gradient: ["#4DA0b0", "#D39D38"],
  },
  Thunderstorm: {
    iconName: "weather-hail",
    gradient: ["#4DA0b0", "#D39D38"],
  },
  Rain: {
    iconName: "weather-hail",
    gradient: ["#4DA0b0", "#D39D38"],
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#4DA0b0", "#D39D38"],
  },
  Clear: {
    iconName: "weather-hail",
    gradient: ["#4DA0b0", "#D39D38"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{Math.round(temp)}℃</Text>
      </View>
      <View style={styles.halfContainer} />
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: Proptypes.number.isRequired,
  condition: Proptypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
