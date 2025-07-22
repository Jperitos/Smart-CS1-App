import { useThemeColor } from "@/hooks/useThemeColor";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";


const isLoggedIn = true;

type Album = {
  id: number;
  title: string;
  artist: string;
  image: string;
  releaseDate: string;
};

type Props = {
  albums: Album[];
};

export default function NewReleasesSection({ albums }: Props) {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const cardBackground = useThemeColor({}, "cardBackground");
  const buttonColor = useThemeColor({}, "button");
const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }); // e.g., June 12, 2023
};

  return (
    <View style={{ marginBottom: 30 }}>
      <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 18, color: textColor, marginBottom: 12 }}>
        New Releases
      </Text>
      <FlatList
        data={albums}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: cardBackground,
              borderRadius: 16,
              padding: 12,
              marginRight: 12,
              width: 220,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: 120, borderRadius: 12, marginBottom: 8 }}
            />
            <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 15, color: textColor }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: 13, color: subText, fontFamily: "Poppins_400Regular" }}>
              by {item.artist}
            </Text>
           <Text style={{ fontSize: 12, color: subText, marginTop: 4 }}>
  Released on {formatDate(item.releaseDate)}
</Text>


            {isLoggedIn && (
              <TouchableOpacity
                style={{
                  backgroundColor: buttonColor,
                  paddingVertical: 6,
                  borderRadius: 8,
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "white", fontSize: 13, textAlign: "center", fontFamily: "Poppins_500Medium" }}>
                  Add Review
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
}
