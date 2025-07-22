import React from "react";
import { Image, Text, View } from "react-native";

type UserSummaryHeaderProps = {
  avatar?: string;
  name?: string;
  username: string;
  totalReviews: number;
  averageRating: number;
  totalLikes: number;
  textColor: string;
  cardBackgroundColor?: string;
};

export default function UserSummaryHeader({
  avatar,
  name = "Angel Canete",
  username,
  totalReviews,
  averageRating,
  totalLikes,
  textColor,
  cardBackgroundColor,
}: UserSummaryHeaderProps) {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: cardBackgroundColor,
        borderStyle: "dotted",
        borderColor: textColor,
        borderRadius: 12,
        padding: 20,
        marginBottom: 24,
      }}
    >
      <Image
        source={{ uri: avatar || "https://i.pravatar.cc/100" }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          marginBottom: 12,
        }}
      />

      <Text
        style={{
          fontSize: 16,
          fontFamily: "Poppins_700Bold",
          color: textColor,
          marginBottom: 4,
        }}
      >
        {name}
      </Text>

      <Text
        style={{
          fontSize: 14,
          fontFamily: "Poppins_400Regular",
          color: textColor,
          opacity: 0.7,
          marginBottom: 8,
        }}
      >
        @{username}
      </Text>

      <Text
        style={{
          fontSize: 12,
          fontFamily: "Poppins_400Regular",
          color: textColor,
          opacity: 0.8,
          textAlign: "center",
        }}
      >
        {totalReviews} reviews · Avg. ★{averageRating.toFixed(1)} · {totalLikes} likes
      </Text>
    </View>
  );
}
