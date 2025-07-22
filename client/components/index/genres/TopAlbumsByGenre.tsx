import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

type Album = {
  id: number;
  title: string;
  artist: string;
  cover: string;
  rating: number;
};

type Props = {
  albums: Album[];
  onPressAlbum?: (album: Album) => void;
};

export default function TopAlbumsByGenre({ albums, onPressAlbum }: Props) {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const border = useThemeColor({}, "border");

  const renderItem = ({ item }: { item: Album }) => (
    <TouchableOpacity
      onPress={() => onPressAlbum?.(item)}
      style={{
        width: 140,
        marginRight: 14,
        backgroundColor: cardBackgroundColor,
        borderRadius: 16,
        padding: 10,
        borderWidth: 1,
        borderColor: border,
      }}
    >
      <Image
        source={{ uri: item.cover }}
        style={{
          width: "100%",
          height: 100,
          borderRadius: 12,
          marginBottom: 8,
        }}
      />
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Poppins_600SemiBold",
          color: textColor,
        }}
        numberOfLines={1}
      >
        {item.title}
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Poppins_400Regular",
          color: subText,
        }}
        numberOfLines={1}
      >
        {item.artist}
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontFamily: "Poppins_500Medium",
          color: subText,
          marginTop: 4,
        }}
      >
        ⭐ {item.rating.toFixed(1)}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Poppins_700Bold",
          color: textColor,
          marginBottom: 12,
        }}
      >
        Top Albums
      </Text>
      <FlatList
        data={albums}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
