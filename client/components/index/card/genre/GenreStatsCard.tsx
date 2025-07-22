import { useThemeColor } from "@/hooks/useThemeColor";
import { Text, useWindowDimensions, View } from "react-native";

type Props = {
  label: string;
  value: string | number;
};

export default function GenreStatsCard({ label, value }: Props) {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const { width } = useWindowDimensions();

  const isSmallScreen = width < 400;

  return (
    <View
      style={{
        flexBasis: isSmallScreen ? "100%" : "30%",
        padding: 16,
        borderRadius: 16,
        backgroundColor: cardBackgroundColor,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 2,
      }}
    >
      <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 13, color: subText }}>{label}</Text>
      <Text
        style={{
          fontFamily: "Poppins_700Bold",
          fontSize: 22,
          color: textColor,
          marginTop: 4,
        }}
      >
        {value}
      </Text>
    </View>
  );
}
