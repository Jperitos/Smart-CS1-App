import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
type GenreCardProps = {
  name: string;
  image: string;
  onPress?: () => void;
  textColor?: string;
  backgroundColor?: string;
  border?: string;
  reviewCount: number;
  subText?: string;
  cardBackgroundColor?: string;
};

export default function GenreCard({
  name,
  image,
  onPress,
  textColor,
  backgroundColor,
  border,
  subText,
  reviewCount,
  cardBackgroundColor,
}: GenreCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 16,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
        width: 160,
        height: 150,
        borderWidth: 1,
        borderColor: border,
        backgroundColor: cardBackgroundColor,
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          width: 60,
          height: 60,
          borderRadius: 12,
          marginBottom: 10,
        }}
        resizeMode="cover"
      />
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Poppins_500Medium",
          color: textColor,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Poppins_400Regular",
          color: textColor,
          marginTop: 4,
        }}
      >
        {reviewCount >= 1000 ? `${(reviewCount / 1000).toFixed(reviewCount % 1000 === 0 ? 0 : 1)}k` : reviewCount}{" "}
        reviews
      </Text>
    </TouchableOpacity>
  );
}
