import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

type FilterOption = "All" | "Highest Rated" | "Most Liked" | "Newest" | "Oldest";

type Props = {
  onFilterChange: (filter: FilterOption) => void;
  textColor: string;
  button?: string;
  border?: string;
};

export default function MyReviewFilters({ onFilterChange, textColor, button, border }: Props) {
  const [active, setActive] = useState<FilterOption>("All");

  const filters: FilterOption[] = ["All", "Highest Rated", "Most Liked", "Newest", "Oldest"];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: "row", gap: 10, paddingHorizontal: 10, marginBottom: 20 }}>
        {filters.map((filter) => {
          const isSelected = active === filter;

          return (
            <TouchableOpacity
              key={filter}
              onPress={() => {
                setActive(filter);
                onFilterChange(filter);
              }}
              style={{
                paddingHorizontal: 20,
                borderRadius: 20,
                borderWidth: 1,
                paddingBlock: 10,
                borderColor: border || "#888",
                backgroundColor: isSelected ? button : "transparent",
              }}
            >
              <Text
                style={{
                  color: isSelected ? "#fff" : textColor,
                  fontFamily: "Poppins_500Medium",
                  fontSize: 13,
                }}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
