import { useThemeColor } from "@/hooks/useThemeColor";
import { Dimensions, FlatList, Image, Text, View } from "react-native";

type Album = {
  id: number;
  title: string;
  artist: string;
  image: string;
  averageRating: number;
  totalReviews: number;
  highlight: string;
};

type Props = {
  albums: Album[];
  layout?: "horizontal" | "grid";
};

export default function ControversialAlbumsSection({ albums, layout = "horizontal" }: Props) {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const cardBackground = useThemeColor({}, "cardBackground");

  const isGrid = layout === "grid";
  const cardWidth = isGrid ? (Dimensions.get("window").width - 60) / 2 : 220;

  return (
    <View style={{ marginBottom: 30 }}>
      {!isGrid && (
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            fontSize: 18,
            color: textColor,
            marginBottom: 12,
          }}
        >
          Trending or Controversial Albums
        </Text>
      )}

      <FlatList
        data={albums}
        keyExtractor={(item) => item.id.toString()}
        horizontal={!isGrid}
        numColumns={isGrid ? 2 : 1}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={isGrid ? { justifyContent: "space-between", marginBottom: 16 } : undefined}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: cardBackground,
              borderRadius: 16,
              padding: 12,
              width: cardWidth,
              marginBottom: isGrid ? 0 : 12,
              marginRight: isGrid ? 0 : 12,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: "100%",
                height: 120,
                borderRadius: 12,
                marginBottom: 10,
              }}
              resizeMode="cover"
            />
            <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 15, color: textColor }}>{item.title}</Text>
            <Text
              style={{
                fontSize: 13,
                color: subText,
                fontFamily: "Poppins_400Regular",
                marginBottom: 4,
              }}
            >
              by {item.artist}
            </Text>
            <Text style={{ fontSize: 12, color: subText }}>
              ⭐ {item.averageRating} ({item.totalReviews} reviews)
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: textColor,
                fontFamily: "Poppins_400Regular",
                marginTop: 6,
              }}
              numberOfLines={3}
            >
              {item.highlight}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
