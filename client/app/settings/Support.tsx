import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";
import Header from "../header";
export default function Support() {
  const router = useRouter();

  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const subText = useThemeColor({}, "subText");
  const border = useThemeColor({}, "border");
  const button = useThemeColor({}, "button");

  return (
    <View style={{ flex: 1, backgroundColor, padding: 20, paddingTop: 30 }}>
      <Header title="Contact & Support" textColor={textColor} />
      {/* Body Text */}
      <Text style={{ fontSize: 16, color: subText, lineHeight: 24 }}>
        Having trouble or have questions about your account or reviews? We're here to help!{"\n\n"}
        You can reach our support team anytime at{" "}
        <Text style={{ color: button, fontWeight: "500" }}>support@museapp.io</Text> and we'll get back to you as soon
        as possible.
        {"\n\n"}Make sure to include your username and a short description of the issue to help us assist you faster.
        {"\n\n"}Thank you for being part of the Muse community 🎧
      </Text>
    </View>
  );
}
