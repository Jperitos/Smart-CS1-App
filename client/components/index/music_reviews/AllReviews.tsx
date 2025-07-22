import { mockReviews } from "@/components/data/reviews/mockReviews";
import { useThemeColor } from "@/hooks/useThemeColor";
import { formatDistanceToNow } from "date-fns";
import { Heart } from "lucide-react-native";
import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

export default function AllReview() {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const [reviews, setReviews] = useState(mockReviews);
  const [liked, setLiked] = useState<boolean[]>(mockReviews.map(() => false));

  const handleLike = (index: number) => {
    const updatedLiked = [...liked];
    const updatedReviews = [...reviews];

    updatedLiked[index] = !updatedLiked[index];
    updatedReviews[index].likes += updatedLiked[index] ? 1 : -1;

    setLiked(updatedLiked);
    setReviews(updatedReviews);
  };

  return (
    <FlatList
      data={reviews}
      keyExtractor={(_, i) => i.toString()}
      contentContainerStyle={{ padding: 16 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <View
          style={{
            backgroundColor: cardBackgroundColor,
            borderRadius: 16,
            padding: 16,
            marginBottom: 16,
          }}
        >
          {/* Top Row - User Info */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{ uri: item.avatar }}
                style={{ width: 30, height: 30, borderRadius: 50, marginRight: 8 }}
              />
              <Text style={{ color: textColor, fontWeight: "600" }}>{item.user}</Text>
            </View>
            <Text style={{ color: textColor, fontWeight: "500", fontSize: 13 }}>{item.rating?.toFixed(1)} ⭐</Text>
          </View>

          {/* Album Info */}
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 12 }}>
            <Image
              source={{ uri: item.albumImage }}
              style={{ width: 60, height: 60, borderRadius: 12, marginRight: 12 }}
            />
            <Text style={{ color: textColor, fontSize: 16, fontWeight: "600", flexShrink: 1 }}>{item.albumTitle}</Text>
          </View>

          {/* Review Comment */}
          <Text style={{ color: subText, marginTop: 8 }} numberOfLines={4}>
            {item.comment}
          </Text>

          {/* Footer */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, alignItems: "center" }}>
            <Text style={{ color: subText, fontSize: 12 }}>{formatDistanceToNow(new Date(item.date))} ago</Text>
            <TouchableOpacity
              onPress={() => handleLike(index)}
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Heart
                size={18}
                color={liked[index] ? "#FF4C4C" : subText}
                fill={liked[index] ? "#FF4C4C" : "transparent"}
              />
              <Text style={{ color: subText, fontSize: 12 }}>{item.likes}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}
