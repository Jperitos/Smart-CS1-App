import { useState } from "react";
import { Alert } from "react-native";
import axios from "axios";
import { router } from "expo-router";
import API from "@/utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useLogin() {
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    if (!email || !password) {
      Alert.alert("Error", "Email and password are required.");
      return;
    }

    try {
      setLoading(true);
      const res = await API.post("/login", { email, password });

      Alert.alert("Success", "Login successful!", [
        {
          text: "Continue",
          onPress: () => router.replace("/(tabs)"),
        },
      ]);

      await AsyncStorage.setItem("token", res.data.token);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        Alert.alert("Login Failed", error.response?.data?.error || "Invalid credentials.");
      } else {
        Alert.alert("Error", "Unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
}
