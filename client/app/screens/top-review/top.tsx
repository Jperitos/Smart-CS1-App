import Header from "@/app/header";
import { topReviews } from "@/components/data/index/topReviews";
import RatingBreakdownBar from "@/components/index/top_review/RatingBreakdownBar";
import ReviewMetaInfo from "@/components/index/top_review/ReviewMetaInfo";
import SimilarAlbumsSection from "@/components/index/top_review/SimilarAlbumsSection";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
export default function TopReviewDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const review = topReviews.find((r) => r.id === Number(id));
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");

  const [liked, setLiked] = useState(false);

  if (!review) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Review not found.</Text>
      </View>
    );
  }

  const handleShare = () => {
    // Replace with actual share logic later
    alert(`Share: ${review.title}`);
  };

  const openLink = (platform: "spotify" | "youtube") => {
    const url =
      platform === "spotify"
        ? `https://open.spotify.com/search/${encodeURIComponent(review.title)}`
        : `https://www.youtube.com/results?search_query=${encodeURIComponent(review.title)}`;
    Linking.openURL(url);
  };

  return (
     <SafeAreaView style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      <Header title="Top Review" textColor={textColor} />

      <Animated.View entering={FadeInUp.delay(100).duration(600)}>
        <Image
          source={{ uri: review.image }}
          style={{
            width: "100%",
            height: 300,
            borderRadius: 16,
            marginBottom: 20,
          }}
          resizeMode="cover"
        />
      </Animated.View>

      <BlurView
        intensity={50}

        style={{
          backgroundColor: cardBackgroundColor,
          borderRadius: 20,
     padding:10,
          marginBottom: 24,
        }}
      >
        <Animated.View entering={FadeInUp.delay(200).duration(600)}>
          <Text style={{ fontSize: 20, fontFamily: "Poppins_700Bold", color: textColor, marginBottom: 8 }}>
            {review.title}
          </Text>

          <Text style={{ fontSize: 14, fontFamily: "Poppins_400Regular", color: subText, marginBottom: 10, lineHeight: 22 }}>
            {review.content}
          </Text>

          <Text style={{ fontSize: 14, fontFamily: "Poppins_500Medium", color: subText }}>
            — {review.author}
          </Text>
        </Animated.View>

<View style={{
  flexDirection: "row",
  alignItems: "center",
  gap: 12,
  marginTop: 16,
  paddingVertical: 12,
}}>
  <Image
    source={{ uri: review.user?.avatar || "https://i.pravatar.cc/100" }}
    style={{ width: 40, height: 40, borderRadius: 20 }}
  />
  <View>
    <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 15, color: textColor }}>
      {review.author}
    </Text>
    <Text style={{ fontSize: 13, color: subText }}>
      Music Enthusiast · 56 Reviews
    </Text>
  </View>
</View>

     
        <Animated.View
          entering={FadeInUp.delay(300).duration(600)}
          style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16 }}
        >
          <TouchableOpacity
            onPress={() => setLiked(!liked)}
            style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
          >
            <Ionicons name={liked ? "heart" : "heart-outline"} size={20} color={liked ? "red" : textColor} />
            <Text style={{ color: liked ? "red" : textColor, fontFamily: "Poppins_500Medium" }}>Like</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleShare}
            style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
          >
            <Ionicons name="share-outline" size={20} color={textColor} />
            <Text style={{ color: textColor, fontFamily: "Poppins_500Medium" }}>Share</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink("spotify")}>
            <Entypo name="spotify" size={22} color="#1DB954" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openLink("youtube")}>
            <Entypo name="youtube" size={22} color="#FF0000" />
          </TouchableOpacity>
        </Animated.View>



      </BlurView>
      <View style={{ marginTop: 24 }}>
  <Text style={{ fontSize: 16, fontFamily: "Poppins_600SemiBold", color: textColor, marginBottom: 12 }}>
    Track Preview
  </Text>
  {["Intro", "Feel Again", "Love in Pieces", "Gravity", "Final Note"].map((track, i) => (
    <View key={i} style={{ paddingVertical: 6, borderBottomWidth: 1, borderColor: "#4444", flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ color: textColor }}>{track}</Text>
      <Ionicons name="play-circle-outline" size={20} color={textColor} />
    </View>
  ))}
</View>
      <View style={{ marginTop: 24 }}>
  <Text style={{ fontSize: 16, fontFamily: "Poppins_600SemiBold", color: textColor, marginBottom: 10 }}>
    Top Comments
  </Text>
  {[
    { name: "Liam", comment: "This review is 🔥. Couldn't agree more!" },
    { name: "Maya", comment: "This album healed something in me." }
  ].map((c, i) => (
    <View key={i} style={{ marginBottom: 10 }}>
      <Text style={{ color: textColor, fontFamily: "Poppins_600SemiBold" }}>{c.name}</Text>
      <Text style={{ color: subText }}>{c.comment}</Text>
    </View>
  ))}
</View>

<SimilarAlbumsSection />
<RatingBreakdownBar breakdown={{ 5: 48, 4: 22, 3: 5, 2: 1, 1: 0 }} />
<ReviewMetaInfo createdAt="June 14, 2024" updatedAt="June 16, 2024" />

    </ScrollView>
    </SafeAreaView>
  );
}
