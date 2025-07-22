import React from "react";
import { Text, View } from "react-native";
import TopReviewCard from "../card/top_review/TopReviewCard";
type TopReview = {
   id: number;
  title: string;
  content: string;
  author?: string;
  image: string;
  rating?: number;
};

type TopReviewsSectionProps = {
  review: TopReview[];
  textColor?: string;
  subText?: string;
  cardBackgroundColor?: string;
};

export default function TopReviewsSection({
  review,
  textColor,
  subText,
  cardBackgroundColor,
}: TopReviewsSectionProps) {
  const top = review[0];

  if (!top) return null;

  return (
    <View style={{ marginTop: 0 }}>
      <View
        style={{
          marginTop: 10,
          marginBottom: 18,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontFamily: "Poppins_700Bold", color: textColor }}>
          Highlights
        </Text>
        {/* <Text style={{ fontSize: 15, fontFamily: "Poppins_500Medium", color: subText }}>
          See all
        </Text> */}
      </View>

      <TopReviewCard review={top} cardBackgroundColor={cardBackgroundColor} />
    </View>
  );
}
