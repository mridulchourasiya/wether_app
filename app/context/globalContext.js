"use client";
import axios from "axios";
import React, {
  children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({});

  // Air quality for index
  const [airQuality, setAirQuality] = useState({});
  const fetchForecast = async () => {
    try {
      const res = await axios.get("api/weather");
      setForecast(res.data);
    } catch (error) {
      console.log("error fatching forecast data :", error.message);
    }
  };

  // Air quality index
  const fetchAirQuality = async () => {
    try {
      const res = await axios.get("api/pollution");

      setAirQuality(res.data);
    } catch (error) {
      console.log("error fatching Air quality data :", error.message);
    }
  };
  useEffect(() => {
    fetchForecast();
    fetchAirQuality();
  }, []);

  return (
    <GlobalContext.Provider value={{ forecast, airQuality }}>
      <GlobalContextUpdate.Provider>{children}</GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
