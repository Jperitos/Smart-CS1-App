import React from "react";
import { ScrollView, Text, View } from "react-native";
import TrendingMusicCard from "../card/TrendingMusicCard";

type TrendingItem = {
  id: number;
  title: string;
  type: string;
  image: string;
  rating: string;
};

type TrendingSectionProps = {
  items: TrendingItem[];
  textColor?: string;
  subText?: string;
  title?: string;
};

export default function TrendingSection({ items, textColor, subText, title = "Trending Music" }: TrendingSectionProps) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Poppins_700Bold",
          marginBottom: 20,
          color: textColor,
        }}
      >
        {title}
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => (
          <TrendingMusicCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
            textColor={textColor}
          />
        ))}
      </ScrollView>
    </View>
  );
}
