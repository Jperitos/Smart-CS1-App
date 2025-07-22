import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import CriticsEditorialCard from "../card/CriticsEditorialCard";
import { criticsCornerData } from "../data/criticsCornerData";

type CriticsCornerSectionProps = {
  textColor?: string;
  cardBackgroundColor?: string;
};

export default function CriticsCornerSection({ textColor, cardBackgroundColor }: CriticsCornerSectionProps) {
  return (
    <View style={{ marginVertical: 16 }}>
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
          Critic's Corner
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
        {criticsCornerData.map((item) => (
          <CriticsEditorialCard
            key={item.id}
            {...item}
            textColor={textColor}
            cardBackgroundColor={cardBackgroundColor}
            onPress={() =>
              router.push({
                pathname: "/screens/critic/[id]",
                params: { id: item.id.toString() },
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}
