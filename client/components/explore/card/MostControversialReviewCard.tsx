import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text } from "react-native";

type MostControversialReviewCardProps = {
  id: number;
  title: string;
  artist: string;
  image: string;
  averageRating: number;
  reviewCount: number;
  textColor?: string;
  cardBackgroundColor?: string;
};

export default function MostControversialReviewCard({
  id,
  title,
  artist,
  image,
  averageRating,
  reviewCount,
  textColor,
  cardBackgroundColor,
}: MostControversialReviewCardProps) {
  return (
    <Pressable
      onPress={() => router.push({ pathname: "/music/[id]", params: { id: id.toString() } })}
      style={{
        backgroundColor: cardBackgroundColor,
        borderRadius: 16,
        padding: 12,
        marginRight: 16,
        width: 240,
        shadowColor: "#000",
        shadowOpacity: 0.03,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          width: "100%",
          height: 120,
          borderRadius: 12,
          marginBottom: 12,
          backgroundColor: "#ccc",
        }}
      />
      <Text
        numberOfLines={1}
        style={{
          fontSize: 16,
          fontFamily: "Poppins_700Bold",
          color: textColor,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontFamily: "Poppins_500Medium",
          color: "#666",
          marginBottom: 6,
        }}
      >
        {artist}
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontFamily: "Poppins_500Medium",
          color: "#888",
        }}
      >
        ★ {averageRating.toFixed(1)} · {reviewCount} reviews
      </Text>
    </Pressable>
  );
}
