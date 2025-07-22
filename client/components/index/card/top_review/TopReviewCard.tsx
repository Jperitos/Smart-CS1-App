import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

type TopReview = {
  id: number;
  title: string;
  content: string;
  author?: string;
  image: string;
  rating?: number;
};

type Props = {
  review: TopReview;
  cardBackgroundColor?: string;
};

export default function TopReviewCard({ review, cardBackgroundColor = "rgba(0, 0, 0, 0.6)" }: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push({ pathname: "/screens/top-review/top", params: { id: review.id.toString() } })}
      style={{ borderRadius: 16, overflow: "hidden" }}
    >
      <Image
        source={{ uri: review.image }}
        style={{
          width: "100%",
          height: 400,
          resizeMode: "cover",
        }}
      />

      <BlurView
        intensity={60}
        tint="dark"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 14,
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          backgroundColor: cardBackgroundColor,
        }}
      >
        {review.rating !== undefined && (
          <View
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: 12,
              paddingHorizontal: 8,
              paddingVertical: 4,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Poppins_600SemiBold",
                color: "white",
                marginRight: 4,
              }}
            >
              {review.rating.toFixed(1)}
            </Text>
            <Ionicons name="star" size={14} color="white" />
          </View>
        )}

        <Text
          style={{
            fontSize: 14,
            fontFamily: "Poppins_700Bold",
            color: "#f8f8f8",
            marginBottom: 6,
          }}
        >
          {review.title}
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontFamily: "Poppins_400Regular",
            color: "#dddddd",
            marginBottom: review.author ? 6 : 0,
            lineHeight: 20,
          }}
          numberOfLines={3}
        >
          {review.content}
        </Text>

        {review.author && (
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins_500Medium",
              color: "#bbb",
            }}
          >
            — {review.author}
          </Text>
        )}
      </BlurView>
    </TouchableOpacity>
  );
}
