import { useThemeColor } from "@/hooks/useThemeColor";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

interface AddReviewModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (comment: string) => void;
  reviewText: string;
  setReviewText: (text: string) => void;
}

export default function AddReviewModal({ visible, onClose, onSubmit, reviewText, setReviewText }: AddReviewModalProps) {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const backgroundColor = useThemeColor({}, "background");
  const border = useThemeColor({}, "border");
  const button = useThemeColor({}, "button");

  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.3)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: cardBackgroundColor,
            padding: 24,
            borderRadius: 24,
            width: "90%",
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 5 },
          }}
        >
          <Text style={{ color: textColor, fontWeight: "700", fontSize: 20, marginBottom: 14 }}>Leave a Review</Text>

          <TextInput
            placeholder="What did you think?"
            placeholderTextColor={subText}
            value={reviewText}
            onChangeText={setReviewText}
            style={{
              backgroundColor: backgroundColor,
              color: textColor,
              borderRadius: 16,
              padding: 14,
              height: 120,
              textAlignVertical: "top",
              borderWidth: 1,
              borderColor: border,
              marginBottom: 20,
              fontSize: 15,
            }}
            multiline
          />

          <TouchableOpacity
            onPress={() => {
              if (reviewText.trim()) onSubmit(reviewText.trim());
            }}
            style={{
              backgroundColor: button,
              paddingVertical: 14,
              borderRadius: 14,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600", fontSize: 15 }}>Post Review</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} style={{ marginTop: 16, alignItems: "center" }}>
            <Text style={{ color: subText, fontSize: 13 }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
