import Header from "@/app/header";
import LatestReviewCard, { LatestReview } from "@/components/index/card/LatestReviewCard";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { FlatList, ScrollView, Text } from "react-native";

const latestReviews: LatestReview[] = [
  {
    id: "1",
    user: "alexwave",
    title: "Ocean Blvd by Lana",
    albumCover: "https://i.scdn.co/image/ab67616d00001e0259ae8cf65d498afdd5585634",
    rating: 7.8,
    comment: "Lana at her most poetic. Raw and surreal.",
  },
  {
    id: "2",
    user: "noisepunk",
    title: "Amnesia Realm",
    albumCover: "https://i.ytimg.com/vi/wy6FqKThPEw/maxresdefault.jpg",
    rating: 6.5,
    comment: "Heavy vibes, a little messy but bold.",
  },
  {
    id: "3",
    user: "vibesoul",
    title: "Solar Vision",
    albumCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5IY8_gN-D04f81kD_Iajan7A6Td6SOUw0g&s",
    rating: 9.2,
    comment: "Every track feels like a sunrise.",
  },
  {
    id: "4",
    user: "synthlvr",
    title: "Neon Dreams",
    albumCover: "https://i.scdn.co/image/ab67616d00001e02e706ab62461ff4ad4bd4b7c1",
    rating: 8.1,
    comment: "Retro synths meet modern emotion.",
  },
  {
    id: "5",
    user: "altkid",
    title: "Static Youth",
    albumCover: "https://i.scdn.co/image/ab67616d0000b27332a481e83a49accaa1840fa0",
    rating: 7.0,
    comment: "Raw indie rock with bite.",
  },
  {
    id: "6",
    user: "rnbjournal",
    title: "Moonlight Feelings",
    albumCover: "https://i.scdn.co/image/ab67616d0000b273f02de805e944d3bb7c9bc94f",
    rating: 8.9,
    comment: "Velvety vocals, smooth production.",
  },
  {
    id: "7",
    user: "euphonic",
    title: "The Velvet Shore",
    albumCover:
      "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/021kgv88TTZLEQtqctBNMN/en",
    rating: 6.7,
    comment: "A slow burn, but a beauty.",
  },
  {
    id: "8",
    user: "jazzrevue",
    title: "Metropolis Swing",
    albumCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDyASpRayO0hTwWN4e3fk7MBiBCqTt_rYbQ&s",
    rating: 7.5,
    comment: "Classic horns, modern edge.",
  },
  {
    id: "9",
    user: "undergroundsoul",
    title: "Broken Clouds",
    albumCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9vQbVD_O9cXgdTM1mUxZxPVQXjDVybhjfg&s",
    rating: 7.3,
    comment: "Heartfelt and haunting.",
  },
  {
    id: "10",
    user: "beatguru",
    title: "Pulse Theory",
    albumCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyoYXi_kKG7c_3MMrbLQajcAswMysPPjKWQ&s",
    rating: 9.0,
    comment: "Best beat production this year.",
  },
];

export default function NewReviewsScreen() {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const backgroundColor = useThemeColor({}, "background");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const border = useThemeColor({}, "border");

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
        paddingTop: 40,
        paddingHorizontal: 20,
      }}
    >
      <Header title="New Reviews" textColor={textColor} />

      <Text
        style={{
          fontSize: 22,
          fontFamily: "Poppins_700Bold",
          color: textColor,
          marginBottom: 6,
        }}
      >
        Latest Community Reviews
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Poppins_400Regular",
          color: subText,
          marginBottom: 20,
        }}
      >
        See what music lovers have to say about the newest releases and hidden gems.
      </Text>

      <FlatList
        data={latestReviews}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <LatestReviewCard
            review={item}
            textColor={textColor}
            cardBackgroundColor={cardBackgroundColor}
            border={border}
          />
        )}
      />
    </ScrollView>
  );
}
