import { View, Text } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import Header from "../header";

export default function Terms() {
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const subText = useThemeColor({}, "subText");

  return (
    <View style={{ flex: 1, backgroundColor, padding: 20, paddingTop: 30 }}>
      <Header title="Terms & Privacy" textColor={textColor} />

      <Text style={{ fontSize: 16, color: subText, lineHeight: 24 }}>
        Welcome to Muse! By using this app, you agree to our Terms of Service and Privacy Policy.
        {"\n\n"}- You are responsible for your reviews and the content you share.{"\n"}- Do not post harmful, offensive,
        or copyrighted content.{"\n"}- Respect others’ opinions and reviews.{"\n"}- We collect limited data to improve
        your experience, but we respect your privacy.
        {"\n\n"}
        By continuing to use Muse, you agree to these terms. For questions, contact us at{" "}
        <Text style={{ color: textColor, fontWeight: "500" }}>legal@museapp.io</Text>.{"\n\n"}Enjoy discovering and
        reviewing your favorite music 🎧
      </Text>
    </View>
  );
}
