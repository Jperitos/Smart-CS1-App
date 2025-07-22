import AddReviewModal from "@/components/modal/reviews/AddReviewModal";
import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

type Review = {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  text: string;
  likes: number;
};

type Props = {
  reviews: Review[];
  onPressReview?: (review: Review) => void;
};

export default function GenreRecentReviews({ reviews, onPressReview }: Props) {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const buttonColor = useThemeColor({}, "button");

  const [isModalVisible, setModalVisible] = useState(false);
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = (comment: string) => {
    // You can update this logic to post the review to backend or update local state
    console.log("Posted review:", comment);
    setReviewText("");
    setModalVisible(false);
  };

  const renderItem = ({ item }: { item: Review }) => (
    <TouchableOpacity
      onPress={() => onPressReview?.(item)}
      style={{
        flexDirection: "row",
        padding: 12,
        backgroundColor: cardBackgroundColor,
        borderRadius: 12,
        marginBottom: 12,
        alignItems: "center",
      }}
    >
      <Image source={{ uri: item.user.avatar }} style={{ width: 48, height: 48, borderRadius: 24, marginRight: 12 }} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 14, color: textColor }}>
          {item.user.name} • {item.rating.toFixed(1)}★
        </Text>
        <Text
          numberOfLines={2}
          style={{ fontFamily: "Poppins_400Regular", fontSize: 13, color: subText, marginTop: 4 }}
        >
          {item.text}
        </Text>
        <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 12, color: subText, marginTop: 6 }}>
          ❤️ {item.likes} Likes
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ marginTop: 30 }}>
      {/* Header with Add Review button */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 18, color: textColor }}>
          Recent Reviews
        </Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            paddingVertical: 6,
            paddingHorizontal: 12,
            backgroundColor: buttonColor,
            borderRadius: 8,
          }}
        >
          <Text style={{ fontSize: 13, color: "#fff", fontFamily: "Poppins_500Medium" }}>Add Review</Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <FlatList
        data={reviews.slice(0, 5)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
      />

      {reviews.length > 5 && (
        <TouchableOpacity onPress={() => console.log("Navigate to all reviews")}>
          <Text
            style={{
              marginTop: 4,
              marginLeft: 4,
              fontFamily: "Poppins_500Medium",
              fontSize: 13,
              color: textColor,
            }}
          >
            View all reviews →
          </Text>
        </TouchableOpacity>
      )}

      {/* Add Review Modal */}
      <AddReviewModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleSubmitReview}
        reviewText={reviewText}
        setReviewText={setReviewText}
      />
    </View>
  );
}
