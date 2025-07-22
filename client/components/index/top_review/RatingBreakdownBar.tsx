import { useThemeColor } from "@/hooks/useThemeColor";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";

type Props = {
  breakdown: { [rating: number]: number }; // e.g. { 5: 40, 4: 20, ... }
};

export default function RatingBreakdownBar({ breakdown }: Props) {
  const textColor = useThemeColor({}, "text");
  const barColor = useThemeColor({}, "tint");

  const maxCount = Math.max(...Object.values(breakdown));

  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Poppins_600SemiBold",
          color: textColor,
          marginBottom: 12,
        }}
      >
        Rating Breakdown
      </Text>
      {Object.entries(breakdown)
        .sort((a, b) => Number(b[0]) - Number(a[0]))
        .map(([rating, count]) => (
          <View
            key={rating}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                width: 20,
                fontFamily: "Poppins_500Medium",
                fontSize: 14,
                color: textColor,
              }}
            >
              {rating}
            </Text>
            <FontAwesome name="star" size={14} color={barColor} style={{ marginRight: 6 }} />
            <View
              style={{
                flex: 1,
                height: 10,
                backgroundColor: "#ccc",
                borderRadius: 5,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  width: `${(count / maxCount) * 100}%`,
                  height: "100%",
                  backgroundColor: barColor,
                }}
              />
            </View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 12,
                color: textColor,
                marginLeft: 8,
              }}
            >
              {count}
            </Text>
          </View>
        ))}
    </View>
  );
}
