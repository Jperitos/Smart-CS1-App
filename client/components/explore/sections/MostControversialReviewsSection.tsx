import React from "react";
import { ScrollView, Text, View } from "react-native";
import MostControversialReviewCard from "../card/MostControversialReviewCard";
import { mostControversialReviews } from "../data/mostControversialReviewsData";

type MostControversialReviewsSectionProps = {
  textColor?: string;
  title?: string;
  cardBackgroundColor?: string;
};

export default function MostControversialReviewsSection({
  textColor,
  title = "Love It or Hate It?",
  cardBackgroundColor,
}: MostControversialReviewsSectionProps) {
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
        <View style={{ flexDirection: "row" }}>
          {mostControversialReviews.map((item) => (
            <MostControversialReviewCard
              key={item.id}
              {...item}
              textColor={textColor}
              cardBackgroundColor={cardBackgroundColor}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
