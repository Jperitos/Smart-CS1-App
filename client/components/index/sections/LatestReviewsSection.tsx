import React from "react";
import { FlatList, Text, View } from "react-native";
import LatestReviewCard, { LatestReview } from "../card/LatestReviewCard";

type Props = {
  reviews: LatestReview[];
  textColor?: string;
  backgroundColor?: string;
  border?: string;
  onPressViewAll?: () => void;
  subText?: string;
  cardBackgroundColor?: string;
};

export default function LatestReviewsSection({
  reviews,
  textColor,
  backgroundColor,
  border,
  onPressViewAll,
  subText,
  cardBackgroundColor,
}: Props) {
  return (
    <View style={{ marginTop: 30 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            color: textColor ?? "#000",
          }}
        >
          Latest Reviews
        </Text>
      </View>

      <FlatList
        data={reviews.slice(0, 3)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LatestReviewCard
            review={item}
            textColor={textColor}
            backgroundColor={backgroundColor}
            border={border}
            cardBackgroundColor={cardBackgroundColor}
          />
        )}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </View>
  );
}
