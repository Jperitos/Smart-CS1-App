import Header from "@/app/header";
import EditorsChoiceCard from "@/components/index/card/EditorsChoiceCard";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { FlatList, ScrollView, Text } from "react-native";

const mostReviewedAlbums = [
  {
    id: 1,
    title: "After Hours",
    subtitle: "Haunting production and unforgettable performance.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQG0ZUlCgRFtm4FpXhtQX-_hMlngFw2NDqng&s",
  },
  {
    id: 2,
    title: "1989 (Taylor's Version)",
    subtitle: "An iconic pop comeback, fan-loved and critiqued alike.",
    image: "https://i.scdn.co/image/ab67616d00001e02904445d70d04eb24d6bb79ac",
  },
  {
    id: 3,
    title: "DAMN.",
    subtitle: "Kendrick’s layered lyricism meets bold production.",
    image: "https://i.scdn.co/image/ab67616d0000b273add9eb25744782c3717c9368",
  },
  {
    id: 4,
    title: "Blonde",
    subtitle: "Frank Ocean’s poetic masterpiece with surreal vibes.",
    image: "https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526",
  },
  {
    id: 5,
    title: "SOUR",
    subtitle: "Emotional pop debut that resonated with millions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUXnOiGW0s1Z7QKy1oh4Yf1XbrvvRV57S7CA&s",
  },
  {
    id: 6,
    title: "To Pimp a Butterfly",
    subtitle: "Social commentary wrapped in musical innovation.",
    image: "https://i.scdn.co/image/ab67616d00001e02cdb645498cd3d8a2db4d05e1",
  },
  {
    id: 7,
    title: "Midnights",
    subtitle: "Swift’s most atmospheric and intimate work yet.",
    image: "https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5",
  },
  {
    id: 8,
    title: "Future Nostalgia",
    subtitle: "Disco revival with crisp modern production.",
    image: "https://i.scdn.co/image/ab67616d00001e024bc66095f8a70bc4e6593f4f",
  },
  {
    id: 9,
    title: "Igor",
    subtitle: "Tyler’s genre-bending exploration of heartbreak.",
    image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84b3af4c9dc38e318b39608567",
  },
  {
    id: 10,
    title: "Melodrama",
    subtitle: "Lorde captures young adulthood in pop brilliance.",
    image: "https://i.scdn.co/image/ab67616d00001e02f8553e18a11209d4becd0336",
  },
];

export default function MostReviewedScreen() {
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
      <Header title="Most Reviewed" textColor={textColor} />

      <Text
        style={{
          fontSize: 22,
          fontFamily: "Poppins_700Bold",
          color: textColor,
          marginBottom: 6,
        }}
      >
        Top Reviewed Albums
      </Text>

      <Text
        style={{
          fontSize: 14,
          fontFamily: "Poppins_400Regular",
          color: subText,
          marginBottom: 20,
        }}
      >
        Albums that sparked the most conversations — highly reviewed by our music community.
      </Text>

      <FlatList
        data={mostReviewedAlbums}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ gap: 16, paddingBottom: 30 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <EditorsChoiceCard
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            textColor={textColor}
            subText={subText}
            border={border}
            backgroundColor={cardBackgroundColor}
          />
        )}
      />
    </ScrollView>
  );
}
