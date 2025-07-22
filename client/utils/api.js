import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL + "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(async (config) => {
  const publicRoutes = ["/login", "/register", "/google-auth"];
  const shouldSkipAuth = publicRoutes.some((route) => config.url?.includes(route));

  if (shouldSkipAuth) {
    return config;
  }

  const token = await AsyncStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;
