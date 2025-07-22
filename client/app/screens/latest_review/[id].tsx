import Header from "@/app/header";
import { latestReviews } from "@/components/data/index/latestReviews";
import RatingBreakdownBar from "@/components/index/top_review/RatingBreakdownBar";
import ReviewMetaInfo from "@/components/index/top_review/ReviewMetaInfo";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Linking, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
export default function ReviewDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const review = latestReviews.find((r) => r.id === id);
  const otherReviews = latestReviews.filter((r) => r.id !== id);

  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [newComment, setNewComment] = useState("");

  const subText = useThemeColor({}, "subText");
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const border = useThemeColor({}, "border");
  const button = useThemeColor({}, "button");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");

  useEffect(() => {
    if (review?.likes) setLikeCount(review.likes);
  }, [review]);

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => prev + (liked ? -1 : 1));
  };

  const openLink = (platform: "spotify" | "youtube") => {
    if (!review) return;
    const url =
      platform === "spotify"
        ? `https://open.spotify.com/search/${encodeURIComponent(review.title)}`
        : `https://www.youtube.com/results?search_query=${encodeURIComponent(review.title)}`;
    Linking.openURL(url);
  };

  const handleReviewSubmit = () => {
    if (newComment.trim()) {
      alert("Your review:\n" + newComment);
      setNewComment("");
    }
  };

  if (!review) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Review not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ paddingTop: 30, padding: 20 }}>
      <Header title="Latest Review" textColor={textColor} />

      <View
        style={{
          borderRadius: 20,
          overflow: "hidden",
          elevation: 5,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 10,
          marginBottom: 20,
        }}
      >
        <Image
          source={{ uri: review.albumCover }}
          style={{
            width: "100%",
            height: 240,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8, padding: 5 }}>
        {/* Review Info */}
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 8,
            color: textColor,
          }}
        >
          {review.title}
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 6 }}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={{ marginLeft: 4, fontSize: 16 }}>{review.rating.toFixed(1)}</Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: 16,
          fontStyle: "italic",
          lineHeight: 22,
          marginBottom: 12,
          color: textColor,
        }}
      >
        “{review.comment}”
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8 }}>
        <Text style={{ fontSize: 14, color: subText }}>Reviewed by {review.user}</Text>
        <Text style={{ fontSize: 13, color: subText }}>
          {review.date &&
            new Date(review.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          marginTop: 16,
          paddingVertical: 12,
        }}
      >
        <Image
          source={{ uri: review.avatar || "https://i.pravatar.cc/100" }}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
        <View>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 15,
              color: textColor,
            }}
          >
            {review.author || review.user}
          </Text>
          <Text style={{ fontSize: 13, color: "#666" }}>Music Enthusiast · 56 Reviews</Text>
        </View>
      </View>

      {/* Action Bar */}
      <Animated.View
        entering={FadeInUp.delay(300).duration(600)}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        {/* Like Button */}
        <TouchableOpacity onPress={toggleLike} style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <Ionicons name={liked ? "heart" : "heart-outline"} size={20} color={liked ? "red" : textColor} />
          <Text
            style={{
              color: liked ? "red" : textColor,
              fontFamily: "Poppins_500Medium",
            }}
          >
            Like
          </Text>
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity
          onPress={() => alert("Share logic")}
          style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
        >
          <Ionicons name="share-outline" size={20} color={textColor} />
          <Text style={{ color: textColor, fontFamily: "Poppins_500Medium" }}>Share</Text>
        </TouchableOpacity>

        {/* Spotify */}
        <TouchableOpacity onPress={() => openLink("spotify")}>
          <Entypo name="spotify" size={22} color="#1DB954" />
        </TouchableOpacity>

        {/* YouTube */}
        <TouchableOpacity onPress={() => openLink("youtube")}>
          <Entypo name="youtube" size={22} color="#FF0000" />
        </TouchableOpacity>
      </Animated.View>
      <RatingBreakdownBar breakdown={{ 5: 48, 4: 22, 3: 5, 2: 1, 1: 0 }} />
      <ReviewMetaInfo createdAt="June 14, 2024" updatedAt="June 16, 2024" />

      {/* New Comment Field */}
      <View style={{ marginTop: 24 }}>
        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 8, color: textColor }}>Add Your Review</Text>
        <TextInput
          placeholder="Write your thoughts..."
          value={newComment}
          onChangeText={setNewComment}
          multiline
          style={{
            backgroundColor: cardBackgroundColor,
            padding: 12,
            borderRadius: 12,
            minHeight: 80,
            textAlignVertical: "top",
            fontSize: 14,
          }}
        />
        <TouchableOpacity
          onPress={handleReviewSubmit}
          style={{
            backgroundColor: button,
            marginTop: 10,
            paddingVertical: 15,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ color: textColor, fontWeight: "600" }}>Submit Review</Text>
        </TouchableOpacity>
      </View>

      {/* Other Reviews */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 40, marginBottom: 12, color: textColor }}>
        Other Reviews
      </Text>

      {otherReviews.map((r) => (
        <TouchableOpacity
          key={r.id}
          onPress={() => router.push({ pathname: "/screens/latest_review/[id]", params: { id: r.id } })}
          style={{
            flexDirection: "row",
            backgroundColor: cardBackgroundColor,
            padding: 12,
            borderRadius: 12,
            marginBottom: 12,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 6,
            elevation: 2,
          }}
        >
          <Image
            source={{ uri: r.albumCover }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 8,
              marginRight: 12,
            }}
          />
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 14,
                fontWeight: "600",
                marginBottom: 4,
                color: textColor,
              }}
            >
              {r.title}
            </Text>
            <Text numberOfLines={2} style={{ fontSize: 12, color: textColor }}>
              “{r.comment}”
            </Text>
            <Text style={{ fontSize: 11, color: textColor, marginTop: 4 }}>
              {r.user} • ⭐ {r.rating}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
