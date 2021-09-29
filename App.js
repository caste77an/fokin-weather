import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "23693b921e547d132d970a62e657f566";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    await console.log(data);
  };
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // Send to API and get Weather
      this.getWeather(latitude, longitude);

      this.setState({ isLoading: true });
    } catch (error) {
      Alert.alert("Can't find you", "so sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
