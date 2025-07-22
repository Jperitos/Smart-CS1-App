import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type TrendingReviewedAlbumCardProps = {
  id: number;
  title: string;
  image: string;
  rating: string;
  textColor?: string;
  artist: string;
  reviewCount: number;
  genre?: string;
  cardBackgroundColor?: string;
};

export default function TrendingReviewedAlbumCard({
  id,
  title,
  image,
  rating,
  textColor,
  artist,
  reviewCount,
  genre,
  cardBackgroundColor,
}: TrendingReviewedAlbumCardProps) {
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
        backgroundColor: cardBackgroundColor,
        borderRadius: 16,
        padding: 12,
        marginBottom: 16,
        width: 180,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          width: "100%",
          height: 120,
          borderRadius: 12,
          backgroundColor: "#ddd",
          marginBottom: 8,
        }}
        resizeMode="cover"
      />

      <Text
        numberOfLines={1}
        style={{
          fontSize: 14,
          fontFamily: "Poppins_700Bold",
          color: textColor,
        }}
      >
        {title}
      </Text>

      <Text
        numberOfLines={1}
        style={{
          fontSize: 13,
          fontFamily: "Poppins_500Medium",
          color: "#666",
        }}
      >
        by {artist}
      </Text>

      <Text
        style={{
          fontSize: 12,
          fontFamily: "Poppins_400Regular",
          color: "#888",
          marginTop: 2,
        }}
      >
        {rating} · {reviewCount} reviews
      </Text>

      {genre && (
        <View
          style={{
            marginTop: 6,
            paddingVertical: 2,
            paddingHorizontal: 8,
            backgroundColor: "#eee",
            borderRadius: 12,
            alignSelf: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: 11,
              fontFamily: "Poppins_500Medium",
              color: "#555",
            }}
          >
            {genre}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
