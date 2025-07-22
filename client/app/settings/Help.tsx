import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";
import Header from "../header";

export default function Help() {
  const router = useRouter();

  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const subText = useThemeColor({}, "subText");
  const button = useThemeColor({}, "button");

  return (
    <View style={{ flex: 1, backgroundColor, padding: 20, paddingTop: 30 }}>
      <Header title="Help & FAQ" textColor={textColor} />

      <Text style={{ fontSize: 16, color: subText, lineHeight: 24 }}>
        Need help using Muse? Here are a few things you can try:
        {"\n\n"}- Check out the FAQ in the next update.
        {"\n"}- Still lost? Email us at <Text style={{ color: button, fontWeight: "500" }}>help@museapp.io</Text>.
        {"\n\n"}We’re here to guide you in discovering and reviewing great music 🎶
      </Text>
    </View>
  );
}
