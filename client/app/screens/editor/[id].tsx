import { editorPicks } from "@/components/data/index/editorsPicks";
import EditorsChoiceCard from "@/components/index/card/EditorsChoiceCard";
import EditorComments from "@/components/index/editors/EditorComments";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "../../header";

export default function EditorDetailScreen() {
  const { id } = useLocalSearchParams();
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const backgroundColor = useThemeColor({}, "background");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const border = useThemeColor({}, "border");
  const accent = useThemeColor({}, "tint");
  const button = useThemeColor({}, "button");
  const editorItem = editorPicks.find((item) => item.id.toString() === id);
  const [comment, setComment] = useState("");
  const [likedComments, setLikedComments] = useState<{ [key: number]: boolean }>({});

  const sampleComments = [
    { id: 1, user: "melody_lover", text: "This track gave me chills. One of SZA's best!" },
    { id: 2, user: "beats_by_j", text: "The minimal production makes her vocals shine." },
    { id: 3, user: "souljunkie", text: "SZA really knows how to hit the feels." },
  ];

  const toggleLike = (id: number) => {
    setLikedComments((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (!editorItem) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor }}>
        <Text style={{ color: textColor, fontSize: 18 }}>Editor's Pick not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor }} contentContainerStyle={{ paddingTop: 70, padding: 20 }}>
      <Header title="Editor's Choice" textColor={textColor} />

      <View style={{ position: "relative", marginBottom: 16 }}>
        <Image
          source={{ uri: editorItem.image }}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 16,
          }}
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={() => Linking.openURL(editorItem.youtubeUrl || "https://www.youtube.com/watch?v=dQw4w9WgXcQ")}
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: 10,
            borderRadius: 50,
          }}
        >
          <Ionicons name="logo-youtube" size={15} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 22, fontFamily: "Poppins_700Bold", color: textColor }}>{editorItem.title}</Text>

      <Text style={{ fontSize: 13, fontFamily: "Poppins_400Regular", color: subText, marginTop: 6 }}>
        {editorItem.subtitle}
      </Text>

      {/* Details */}
      <View style={{ marginTop: 16, marginBottom: 24 }}>
        <Text style={{ color: subText, fontSize: 14 }}>
          Songs by Artist: <Text style={{ color: textColor, fontWeight: "bold" }}>{editorItem.songsByArtist}</Text>
        </Text>
        <Text style={{ color: subText, fontSize: 14, marginTop: 4 }}>
          Reviews: <Text style={{ color: textColor, fontWeight: "bold" }}>{editorItem.reviews}</Text>
        </Text>
        <Text style={{ color: subText, fontSize: 14, marginTop: 4 }}>
          Average Rating: <Text style={{ color: textColor, fontWeight: "bold" }}>{editorItem.rating} ★</Text>
        </Text>
        <Text style={{ marginTop: 12, color: subText, fontSize: 14, lineHeight: 20 }}>
          <Text style={{ fontWeight: "bold", color: textColor }}>Editor's Note:</Text> {editorItem.editorNote}
        </Text>
      </View>

      {/* See More Navigation Text */}
      <TouchableOpacity onPress={() => router.push("/display/editors-picks")} style={{ marginBottom: 12 }}>
        <Text style={{ color: accent, fontSize: 14, fontFamily: "Poppins_500Medium" }}>See More Picks →</Text>
      </TouchableOpacity>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {editorPicks
          .filter((item) => item.id.toString() !== id)
          .slice(0, 3)
          .map((item) => (
            <EditorsChoiceCard
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              textColor={textColor}
              subText={subText}
              backgroundColor={cardBackgroundColor}
              border={border}
            />
          ))}
      </ScrollView>

      <EditorComments />
    </ScrollView>
  );
}
