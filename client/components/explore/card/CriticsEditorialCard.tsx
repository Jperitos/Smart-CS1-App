import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type CriticsEditorialCardProps = {
  id: number;
  label: string;
  title: string;
  subtitle?: string;
  image?: string;
  textColor?: string;
  cardBackgroundColor?: string;
  onPress?: () => void;
};

export default function CriticsEditorialCard({
  label,
  title,
  subtitle,
  image,
  textColor,
  cardBackgroundColor,
  onPress,
}: CriticsEditorialCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: cardBackgroundColor,
        borderRadius: 16,
        padding: 16,
        marginRight: 16,
        width: 260,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 3,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 12,
            marginRight: 12,
            backgroundColor: "#ccc",
          }}
        />
      )}
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 12,
            color: "#888",
            fontFamily: "Poppins_500Medium",
            marginBottom: 4,
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Poppins_700Bold",
            color: textColor,
          }}
          numberOfLines={1}
        >
          {title}
        </Text>
        {subtitle && (
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins_400Regular",
              color: "#666",
              marginTop: 2,
            }}
            numberOfLines={1}
          >
            {subtitle}
          </Text>
        )}
      </View>
    </Pressable>
  );
}
