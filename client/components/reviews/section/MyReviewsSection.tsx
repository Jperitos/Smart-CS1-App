import React from "react";
import { View } from "react-native";
import MyReviewCard from "../card/MyReviewCard";
import { myReviewData } from "../data/myReviewData";
type Props = {
  textColor: string;
  cardBackgroundColor: string;
  reviews: typeof myReviewData;
  onPress?: () => void;
};

export default function MyReviewsSection({ textColor, cardBackgroundColor, reviews }: Props) {
  return (
    <View>
      {reviews.map((review) => (
        <MyReviewCard
          key={review.id}
          {...review}
          textColor={textColor}
          cardBackgroundColor={cardBackgroundColor}
          onEdit={() => console.log("Edit", review.id)}
          onDelete={() => console.log("Delete", review.id)}
        />
      ))}
    </View>
  );
}
