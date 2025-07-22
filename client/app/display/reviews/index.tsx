import Header from "@/app/header";
import AllReview from "@/components/index/music_reviews/AllReviews";
import { useThemeColor } from "@/hooks/useThemeColor";
import { View } from "react-native";

export default function AllUserReviewsScreen() {
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");

  return (
    <View style={{ flex: 1, backgroundColor, paddingTop: 70, paddingHorizontal: 20 }}>
      <Header title="All User Reviews" textColor={textColor} />
      <AllReview />
    </View>
  );
}
