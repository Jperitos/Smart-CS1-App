import { mockReviews } from "@/components/data/reviews/mockReviews";
import AddReviewModal from "@/components/modal/reviews/AddReviewModal";
import FullReviewModal from "@/components/modal/reviews/FullReviewModal";
import { useThemeColor } from "@/hooks/useThemeColor";
import { formatDistanceToNow } from "date-fns";
import { router } from "expo-router";
import { Heart } from "lucide-react-native";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
export default function MusicReviewSection() {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const backgroundColor = useThemeColor({}, "background");
  const border = useThemeColor({}, "border");
  const button = useThemeColor({}, "button");

  const [reviews, setReviews] = useState(mockReviews);
  const [liked, setLiked] = useState<boolean[]>(mockReviews.map(() => false));
  const [reviewText, setReviewText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [fullCommentModal, setFullCommentModal] = useState<null | number>(null);

  const handleLike = (index: number) => {
    const updatedLiked = [...liked];
    const updatedReviews = [...reviews];

    updatedLiked[index] = !updatedLiked[index];
    updatedReviews[index].likes += updatedLiked[index] ? 1 : -1;

    setLiked(updatedLiked);
    setReviews(updatedReviews);
  };

  return (
    <View style={{ marginTop: 16 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "700", color: textColor }}>Reviews by Listeners</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            backgroundColor: button,
            paddingVertical: 6,
            paddingHorizontal: 12,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 14 }}>Add</Text>
        </TouchableOpacity>
      </View>
      {/* Reviews */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {reviews.slice(0, 5).map((review, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setFullCommentModal(index)}
            style={{
              backgroundColor: cardBackgroundColor,
              borderRadius: 16,
              padding: 16,
              marginBottom: 12,
            }}
          >
            {/* User Info */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{ uri: review.avatar }}
                  style={{ width: 30, height: 30, borderRadius: 50, marginRight: 8 }}
                />
                <Text style={{ color: textColor, fontWeight: "600" }}>{review.user}</Text>
              </View>
              <Text style={{ color: textColor, fontWeight: "500", fontSize: 13 }}>{review.rating?.toFixed(1)} ⭐</Text>
            </View>

            {/* Comment */}
            <Text numberOfLines={2} style={{ color: subText, marginTop: 4 }}>
              {review.comment}
            </Text>

            {/* Footer */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 8,
                alignItems: "center",
              }}
            >
              <Text style={{ color: subText, fontSize: 12 }}>{formatDistanceToNow(new Date(review.date))} ago</Text>
              <TouchableOpacity
                onPress={() => handleLike(index)}
                style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
              >
                <Heart
                  size={18}
                  color={liked[index] ? "#FF4C4C" : subText}
                  fill={liked[index] ? "#FF4C4C" : "transparent"}
                />
                <Text style={{ color: subText, fontSize: 12 }}>{review.likes}</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* View All Reviews Button */}
{reviews.length > 5 && (
  <TouchableOpacity
    onPress={() => router.push("/display/reviews")}
    style={{ alignSelf: "flex-start", marginTop: 4, marginLeft:10 }}
  >
    <Text style={{ color: textColor, fontWeight: "500", fontSize: 13 }}>
      View all reviews →
    </Text>
  </TouchableOpacity>
)}

      <AddReviewModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        reviewText={reviewText}
        setReviewText={setReviewText}
        onSubmit={(comment) => {
          const newReview = {
            user: "Angel Canete",
            username: "angelwave",
            avatar: "https://i.pravatar.cc/150?img=10",
            comment,
            date: new Date().toISOString().split("T")[0],
            likes: 0,
            rating: 4.5,
            bio: "Vocalist & tone snob. 🎙️",
            totalReviews: 19,
            avgRating: 4.6,
            totalLikes: 92,
            liked: false,
          };
          setReviews([newReview, ...reviews]);
          setLiked([false, ...liked]);
          setReviewText("");
          setModalVisible(false);
        }}
      />
      {/* Full Comment Modal */}
      <FullReviewModal
        visible={fullCommentModal !== null}
        onClose={() => setFullCommentModal(null)}
        user={fullCommentModal !== null ? reviews[fullCommentModal].user : ""}
        username={fullCommentModal !== null ? reviews[fullCommentModal].username : ""}
        avatar={fullCommentModal !== null ? reviews[fullCommentModal].avatar : ""}
        comment={fullCommentModal !== null ? reviews[fullCommentModal].comment : ""}
        bio={fullCommentModal !== null ? reviews[fullCommentModal].bio : ""}
        totalReviews={fullCommentModal !== null ? reviews[fullCommentModal].totalReviews : 0}
        avgRating={fullCommentModal !== null ? reviews[fullCommentModal].avgRating : 0}
        totalLikes={fullCommentModal !== null ? reviews[fullCommentModal].totalLikes : 0}
        liked={fullCommentModal !== null ? reviews[fullCommentModal].liked : false}
        onToggleLike={() => {
          if (fullCommentModal !== null) {
            const updated = [...reviews];
            updated[fullCommentModal].liked = !updated[fullCommentModal].liked;
            updated[fullCommentModal].totalLikes += updated[fullCommentModal].liked ? 1 : -1;
            setReviews(updated);
          }
        }}
      />
    </View>
  );
}
