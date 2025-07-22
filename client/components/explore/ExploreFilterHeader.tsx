import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

const FILTERS = ["Top This Week", "Most Reviewed", "Newly Reviewed", "Controversial", "Critics Picks"];

type Props = {
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
  textColor: string;
  backgroundColor?: string;
  button?: string;
  border?: string;
};

export default function ExploreFilterHeader({
  selectedFilter,
  onSelectFilter,
  textColor,
  backgroundColor,
  button,
  border,
}: Props) {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        paddingVertical: 20,
        paddingLeft: 6,
        paddingRight: 4,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", gap: 10, paddingHorizontal: 10 }}>
          {FILTERS.map((filter) => {
            const isSelected = selectedFilter === filter;
            return (
              <Pressable
                key={filter}
                onPress={() => onSelectFilter(filter)}
                style={{
                  paddingVertical: 6,
                  paddingHorizontal: 14,
                  borderRadius: 16,
                  backgroundColor: isSelected ? button : border,
                }}
              >
                <Text
                  style={{
                    color: isSelected ? "white" : textColor,
                    fontFamily: "Poppins_500Medium",
                    fontSize: 13,
                  }}
                >
                  {filter}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
