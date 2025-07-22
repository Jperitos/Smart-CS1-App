// components/section/ReviewSpotlightSection.tsx
import React from "react";
import { ScrollView, Text, View } from "react-native";
import ReviewSpotlightCard from "../card/ReviewSpotlightCard";
import { reviewSpotlight } from "../data/reviewSpotlightData";

type ReviewSpotlightSectionProps = {
  textColor?: string;
  title?: string;
  cardBackgroundColor?: string;
};

export default function ReviewSpotlightSection({
  textColor,
  title = "Review Spotlight",
  cardBackgroundColor,
}: ReviewSpotlightSectionProps) {
  return (
    <View style={{ marginVertical: 16 }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Poppins_700Bold",
          marginBottom: 16,
          color: textColor,
        }}
      >
        {title}
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {reviewSpotlight.map((item) => (
          <ReviewSpotlightCard
            key={`spotlight-${item.id}`}
            albumTitle={item.albumTitle}
            albumArt={item.albumArt}
            reviewer={item.reviewer}
            excerpt={item.excerpt}
            fullReview={item.fullReview}
            textColor={textColor}
            cardBackgroundColor={cardBackgroundColor}
          />
        ))}
      </ScrollView>
    </View>
  );
}
