import React from "react";
import { Pressable, Text } from "react-native";

type ExploreCategoryCardProps = {
  emoji: string;
  label: string;
  onPress: () => void;
  textColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
};

export default function ExploreCategoryCard({
  emoji,
  label,
  onPress,
  textColor,
  cardBackgroundColor,
  backgroundColor,
}: ExploreCategoryCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: cardBackgroundColor,
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderRadius: 16,
        margin: 6,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        minHeight: 80,
        elevation: 2,
      }}
    >
      <Text style={{ fontSize: 24 }}>{emoji}</Text>
      <Text
        style={{
          fontFamily: "Poppins_600SemiBold",
          fontSize: 14,
          marginTop: 6,
          textAlign: "center",
          color: textColor,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
