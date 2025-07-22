import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";

type FullReviewModalProps = {
  visible: boolean;
  onClose: () => void;
  user: string;
  username: string;
  avatar: string;
  bio: string;
  totalReviews: number;
  avgRating: number;
  totalLikes: number;
  comment: string;
  liked?: boolean;
  onToggleLike?: () => void;
};

export default function FullReviewModal({
  visible,
  onClose,
  user,
  username,
  avatar,
  bio,
  totalReviews,
  avgRating,
  totalLikes,
  comment,
  liked = false,
  onToggleLike,
}: FullReviewModalProps) {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.4)",
          justifyContent: "center",
          alignItems: "center",
          padding: 24,
        }}
      >
        <View
          style={{
            backgroundColor: cardBackgroundColor,
            borderRadius: 20,
            padding: 24,
            width: "100%",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* X Close Button */}
          <TouchableOpacity
            onPress={onClose}
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 1,
              padding: 6,
            }}
          >
            <Ionicons name="close" size={22} color={subText} />
          </TouchableOpacity>

          {/* Avatar */}
          <Image
            source={{ uri: avatar }}
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              marginBottom: 12,
            }}
          />

          {/* Name and Username */}
          <Text style={{ fontSize: 17, fontWeight: "600", color: textColor }}>{user}</Text>
          <Text style={{ fontSize: 14, color: subText, marginBottom: 8 }}>@{username}</Text>

          {/* Stats */}
          <Text style={{ fontSize: 13, color: subText, marginBottom: 8 }}>
            {totalReviews} Reviews • {avgRating.toFixed(1)} ★ • {totalLikes} Likes
          </Text>

          {/* Bio */}
          <Text
            style={{
              fontSize: 14,
              color: textColor,
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            {bio}
          </Text>

          {/* Full Comment */}
          <Text
            style={{
              fontSize: 15,
              color: textColor,
              textAlign: "left",
              marginBottom: 20,
            }}
          >
            {comment}
          </Text>

          <TouchableOpacity
            onPress={onToggleLike}
            style={{
              backgroundColor: liked ? "rgba(255,0,85,0.1)" : "#eee",
              borderRadius: 12,
              alignItems: "center",
              paddingVertical: 12,
              paddingHorizontal: 24,
              flexDirection: "row",
              gap: 8,
            }}
          >
            <Ionicons name={liked ? "heart" : "heart-outline"} size={22} color={liked ? "#FF3366" : subText} />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: liked ? "#FF3366" : subText,
              }}
            >
              {liked ? "Liked" : "Like"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
