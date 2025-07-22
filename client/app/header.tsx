import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type HeaderProps = {
  title: string;
  textColor?: string;
  showBack?: boolean;
  right?: React.ReactNode;
};

export default function Header({ title, textColor = "#000", showBack = true, right }: HeaderProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        paddingTop: 30,
        marginBlock: 20,
      }}
    >
      {showBack ? (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color={textColor} />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} />
      )}

      <Text
        style={{
          fontSize: 18,
          fontFamily: "Poppins_700Bold",
          color: textColor,
          textAlign: "center",
          flex: 1,
        }}
      >
        {title}
      </Text>

      {/* Right: Optional Slot */}
      <View style={{ width: 24 }}>{right}</View>
    </View>
  );
}
