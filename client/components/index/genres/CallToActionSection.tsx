import AddReviewModal from "@/components/modal/reviews/AddReviewModal";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
type Props = {
  genreName: string;
  userHasReviewed: boolean;
};

export default function CallToActionSection({ genreName, userHasReviewed }: Props) {
  const text = useThemeColor({}, "text");
  const buttonText = useThemeColor({}, "buttonText");
  const buttonBg = useThemeColor({}, "button");
 const cardBackground=useThemeColor({}, "cardBackground")
  const [modalVisible, setModalVisible] = useState(false);
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = (comment: string) => {

    console.log(`New review for ${genreName}: ${comment}`);
    setModalVisible(false);
    setReviewText("");
  };

  if (userHasReviewed) return null;

  return (
    <View style={{ marginTop: 40, padding: 20, borderRadius: 16, backgroundColor:cardBackground }}>
      <Text
        style={{
          fontFamily: "Poppins_600SemiBold",
          fontSize: 16,
          marginBottom: 12,
          color: text,
          textAlign: "center",
        }}
      >
        Be the first to review an album in {genreName}!
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "center", gap: 12 }}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            backgroundColor: buttonBg,
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: buttonText, fontFamily: "Poppins_500Medium", fontSize: 14 }}>
            Add Review
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log("Navigate to explore screen")}
          style={{
            backgroundColor: "#ddd",
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "#000", fontFamily: "Poppins_500Medium", fontSize: 14 }}>
            Explore Albums
          </Text>
        </TouchableOpacity>
      </View>

      {/* Add Review Modal */}
      <AddReviewModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleSubmit}
        reviewText={reviewText}
        setReviewText={setReviewText}
      />
    </View>
  );
}
