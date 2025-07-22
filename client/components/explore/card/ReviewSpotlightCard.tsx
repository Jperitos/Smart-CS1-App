import React, { useState } from "react";
import { Image, LayoutAnimation, Platform, Pressable, Text, UIManager, View } from "react-native";

type ReviewSpotlightCardProps = {
  albumTitle: string;
  albumArt: string;
  reviewer: string;
  excerpt: string;
  fullReview: string;
  textColor?: string;
  cardBackgroundColor?: string;
};

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function ReviewSpotlightCard({
  albumTitle,
  albumArt,
  reviewer,
  excerpt,
  fullReview,
  textColor,
  cardBackgroundColor,
}: ReviewSpotlightCardProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View
      style={{
        backgroundColor: cardBackgroundColor,
        padding: 16,
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "flex-start",
        width: 300,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
        marginRight: 16,
      }}
    >
      <Image
        source={{ uri: albumArt }}
        style={{
          width: 70,
          height: 70,
          borderRadius: 12,
          marginRight: 12,
          backgroundColor: "#ddd",
        }}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Poppins_600SemiBold",
            color: textColor,
            marginBottom: 4,
          }}
        >
          {reviewer}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontFamily: "Poppins_400Regular",
            color: "#555",
          }}
        >
          {expanded ? fullReview : excerpt}
        </Text>

        <Pressable onPress={toggleExpanded}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins_500Medium",
              color: "#888",
              marginTop: 4,
            }}
          >
            {expanded ? "Read Less" : "Read More"}
          </Text>
        </Pressable>

        <Text
          style={{
            fontSize: 12,
            fontFamily: "Poppins_500Medium",
            color: "#888",
            marginTop: 6,
          }}
        >
          — {albumTitle}
        </Text>
      </View>
    </View>
  );
}
