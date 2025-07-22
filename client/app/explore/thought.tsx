import Header from "@/app/header";
import LatestReviewCard, { LatestReview } from "@/components/index/card/LatestReviewCard";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { FlatList, ScrollView, Text } from "react-native";

const thoughtReviews: LatestReview[] = [
  {
    id: "101",
    user: "deepvibes",
    title: "Echoes of Silence",
    albumCover: "https://i.scdn.co/image/ab67616d0000b27336fb79728dbb379579cef97e",
    rating: 8.6,
    comment: "An introspective journey through loneliness and resilience.",
  },
  {
    id: "102",
    user: "soulnotes",
    title: "Broken Glass",
    albumCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DhgrFkHHOug7aEuaMwJB_oAZuTb2lw6siA&s",
    rating: 9.0,
    comment: "Each track reflects emotional fractures with clarity.",
  },
  {
    id: "103",
    user: "artsyears",
    title: "The Quiet Room",
    albumCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhfousxAMneHKTn304Xrm_MwmNobo8noP1w&s",
    rating: 8.3,
    comment: "A slow, burning meditation on memory and loss.",
  },
  {
    id: "104",
    user: "mindshift",
    title: "Mind Patterns",
    albumCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDF7F50T3Okfl7TB_oxAKxMLnvDmOZqPa6sA&s",
    rating: 9.1,
    comment: "Sharp, cerebral lyrics paired with haunting beats.",
  },
  {
    id: "105",
    user: "sonicpoet",
    title: "Words Unsaid",
    albumCover: "https://i.scdn.co/image/ab67616d00001e024464c4fde8c5c1c7993e0eee",
    rating: 7.9,
    comment: "Minimal yet powerful. Silence says more than sound.",
  },
  {
    id: "106",
    user: "dawnjournal",
    title: "Fading Horizons",
    albumCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2wmSHDWR-9vJcPwlJz9uSrkloyrnECH3SCg&s",
    rating: 8.4,
    comment: "Sounds that feel like the edges of dreams.",
  },
  {
    id: "107",
    user: "reflector",
    title: "Grey Canvas",
    albumCover: "https://i.scdn.co/image/ab67616d00001e0288e3cda6d29b2552d4d6bc43",
    rating: 8.8,
    comment: "Melancholy expressed in vibrant sonic brushstrokes.",
  },
  {
    id: "108",
    user: "theoryhead",
    title: "Spiral Logic",
    albumCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbIvmmMeVkRJ3g_GJlZqWrU1g47IG_HeIYA&s",
    rating: 9.5,
    comment: "Abstract lyrics open doors to personal interpretation.",
  },
  {
    id: "109",
    user: "nightmuse",
    title: "Lunar Notes",
    albumCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7_Xjpj7H3wyKZzvmICmAL5ve34r0PRLs2Q&s",
    rating: 8.0,
    comment: "A gentle yet jarring look at existential weight.",
  },
  {
    id: "110",
    user: "philosonic",
    title: "Theory of Sound",
    albumCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wOtp1exnA65a6kqDDIRM9ECPwdgCcCbDIg&s",
    rating: 9.2,
    comment: "When lyrics and harmonies provoke reflection beyond music.",
  },
];

export default function ThoughtProvokingScreen() {
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
      <Header title="Thought-Provoking" textColor={textColor} />

      <Text
        style={{
          fontSize: 22,
          fontFamily: "Poppins_700Bold",
          color: textColor,
          marginBottom: 6,
        }}
      >
        Thought-Provoking Reviews
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Poppins_400Regular",
          color: subText,
          marginBottom: 20,
        }}
      >
        These reviews dig deeper — exploring emotional themes, abstract concepts, and personal reflection in music.
      </Text>

      <FlatList
        data={thoughtReviews}
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
