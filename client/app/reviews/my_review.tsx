import Header from "@/app/header";
import TrendingReviewedAlbumCard from "@/components/explore/card/TrendingReviewedAlbumCard";
import { myReviewData } from "@/components/reviews/data/myReviewData";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
export default function MyReviewDetailScreen() {
  const { id } = useLocalSearchParams();
  const review = myReviewData.find((r) => r.id.toString() === id);
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);
  const [editedComment, setEditedComment] = useState(review?.comment || "");

  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const backgroundColor = useThemeColor({}, "background");
  const cardBackground = useThemeColor({}, "cardBackground");
  const button = useThemeColor({}, "button");

  const [liked, setLiked] = useState(false);

  const handleShare = () => {
    // TODO: Add share logic
  };

  const openLink = (platform: "spotify" | "youtube") => {
    const url = platform === "spotify" ? "https://open.spotify.com/" : "https://youtube.com/";
    router.push(url);
  };

  if (!review) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor }}>
        <Text style={{ color: textColor, fontFamily: "Poppins_600SemiBold" }}>Review not found.</Text>
      </View>
    );
  }

  const handleDelete = () => {
    Alert.alert("Delete Review", "Are you sure you want to delete this review?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        onPress: () => {
          console.log("Deleted review:", review.id);
          router.back(); // or navigate elsewhere
        },
        style: "destructive",
      },
    ]);
  };

  const handleSaveEdit = () => {
    console.log("Saved edited comment:", editedComment);
    setModalVisible(false);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor, paddingTop: 40, paddingHorizontal: 20 }}>
      <Header title="My Review Detail" textColor={textColor} />

      <View
        style={{
          backgroundColor: cardBackground,
          borderRadius: 16,
          padding: 16,
          marginTop: 5,
          elevation: 4,
        }}
      >
        {/* Album Image */}
        <Image
          source={{ uri: review.image }}
          style={{
            width: "100%",
            height: 180,
            borderRadius: 12,
            marginBottom: 12,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 12,
          }}
        >
          {/* Title & Subtitle */}
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Poppins_700Bold",
                color: textColor,
              }}
              numberOfLines={1}
            >
              {review.title}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins_500Medium",
                color: subText,
                marginTop: 2,
              }}
            >
              Reviewed by you.
            </Text>
          </View>

          {/* Icons */}
          <View style={{ flexDirection: "row", marginLeft: 12 }}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{ marginRight: 12 }}>
              <Feather name="edit" size={18} color={textColor} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Rating */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={{ marginLeft: 6, fontSize: 14, color: textColor, fontFamily: "Poppins_500Medium" }}>
            {review.rating.toFixed(1)} / 5.0
          </Text>
        </View>

        {/* Comment */}
        <Text style={{ fontSize: 14, fontFamily: "Poppins_400Regular", color: textColor, lineHeight: 22 }}>
          {editedComment}
        </Text>

        {/* Date */}
        {review.date && (
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins_400Regular",
              color: subText,
              marginTop: 14,
            }}
          >
            Reviewed on {review.date}
          </Text>
        )}
      </View>
      {/* Reviewer Section */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,

          paddingVertical: 12,
        }}
      >
        <Image source={{ uri: "https://i.pravatar.cc/100" }} style={{ width: 40, height: 40, borderRadius: 20 }} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
          }}
        >
          <View>
            <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 15, color: textColor }}>Angel Canete</Text>
            <Text style={{ fontSize: 13, color: subText }}>Music Enthusiast · 56 Reviews</Text>
          </View>
        </View>
      </View>

      {/* Social Buttons */}
      <Animatable.View
        animation="fadeInUp"
        delay={300}
        duration={600}
        style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16, paddingInline: 10 }}
      >
        <TouchableOpacity
          onPress={() => setLiked(!liked)}
          style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
        >
          <Ionicons name={liked ? "heart" : "heart-outline"} size={20} color={liked ? "red" : textColor} />
          <Text style={{ color: liked ? "red" : textColor, fontFamily: "Poppins_500Medium" }}>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleShare} style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <Ionicons name="share-outline" size={20} color={textColor} />
          <Text style={{ color: textColor, fontFamily: "Poppins_500Medium" }}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink("spotify")}>
          <Entypo name="spotify" size={22} color="#1DB954" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink("youtube")}>
          <Entypo name="youtube" size={22} color="#FF0000" />
        </TouchableOpacity>
      </Animatable.View>

      {/* Related Music Section */}
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 18, fontFamily: "Poppins_700Bold", color: textColor, marginBottom: 14 }}>
          Related Music
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[...Array(6)].map((_, i) => (
            <TrendingReviewedAlbumCard
              key={i}
              id={i}
              title={`Album ${i + 1}`}
              image={`https://picsum.photos/200/200?random=${i}`}
              rating={"4." + i}
              reviewCount={100 + i * 10}
              artist={"Artist " + (i + 1)}
              genre="Pop"
              textColor={textColor}
              cardBackgroundColor={cardBackground}
            />
          ))}
        </ScrollView>
      </View>

      {/* Edit Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "85%",
              backgroundColor,
              padding: 20,
              borderRadius: 16,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 16,
                color: textColor,
                marginBottom: 12,
              }}
            >
              Edit Comment
            </Text>
            <TextInput
              multiline
              value={editedComment}
              onChangeText={setEditedComment}
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 8,
                padding: 10,
                minHeight: 80,
                color: textColor,
                fontFamily: "Poppins_400Regular",
              }}
            />
            <TouchableOpacity
              onPress={handleSaveEdit}
              style={{
                backgroundColor: button,
                marginTop: 16,
                borderRadius: 8,
                padding: 10,
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center", fontFamily: "Poppins_600SemiBold" }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
