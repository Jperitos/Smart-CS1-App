import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

type Comment = {
  id: number;
  user: string;
  text: string;
};

const initialComments: Comment[] = [
  { id: 1, user: "melody_lover", text: "This track gave me chills. One of SZA's best!" },
  { id: 2, user: "beats_by_j", text: "The minimal production makes her vocals shine." },
  { id: 3, user: "souljunkie", text: "SZA really knows how to hit the feels." },
];

export default function EditorComments() {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const border = useThemeColor({}, "border");
  const button = useThemeColor({}, "button");

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [likedComments, setLikedComments] = useState<{ [key: number]: boolean }>({});

  const toggleLike = (id: number) => {
    setLikedComments((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePost = () => {
    const trimmed = comment.trim();
    if (trimmed === "") {
      Alert.alert("Empty Comment", "Please write something before posting.");
      return;
    }

    const newComment: Comment = {
      id: Date.now(),
      user: "hsjaodjak",
      text: trimmed,
    };

    setComments((prev) => [newComment, ...prev]);
    setComment("");
  };

  return (
    <View style={{ marginTop: 32 }}>
      <Text style={{ fontSize: 18, fontFamily: "Poppins_700Bold", color: textColor, marginBottom: 12 }}>
        Listener Comments
      </Text>

      {comments.map((c) => (
        <View
          key={c.id}
          style={{
            backgroundColor: cardBackgroundColor,
            borderRadius: 12,
            padding: 12,
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1, paddingRight: 12 }}>
            <Text style={{ fontWeight: "600", color: textColor, marginBottom: 4 }}>{c.user}</Text>
            <Text style={{ color: subText, lineHeight: 20 }}>{c.text}</Text>
          </View>
          <TouchableOpacity onPress={() => toggleLike(c.id)}>
            <Ionicons
              name={likedComments[c.id] ? "heart" : "heart-outline"}
              size={20}
              color={likedComments[c.id] ? "red" : subText}
            />
          </TouchableOpacity>
        </View>
      ))}

      <View style={{ marginTop: 20, marginBottom: 40 }}>
        <Text style={{ fontSize: 16, color: textColor, marginBottom: 8 }}>Leave a Comment</Text>
        <TextInput
          placeholder="Write something..."
          placeholderTextColor={subText}
          value={comment}
          onChangeText={setComment}
          multiline
          style={{
            backgroundColor: cardBackgroundColor,
            borderColor: border,
            borderWidth: 1,
            borderRadius: 10,
            padding: 12,
            fontSize: 14,
            color: textColor,
            minHeight: 80,
            textAlignVertical: "top",
          }}
        />
        <TouchableOpacity
          onPress={handlePost}
          style={{
            backgroundColor: button,
            paddingVertical: 12,
            borderRadius: 20,
            marginTop: 12,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Poppins_600SemiBold" }}>Post Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
