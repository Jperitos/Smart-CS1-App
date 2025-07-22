import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import ExploreCategoryCard from "../card/ExploreCategoryCard";
import { categories } from "../data/categories";

type ExploreCategoryGridProps = {
  textColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
};

export default function ExploreCategoryGrid({
  textColor,
  backgroundColor,
  cardBackgroundColor,
}: ExploreCategoryGridProps) {
  const router = useRouter();

  return (
    <View style={{ marginVertical: 16, backgroundColor: backgroundColor || "transparent" }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Poppins_700Bold",
          marginBottom: 16,
          color: textColor,
        }}
      >
        Explore by Category
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {categories.map((cat, idx) => (
          <View key={idx} style={{ width: "48%" }}>
            <ExploreCategoryCard
              emoji={cat.emoji}
              label={cat.label}
              onPress={() => router.push(cat.path as any)}
              textColor={textColor}
              backgroundColor={backgroundColor}
              cardBackgroundColor={cardBackgroundColor}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
