import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text } from "react-native";

type ArtistCardProps = {
  id: number;
  image: string;
  name: string;
  genre: string;
  textColor?: string;
};

export default function ArtistCarouselCard({ id, image, name, genre, textColor }: ArtistCardProps) {
  const goToDetail = () => {
    router.push({
      pathname: "/screens/artist/[id]",
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
          borderRadius: 100,
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
        {name}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: "#888",
          fontFamily: "Poppins_400Regular",
        }}
      >
        {genre}
      </Text>
    </Pressable>
  );
}
