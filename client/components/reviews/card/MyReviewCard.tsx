import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Assuming expo-router
import React from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";

type MyReviewCardProps = {
  id: string;
  image: string;
  title: string;
  artist: string;
  rating: number;
  comment: string;
  date: string;
  likes?: number;
  comments?: number;
  textColor: string;
  cardBackgroundColor: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onPress?: () => void;
};

export default function MyReviewCard({
  id,
  image,
  title,
  artist,
  rating,
  comment,
  date,
  likes = 0,
  comments = 0,
  textColor,
  cardBackgroundColor,
  onEdit,
  onDelete,
}: MyReviewCardProps) {
  const router = useRouter();

  const goToDetail = () => {
    router.push({
      pathname: "/reviews/my_review",
      params: { id: id.toString() },
    });
  };

  const showActions = () => {
    Alert.alert("Review Options", "Choose an action:", [
      { text: "Edit", onPress: onEdit, style: "default" },
      { text: "Delete", onPress: onDelete, style: "destructive" },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  return (
    <View
      style={{
        backgroundColor: cardBackgroundColor,
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        flexDirection: "row",
        gap: 12,
      }}
    >
      <Pressable onPress={goToDetail} onLongPress={showActions} style={{ flexDirection: "row", gap: 12, flex: 1 }}>
        <Image source={{ uri: image }} style={{ width: 60, height: 60, borderRadius: 8 }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontFamily: "Poppins_600SemiBold", color: textColor, fontSize: 14 }}>
            {title} - {artist}
          </Text>
          <Text style={{ fontFamily: "Poppins_400Regular", color: textColor, fontSize: 12, marginVertical: 4 }}>
            Rating: {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
              color: textColor,
              opacity: 0.8,
              marginBottom: 4,
            }}
            numberOfLines={2}
          >
            “{comment}”
          </Text>
          <Text style={{ fontSize: 10, color: textColor, opacity: 0.6, marginBottom: 6 }}>Posted on: {date}</Text>
          <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
            <Text style={{ fontSize: 12, color: textColor }}>❤️ {likes}</Text>
            <Text style={{ fontSize: 12, color: textColor }}>💬 {comments}</Text>
          </View>
        </View>
      </Pressable>

      {(onEdit || onDelete) && (
        <Pressable onPress={showActions} hitSlop={8}>
          <Ionicons name="ellipsis-vertical" size={15} color={textColor} />
        </Pressable>
      )}
    </View>
  );
}
