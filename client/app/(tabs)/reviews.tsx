import { myReviewData } from "@/components/reviews/data/myReviewData";
import MyReviewFilters from "@/components/reviews/section/MyReviewFilters";
import MyReviewsSection from "@/components/reviews/section/MyReviewsSection";
import UserSummaryHeader from "@/components/reviews/UserSummaryHeader";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
export default function Dashboard() {
  const subText = useThemeColor({}, "subText");
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const border = useThemeColor({}, "border");
  const button = useThemeColor({}, "button");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const [filter, setFilter] = useState("All");
  const [reviews, setReviews] = useState(myReviewData);

  const filteredData = [...reviews].sort((a, b) => {
    switch (filter) {
      case "Highest Rated":
        return b.rating - a.rating;
      case "Most Liked":
        return b.likes - a.likes;
      case "Newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "Oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      default:
        return 0;
    }
  });

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
            Reviews
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
        <View style={{ flex: 1 }}>
          <UserSummaryHeader
            name="Angel Canete"
            username="hsjaodjak"
            avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnZO-HbYIOIzEYS_uNiCS2YtyAn53nJeWbw&s"
            totalReviews={36}
            averageRating={4.3}
            totalLikes={128}
            textColor={textColor}
            cardBackgroundColor={cardBackgroundColor}
          />
        </View>
        <MyReviewFilters onFilterChange={setFilter} textColor={textColor} button={button} border={border} />

        <MyReviewsSection textColor={textColor} cardBackgroundColor={cardBackgroundColor} reviews={filteredData} />
      </Animatable.View>
    </ScrollView>
  );
}
