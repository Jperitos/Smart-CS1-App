import { useThemeColor } from "@/hooks/useThemeColor";
import { FlatList, Platform, Text, View, useWindowDimensions } from "react-native";
import GenreStatsCard from "../card/genre/GenreStatsCard";

type Props = {
  totalAlbumsReviewed: number;
  averageRating: number;
  numberOfReviewers: number;
  mostUsedTags: string[];
};

export default function GenreStatsSection({
  totalAlbumsReviewed,
  averageRating,
  numberOfReviewers,
  mostUsedTags,
}: Props) {
  const textColor = useThemeColor({}, "text");
  const tagColor = useThemeColor({}, "button");
  const { width } = useWindowDimensions();

  const isSmallScreen = width < 400;

  return (
    <View style={{ marginBottom: 40 }}>
      <Text
        style={{
          fontFamily: "Poppins_700Bold",
          fontSize: 20,
          color: textColor,
          marginBottom: 16,
        }}
      >
        Genre Stats & Insights
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 20,
        }}
      >
        <GenreStatsCard label="Albums Reviewed" value={totalAlbumsReviewed} />
        <GenreStatsCard label="Avg Rating" value={averageRating.toFixed(1)} />
        <GenreStatsCard label="Reviewers" value={numberOfReviewers} />
      </View>

      <Text
        style={{
          fontFamily: "Poppins_600SemiBold",
          fontSize: 16,
          color: textColor,
          marginBottom: 10,
        }}
      >
        Most Used Tags
      </Text>

      <FlatList
        data={mostUsedTags}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 4 }}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: tagColor,
              paddingVertical: Platform.OS === "ios" ? 6 : 8,
              paddingHorizontal: 14,
              borderRadius: 24,
              marginRight: 10,
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 6,
              shadowOffset: { width: 0, height: 3 },
              elevation: 2,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 13,
                fontFamily: "Poppins_500Medium",
              }}
            >
              #{item}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
