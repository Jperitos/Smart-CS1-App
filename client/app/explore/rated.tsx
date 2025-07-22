import Header from "@/app/header";
import TrendingReviewedAlbumCard from "@/components/explore/card/TrendingReviewedAlbumCard";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { FlatList, Text, View } from "react-native";

const topRatedAlbums = [
  {
    id: 1,
    title: "Blonde",
    image: "https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526",
    rating: "9.5",
    artist: "Frank Ocean",
    reviewCount: 320,
    genre: "R&B",
  },
  {
    id: 2,
    title: "1989 (Taylor's Version)",
    image: "https://i.scdn.co/image/ab67616d00001e02904445d70d04eb24d6bb79ac",
    rating: "9.2",
    artist: "Taylor Swift",
    reviewCount: 410,
    genre: "Pop",
  },
  {
    id: 3,
    title: "To Pimp a Butterfly",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROybJAzKdpNm9ryLpUrl9KAlHIgm1dzTGmCg&s",
    rating: "9.8",
    artist: "Kendrick Lamar",
    reviewCount: 390,
    genre: "Hip-Hop",
  },
  {
    id: 4,
    title: "Random Access Memories",
    image: "https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937",
    rating: "9.0",
    artist: "Daft Punk",
    reviewCount: 290,
    genre: "Electronic",
  },
  {
    id: 5,
    title: "In Rainbows",
    image: "https://i.scdn.co/image/ab67616d00001e02de3c04b5fc750b68899b20a9",
    rating: "9.3",
    artist: "Radiohead",
    reviewCount: 370,
    genre: "Alternative",
  },
  {
    id: 6,
    title: "Lemonade",
    image: "https://i.scdn.co/image/ab67616d00001e0289992f4d7d4ab94937bf9e23",
    rating: "9.4",
    artist: "Beyoncé",
    reviewCount: 345,
    genre: "Pop",
  },
  {
    id: 7,
    title: "DAMN.",
    image: "https://i.scdn.co/image/ab67616d0000b273add9eb25744782c3717c9368",
    rating: "9.1",
    artist: "Kendrick Lamar",
    reviewCount: 280,
    genre: "Hip-Hop",
  },
  {
    id: 8,
    title: "Melodrama",
    image: "https://i.scdn.co/image/ab67616d0000b273f8553e18a11209d4becd0336",
    rating: "9.2",
    artist: "Lorde",
    reviewCount: 330,
    genre: "Pop",
  },
  {
    id: 9,
    title: "Good Kid, M.A.A.D City",
    image: "https://i.scdn.co/image/ab67616d0000b273d58e537cea05c2156792c53d",
    rating: "9.7",
    artist: "Kendrick Lamar",
    reviewCount: 410,
    genre: "Hip-Hop",
  },
  {
    id: 10,
    title: "Norman F***ing Rockwell!",
    image: "https://i.scdn.co/image/ab67616d00001e02879e9318cb9f4e05ee552ac9",
    rating: "9.3",
    artist: "Lana Del Rey",
    reviewCount: 290,
    genre: "Indie",
  },
];

export default function TopRatedScreen() {
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
        paddingTop: 20,
        paddingHorizontal: 20,
      }}
    >
      <Header title="Top Rated Albums" textColor={textColor} />

      <Text
        style={{
          fontSize: 22,
          fontFamily: "Poppins_700Bold",
          color: textColor,
          marginBottom: 6,
        }}
      >
        Discover Critically Acclaimed Albums
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: "#888",
          fontFamily: "Poppins_400Regular",
          marginBottom: 20,
        }}
      >
        Explore the highest-rated albums according to our user community. These picks showcase outstanding artistry,
        lyrics, and production across genres.
      </Text>

      <FlatList
        data={topRatedAlbums}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <TrendingReviewedAlbumCard {...item} textColor={textColor} cardBackgroundColor={cardBackgroundColor} />
        )}
      />
    </View>
  );
}
