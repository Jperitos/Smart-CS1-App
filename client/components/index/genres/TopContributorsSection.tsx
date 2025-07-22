import { useThemeColor } from "@/hooks/useThemeColor";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

type Contributor = {
  id: number;
  name: string;
  avatar: string;
  reviewCount: number;
};

type Props = {
  contributors: Contributor[];
};

export default function TopContributorsSection({ contributors }: Props) {
  const textColor = useThemeColor({}, "text");
  const cardBg = useThemeColor({}, "cardBackground");
  const buttonBg = useThemeColor({}, "button");
  const subTextColor = useThemeColor({}, "subText");

  return (
    <View style={{ marginBottom: 30 }}>
      <Text
        style={{
          fontFamily: "Poppins_700Bold",
          fontSize: 18,
          color: textColor,
          marginBottom: 12,
        }}
      >
        Top Contributors
      </Text>

      <FlatList
        data={contributors}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: cardBg,
              padding: 12,
              borderRadius: 16,
              marginRight: 12,
              width: 180,
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Image
              source={{ uri: item.avatar }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                alignSelf: "center",
                marginBottom: 10,
              }}
            />
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 14,
                color: textColor,
                textAlign: "center",
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 13,
                color: subTextColor,
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              {item.reviewCount} reviews
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: buttonBg,
                paddingVertical: 6,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 13,
                  fontFamily: "Poppins_500Medium",
                  textAlign: "center",
                }}
              >
                View Profile
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
