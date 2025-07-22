import ExploreFilterHeader from "@/components/explore/ExploreFilterHeader";
import CriticsCornerSection from "@/components/explore/sections/CriticsCornerSection";
import ExploreCategoryGrid from "@/components/explore/sections/ExploreCategoryGrid";
import MostControversialReviewsSection from "@/components/explore/sections/MostControversialReviewsSection";
import ReviewSpotlightSection from "@/components/explore/sections/ReviewSpotlightSection";
import TrendingReviewedAlbumsSection from "@/components/explore/sections/TrendingReviewedAlbumsSection";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
export default function Dashboard() {
  const subText = useThemeColor({}, "subText");
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const border = useThemeColor({}, "border");
  const button = useThemeColor({}, "button");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedFilter, setSelectedFilter] = useState("Top This Week");

  return (
    <ScrollView stickyHeaderIndices={[2]} showsVerticalScrollIndicator={false}>
      <Animatable.View
        animation="fadeInUp"
        duration={600}
        delay={50}
        style={{
          flex: 1,
          backgroundColor: backgroundColor,
          paddingTop: 50,
          paddingHorizontal: 20,
          paddingBottom: 100,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 28,
                fontFamily: "Poppins_700Bold",
                color: textColor,
                letterSpacing: 1,
              }}
            >
              M
            </Text>
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: textColor,
                opacity: 0.6,
                marginTop: 2,
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_700Bold",
              color: textColor,
              opacity: 0.7,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginLeft: 18,
            }}
          >
            Explore
          </Text>

          <TouchableOpacity>
            <View style={{ position: "relative" }}>
              <Ionicons name="person-circle-outline" size={34} color={textColor} />
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: "red",
                  position: "absolute",
                  top: 2,
                  right: 2,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f0f0f5",
            borderRadius: 16,
            paddingHorizontal: 12,
            paddingVertical: 10,
            marginBottom: 10,
          }}
        >
          <Ionicons name="search-outline" size={20} color={subText} style={{ marginRight: 8 }} />
          <TextInput
            placeholder="Search songs, albums, artists..."
            placeholderTextColor={subText}
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={{
              flex: 1,
              fontSize: 12,
              color: textColor,
              fontFamily: "Poppins_400Regular",
            }}
          />
        </View>
        <ExploreFilterHeader
          selectedFilter={selectedFilter}
          onSelectFilter={setSelectedFilter}
          textColor={textColor}
          backgroundColor={backgroundColor}
          button={button}
          border={border}
        />
        <ExploreCategoryGrid
          textColor={textColor}
          backgroundColor={backgroundColor}
          cardBackgroundColor={cardBackgroundColor}
        />
        <TrendingReviewedAlbumsSection textColor={textColor} cardBackgroundColor={cardBackgroundColor} />
        <ReviewSpotlightSection textColor={textColor} cardBackgroundColor={cardBackgroundColor} />
        <MostControversialReviewsSection textColor={textColor} cardBackgroundColor={cardBackgroundColor} />

        <CriticsCornerSection textColor={textColor} cardBackgroundColor={cardBackgroundColor} />
      </Animatable.View>
    </ScrollView>
  );
}
