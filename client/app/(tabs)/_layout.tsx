import { IconSymbol } from "@/components/ui/IconSymbol";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Tabs } from "expo-router";
import React from "react";
import { Dimensions, View, ViewStyle } from "react-native";

export default function TabLayout() {
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");

  const { width } = Dimensions.get("window");
  const tabWidth = width * 1;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: textColor,
        tabBarItemStyle: {
          paddingHorizontal: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Poppins_700Regular",
          marginTop: 4,
        },

        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: (width - tabWidth) / 2,
          width: tabWidth,
          backgroundColor: backgroundColor,
          borderRadius: 24,
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 10,
        } as ViewStyle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#eae6fb" : "transparent",
                padding: 6,
                marginBottom: 5,
                borderRadius: 12,
              }}
            >
              <IconSymbol size={focused ? 25 : 22} name="house.fill" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#eae6fb" : "transparent",
                padding: 6,
                borderRadius: 12,
                marginBottom: 5,
              }}
            >
              <IconSymbol size={focused ? 25 : 22} name="paperplane.fill" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="reviews"
        options={{
          title: "Reviews",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#eae6fb" : "transparent",
                padding: 6,
                borderRadius: 12,
                marginBottom: 5,
              }}
            >
              <IconSymbol size={focused ? 25 : 22} name="text.bubble.fill" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#eae6fb" : "transparent",
                padding: 6,
                borderRadius: 12,
                marginBottom: 5,
              }}
            >
              <IconSymbol size={focused ? 25 : 22} name="gearshape.fill" color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
