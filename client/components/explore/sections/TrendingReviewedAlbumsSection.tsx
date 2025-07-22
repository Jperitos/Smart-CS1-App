import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import TrendingReviewedAlbumCard from "../card/TrendingReviewedAlbumCard";
import { trendingReviewedAlbums } from "../data/trendingReviewedAlbumsData";

type TrendingReviewedAlbumsSectionProps = {
  textColor?: string;
  title?: string;
  cardBackgroundColor?: string;
};

export default function TrendingReviewedAlbumsSection({
  textColor,
  cardBackgroundColor,
  title = "Trending Reviewed Albums",
}: TrendingReviewedAlbumsSectionProps) {
  const firstRow = trendingReviewedAlbums.filter((_, i) => i % 2 === 0);
  const secondRow = trendingReviewedAlbums.filter((_, i) => i % 2 !== 0);

  return (
    <View style={{ marginTop: 16 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins_700Bold",
            color: textColor,
          }}
        >
          {title}
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins_500Medium",
              color: textColor,
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", gap: 16 }}>
          {firstRow.map((item, index) => (
            <View key={item.id} style={{ flexDirection: "column" }}>
              <TrendingReviewedAlbumCard {...item} textColor={textColor} cardBackgroundColor={cardBackgroundColor} />
              {secondRow[index] && (
                <View style={{ marginTop: 16 }}>
                  <TrendingReviewedAlbumCard
                    {...secondRow[index]}
                    textColor={textColor}
                    cardBackgroundColor={cardBackgroundColor}
                  />
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
