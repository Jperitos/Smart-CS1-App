import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text } from "react-native";

type CardProps = {
  id: number;
  image: string;
  title: string;
  rating: string;
  textColor?: string;
};

export default function TrendingMusicCard({ id, image, title, rating, textColor }: CardProps) {
  const goToDetail = () => {
    router.push({
      pathname: "/screens/music/[id]",
      params: { id: id.toString() },
    });
  };

  return (
    <Pressable
      onPress={goToDetail}
      style={{
        marginRight: 16,
        width: 120,
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 12,
          marginBottom: 8,
          backgroundColor: "#f0f0f0",
        }}
      />
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Poppins_700Bold",
          textAlign: "center",
          color: textColor,
        }}
        numberOfLines={1}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: "#888",
          fontFamily: "Poppins_400Regular",
        }}
      >
        {rating}
      </Text>
    </Pressable>
  );
}
