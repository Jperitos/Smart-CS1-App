import { jennieAlbums } from "@/components/data/index/albums";
import { artistCarouselData } from "@/components/data/index/artistCarouselData";
import { editorPicks } from "@/components/data/index/editorsPicks";
import { genres } from "@/components/data/index/genre/genres";
import { latestReviews } from "@/components/data/index/latestReviews";
import { topReviews } from "@/components/data/index/topReviews";
import trendingItems from "@/components/data/index/trendingItems";
import AlbumRecommendations from "@/components/index/sections/AlbumRecommendations";
import ArtistCarouselSection from "@/components/index/sections/ArtistCarouselSection";
import EditorsChoiceSection from "@/components/index/sections/EditorsChoiceSection";
import GenreGrid from "@/components/index/sections/GenreGrid";
import LatestReviewsSection from "@/components/index/sections/LatestReviewsSection";
import TopReviewsSection from "@/components/index/sections/TopReviewsSection";
import TrendingSection from "@/components/index/sections/TrendingSection";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Dashboard() {
  const subText = useThemeColor({}, "subText");
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const border = useThemeColor({}, "border");
  const button = useThemeColor({}, "button");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");

  const { width } = Dimensions.get("window");

  const [searchQuery, setSearchQuery] = useState("");
  const filteredItems = trendingItems.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const [selectedTab, setSelectedTab] = useState("For You");
  const tabs = ["For You", "New", "Following", "Reviews"];

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 50,
        paddingBottom: 60,
        paddingHorizontal: width < 400 ? 16 : 20,
        backgroundColor: backgroundColor,
      }}
    >
      <Animatable.View animation="fadeInUp" duration={600} delay={50}>
        {/* Header */}
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
            Feed
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

        {/* Tabs */}

        <View style={{ marginBottom: 28 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins_700Regular",
              color: textColor,
              marginBottom: 12,
            }}
          >
            Explore
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
            {tabs.map((tab) => {
              const isSelected = tab === selectedTab;
              return (
                <TouchableOpacity
                  key={tab}
                  onPress={() => setSelectedTab(tab)}
                  style={{
                    paddingVertical: 6,
                    paddingHorizontal: 16,
                    backgroundColor: isSelected ? button : border,
                    borderRadius: 20,
                    marginRight: 8,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins_500Medium",
                      fontSize: 14,
                      color: isSelected ? "white" : textColor,
                    }}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Sections */}
        <EditorsChoiceSection
          items={editorPicks}
          textColor={textColor}
          subText={subText}
          backgroundColor={backgroundColor}
          border={border}
        />
        <TrendingSection items={filteredItems} textColor={textColor} subText={subText} />
        <GenreGrid
          genres={genres}
          onPressGenre={(genre) => console.log("Tapped:", genre.name)}
          onPressViewAll={() => console.log("Navigate to full genre list")}
          textColor={textColor}
          backgroundColor={backgroundColor}
          border={border}
          subText={subText}
          cardBackgroundColor={cardBackgroundColor}
        />
        <TopReviewsSection
          review={topReviews}
          textColor={textColor}
          subText={subText}
          cardBackgroundColor={cardBackgroundColor}
        />
        <LatestReviewsSection
          reviews={latestReviews}
          textColor={textColor}
          backgroundColor={backgroundColor}
          border={border}
          cardBackgroundColor={cardBackgroundColor}
        />
        <AlbumRecommendations artistName="Jennie" albums={jennieAlbums} textColor={textColor} subTextColor={subText} />
        <ArtistCarouselSection artists={artistCarouselData} textColor={textColor} />
      </Animatable.View>
    </ScrollView>
  );
}
