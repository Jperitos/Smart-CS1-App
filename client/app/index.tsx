import { useThemeColor } from "@/hooks/useThemeColor";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Image, Pressable, Text, View, useWindowDimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import API from "@/utils/api";
import * as SecureStore from "expo-secure-store";
export default function WelcomeScreen() {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { height } = useWindowDimensions();
const [isHovered, setIsHovered] = useState(false);
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const subText = useThemeColor({}, "subText");
  const buttonText = useThemeColor({}, "buttonText");
  const button = useThemeColor({}, "button");

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    testConnection();
  }, [index]);
  useEffect(() => {
    const checkAuth = async () => {
      const token = await SecureStore.getItemAsync("token");
      if (token) {
        router.replace("/");
      }
    };
    checkAuth();
  }, []);

  const testConnection = async () => {
    try {
      const res = await API.get("/ping");
      console.log("✅ Connection success:", res.data.message);
    } catch (err) {
      console.error("❌ Connection failed:");
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor }}>
      <Animated.View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 24,
          opacity: fadeAnim,
        }}
      >
        <View
          style={{
            position: "absolute",
            alignItems: "center",
            top: height * 0.1,
          }}
        >
          <Image
            source={require("../assets/icons/logo-final2.png")}
            style={{ width: 250, height: 250, resizeMode: "contain", marginTop: 50 }}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: height * 0.25,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Poppins_700Bold",
              marginBottom: 10,
              textAlign: "center",
               letterSpacing: 3,
              color: textColor,
            }}
          >
           WELCOME
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins_400Regular",
              lineHeight: 24,
              textAlign: "center",
              color: subText,
            }}
          >
            Where technology meets {"\n"} cleanliness
          </Text>
        <Pressable
            onPress={() => router.push("/auth/login")}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 28,
              borderRadius: 50,
              alignItems: "center",
              marginTop: 20,
              backgroundColor: "#347433", 
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins_400Regular",
                color: buttonText,
              }}
            >
              Sign In
            </Text>
          </Pressable>

        </View>

        <View
          style={{
            position: "absolute",
            bottom: 40,
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontFamily: "Poppins_700Bold",
              letterSpacing: 4,
              color: textColor,
            }}
          >
            ECOBIN
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins_300Regular",
              marginTop: 2,
              color: subText,
            }}
          >
            City of Naga, Cebu
          </Text>
        </View>
      </Animated.View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 40,
          gap: 6,
        }}
      >
        {[0, 1].map((i) =>
          index === i ? (
            <View
              key={i}
              style={{
                width: 20,
                height: 4,
                borderRadius: 2,
                backgroundColor: "gray",
              }}
            />
          ) : null
        )}
      </View>
    </View>
  );
}
