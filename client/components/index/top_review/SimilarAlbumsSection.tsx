import { jennieAlbums } from "@/components/data/index/albums";
import { useThemeColor } from "@/hooks/useThemeColor";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function SimilarAlbumsSection() {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");

  return (
    <Animated.View entering={FadeInUp.delay(400).duration(600)} style={{ marginTop: 20 }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Poppins_600SemiBold",
          color: textColor,
          marginBottom: 12,
        }}
      >
        You Might Also Like
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {jennieAlbums.map((album) => (
          <TouchableOpacity
            key={album.id}
            onPress={() =>
              router.push({
                pathname: "/screens/music/[id]",
                params: { id: album.id.toString() },
              })
            }
            style={{
              width: 140,
              marginRight: 16,
              backgroundColor: cardBackgroundColor,
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <Image
              source={{ uri: album.image }}
              style={{ width: "100%", height: 140 }}
              resizeMode="cover"
            />
            <View style={{ padding: 8 }}>
              <Text
                numberOfLines={1}
                style={{ fontFamily: "Poppins_600SemiBold", fontSize: 14, color: textColor }}
              >
                {album.title}
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 12,
                  color: subText,
                }}
              >
                {album.genre} • {album.year}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Animated.View>
  );
}
