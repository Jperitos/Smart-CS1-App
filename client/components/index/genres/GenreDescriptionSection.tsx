import { useThemeColor } from "@/hooks/useThemeColor";
import { useState } from "react";
import { LayoutAnimation, Platform, Text, TouchableOpacity, UIManager, View } from "react-native";

type Props = {
  description: string;
};

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function GenreDescriptionSection({ description }: Props) {
  const [expanded, setExpanded] = useState(false);

  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={{ marginBottom: 30 }}>
      <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 18, color: textColor, marginBottom: 10 }}>
        About This Genre
      </Text>

      <Text
        style={{
          fontFamily: "Poppins_400Regular",
          fontSize: 14,
          color: subText,
          lineHeight: 22,
        }}
        numberOfLines={expanded ? undefined : 4}
      >
        {description}
      </Text>

      {description.length > 180 && (
        <TouchableOpacity onPress={toggleExpand}>
          <Text
            style={{
              marginTop: 8,
              fontSize: 14,
              color: subText, 
              fontFamily: "Poppins_500Medium",
            }}
          >
            {expanded ? "Read Less" : "Read More"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
