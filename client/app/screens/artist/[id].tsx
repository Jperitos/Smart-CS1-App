import Header from "@/app/header";
import { artistCarouselData } from "@/components/data/index/artistCarouselData";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function ArtistDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const artist = artistCarouselData.find((a) => a.id.toString() === id);
  const [newComment, setNewComment] = useState("");

  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const button = useThemeColor({}, "button");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const [liked, setLiked] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewText, setReviewText] = useState("");

  const handleLike = () => {
    setLiked(!liked);
    // Optionally send like state to backend
  };

  const handleReviewSubmit = () => {
    if (newComment.trim()) {
      alert("Your review:\n" + newComment);
      setNewComment("");
    }
  };
  if (!artist) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18 }}>Artist not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header title="Artist Spotlight" textColor={textColor} />

      {/* Cover + Avatar */}
      <View style={{ position: "relative", marginBottom: 60 }}>
        <Image
          source={{ uri: artist.image }}
          style={{ width: "100%", height: 180, opacity: 0.6, borderRadius: 20 }}
          resizeMode="cover"
        />
        <View style={{ position: "absolute", top: 110, left: 0, right: 0, alignItems: "center" }}>
          <Image
            source={{ uri: artist.image }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              borderWidth: 4,
              borderColor: "#fff",
              backgroundColor: "#eee",
            }}
          />
        </View>
      </View>

      {/* Artist Info */}
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Text style={{ fontSize: 22, fontFamily: "Poppins_700Bold", color: textColor }}>{artist.name}</Text>
        <Text style={{ fontSize: 14, color: subText }}>{artist.genre}</Text>
      </View>

      {/* Description */}
      <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 14,
            color: subText,
            fontFamily: "Poppins_400Regular",
            lineHeight: 22,
            textAlign: "center",
          }}
        >
          {artist.description}
        </Text>
      </View>

      {/* Music Stats */}
      <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Poppins_600SemiBold",
            marginBottom: 12,
            color: textColor,
          }}
        >
          Music Stats
        </Text>

        <View
          style={{
            backgroundColor: cardBackgroundColor,
            padding: 16,
            borderRadius: 16,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <View style={{ width: "48%" }}>
            <Text style={{ fontSize: 13, color: subText }}>Total Reviews</Text>
            <Text style={{ fontSize: 15, fontWeight: "600", color: textColor }}>{artist.totalReviews}</Text>
          </View>
          <View style={{ width: "48%" }}>
            <Text style={{ fontSize: 13, color: subText }}>Total Likes</Text>
            <Text style={{ fontSize: 15, fontWeight: "600", color: textColor }}>{artist.totalLikes}</Text>
          </View>
          <View style={{ width: "48%" }}>
            <Text style={{ fontSize: 13, color: subText }}>Albums Released</Text>
            <Text style={{ fontSize: 15, fontWeight: "600", color: textColor }}>{artist.albumsReleased}</Text>
          </View>
          <View style={{ width: "48%" }}>
            <Text style={{ fontSize: 13, color: subText }}>Joined</Text>
            <Text style={{ fontSize: 15, fontWeight: "600", color: textColor }}>{artist.joined}</Text>
          </View>
        </View>
      </View>

      {/* Top 3 Reviews */}
      <View style={{ paddingHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Poppins_600SemiBold",
            marginBottom: 12,
            color: textColor,
          }}
        >
          What People Say
        </Text>

        {[1, 2, 3].map((review, index) => (
          <View
            key={index}
            style={{
              backgroundColor: cardBackgroundColor,
              padding: 14,
              borderRadius: 12,
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600", color: textColor, marginBottom: 4 }}>User{index + 1}</Text>
            <Text style={{ fontSize: 13, color: subText, lineHeight: 20 }}>
              This artist’s music always resonates with me. Truly iconic and timeless.
            </Text>
          </View>
        ))}
      </View>

      {/* Add Your Review Section */}
      <View style={{ marginTop: 10, paddingHorizontal: 20, paddingBottom: 20 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginBottom: 8,
            color: textColor,
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          Add Your Review
        </Text>

        <TextInput
          placeholder="Write your thoughts..."
          placeholderTextColor="#999"
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
            color: textColor,
            fontFamily: "Poppins_400Regular",
          }}
        />

        <TouchableOpacity
          onPress={handleReviewSubmit}
          style={{
            backgroundColor: button,
            marginTop: 15,
            paddingVertical: 14,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontFamily: "Poppins_600SemiBold", fontSize: 14 }}>Submit Review</Text>
        </TouchableOpacity>
      </View>

      {/* Popular Songs */}
      <View style={{ paddingHorizontal: 20, marginBottom: 40 }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Poppins_600SemiBold",
            marginBottom: 12,
            color: textColor,
          }}
        >
          Popular Songs
        </Text>

        {artist.songs.map((song, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              backgroundColor: cardBackgroundColor,
              borderRadius: 16,
              padding: 12,
              marginBottom: 14,
              shadowColor: "#000",
              shadowOpacity: 0.03,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              elevation: 2,
              alignItems: "center",
            }}
          >
            {/* Song Image */}
            <Image
              source={{ uri: song.image }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 12,
                marginRight: 14,
                backgroundColor: "#ccc",
              }}
            />

            {/* Song Info */}
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Poppins_600SemiBold",
                  color: textColor,
                  marginBottom: 4,
                }}
                numberOfLines={1}
              >
                {song.title}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Poppins_400Regular",
                  color: subText,
                  marginBottom: 2,
                }}
              >
                {song.reviews} reviews · {song.likes} likes
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Poppins_400Regular",
                  color: subText,
                }}
              >
                Released: {song.releaseDate}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
