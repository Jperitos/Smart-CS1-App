import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, FlatList, Text, TouchableOpacity, View } from "react-native";
import GenreCard from "../card/genre/GenreCard";
type Genre = {
  id: number;
  name: string;
  image: string;
  reviewCount: number;
};

type GenreGridProps = {
  genres: Genre[];
  onPressGenre?: (genre: Genre) => void;
  textColor?: string;
  subText?: string;
  backgroundColor?: string;
  border?: string;
  onPressViewAll?: () => void;
  cardBackgroundColor?: string;
};

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;
const router = useRouter();
export default function GenreGrid({
  genres,
  onPressGenre,
  textColor,
  subText,
  backgroundColor,
  border,
  onPressViewAll,
  cardBackgroundColor,
}: GenreGridProps) {
  const renderItem = ({ item }: { item: Genre }) => (
    <View style={{ width: "50%" }}>
      <GenreCard
        name={item.name}
        image={item.image}
        textColor={textColor}
        backgroundColor={backgroundColor}
        border={border}
        reviewCount={item.reviewCount}
        cardBackgroundColor={cardBackgroundColor}
        onPress={() =>
          router.push({
            pathname: "/screens/genre/[id]",
            params: { id: item.id.toString() },
          })
        }
      />
    </View>
  );

  return (
    <View style={{ marginTop: 15 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <Text style={{ fontSize: 18, fontFamily: "Poppins_700Bold", color: textColor }}>Pick a genre</Text>

        <TouchableOpacity onPress={onPressViewAll}>
          <Text style={{ fontSize: 14, color: subText, fontFamily: "Poppins_500Medium" }}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={genres.slice(0, 4)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        scrollEnabled={false}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </View>
  );
}
