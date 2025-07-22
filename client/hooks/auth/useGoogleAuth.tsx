import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import { useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import axios from "axios";

WebBrowser.maybeCompleteAuthSession();

const redirectUri = AuthSession.makeRedirectUri({
  useProxy: false,
} as any);

export default function useGoogleAuth() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID,
    iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
    redirectUri,
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    if (response?.type === "success" && response.authentication?.accessToken) {
      handleGoogleLogin(response.authentication.accessToken);
    }
  }, [response]);

  const handleGoogleLogin = async (accessToken: string) => {
    try {
      const googleRes = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const user = googleRes.data;
      console.log("✅ Google user info:", user);

      const backendRes = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/api/google-auth`, {
        token: accessToken,
      });

      const data = backendRes.data;

      await AsyncStorage.setItem("token", data.token);
      Alert.alert("Success", "Logged in with Google!");
      router.replace("/(tabs)");
    } catch (err: any) {
      console.error("❌ Google Login Error:", err?.response?.data || err.message);
      Alert.alert("Login Failed", err?.response?.data?.error || "Unable to sign in with Google.");
    }
  };

  return { promptAsync, request };
}
