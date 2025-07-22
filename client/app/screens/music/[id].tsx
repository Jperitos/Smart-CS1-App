
import Header from "@/app/header";
import trendingItems from "@/components/data/index/trendingItems";
import MusicReviewSection from "@/components/index/music_reviews/MusicReviewSection";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
const { width } = Dimensions.get("window");

export default function MusicDetailPage() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const item = trendingItems.find((item) => item.id === Number(id));

  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const backgroundColor = useThemeColor({}, "background");

  const [liked, setLiked] = useState(false);

  const handleShare = () => {
    // TODO: Add share logic
  };

  const openLink = (platform: "spotify" | "youtube") => {
    const url =
      platform === "spotify"
        ? "https://open.spotify.com/"
        : "https://youtube.com/";
    router.push(url);
  };

  if (!item) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor }}>
        <Text style={{ color: textColor }}>Music not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor }} contentContainerStyle={{ paddingTop: 70, padding: 20 }}>
      <Animatable.View animation="fadeInUp" duration={500} delay={50}>
        <Header title="Music" textColor={textColor} />

        <Image
          source={{ uri: item.image }}
          style={{
            width: "100%",
            height: width * 1,
            borderRadius: 20,
            marginBottom: 24,
            resizeMode: "cover",
          }}
        />

        <Text style={{ fontSize: 24, fontWeight: "700", textAlign: "center", marginBottom: 4, color: textColor }}>
          {item.title}
        </Text>

        <Text style={{ fontSize: 14, textAlign: "center", color: subText, marginBottom: 12 }}>
          {item.type} • {item.genre} • {item.year}
        </Text>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 6, color: textColor }}>Artist</Text>
          <Text style={{ color: subText }}>{item.artist}</Text>
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 6, color: textColor }}>Description</Text>
          <Text style={{ color: subText }}>{item.description}</Text>
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
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
 <View
  style={{
    flexDirection: "row",
    alignItems: "center",
    gap: 12,

  }}
>

  <View>
    <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 15, color: textColor }}>
      {item.artist}
    </Text>
    <Text style={{ fontSize: 13, color: subText }}>
      Music Enthusiast · 56 Reviews
    </Text>
  </View>
</View>

        </View>

        {/* Social Buttons */}
        <Animatable.View
          animation="fadeInUp"
          delay={300}
          duration={600}
          style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16, paddingInline:10 }}
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
        </Animatable.View>

        {/* Reviews */}
        <MusicReviewSection />
      </Animatable.View>
    </ScrollView>
  );
}
