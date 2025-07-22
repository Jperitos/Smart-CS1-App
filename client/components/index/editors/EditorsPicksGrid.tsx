import { useThemeColor } from "@/hooks/useThemeColor";
import { useRouter } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { editorPicks } from "../../data/index/editorsPicks";

export default function EditorsPicksGrid() {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");

  const router = useRouter();

  return (
    <FlatList
      data={editorPicks}
      keyExtractor={(item) => item.id.toString()}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => router.push(`/editor/${item.id}`)}
          style={{
            backgroundColor: cardBackgroundColor,
            borderRadius: 16,
            padding: 16,
            marginBottom: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{ width: 120, height: 120, borderRadius: 12, marginRight: 16 }}
            resizeMode="cover"
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: textColor,
                fontFamily: "Poppins_700Bold",
                fontSize: 20,
                marginBottom: 6,
              }}
            >
              {item.title}
            </Text>
            <Text style={{ color: subText, fontSize: 14, marginBottom: 8 }}>{item.subtitle}</Text>
            {/* Optional editorNote - show only if exists */}
            {item.editorNote ? (
              <Text
                style={{
                  color: textColor,
                  fontSize: 13,
                  fontStyle: "italic",
                  marginBottom: 10,
                }}
                numberOfLines={4}
              >
                {item.editorNote}
              </Text>
            ) : null}
            <Text style={{ color: subText, fontSize: 13 }}>
              {item.reviews} reviews • {item.songsByArtist ?? "N/A"} songs • Rating: {item.rating.toFixed(1)}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
