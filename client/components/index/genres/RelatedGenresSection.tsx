import { genres } from "@/components/data/index/genre/genres";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

type Props = {
  currentGenreId: number;
};

export default function RelatedGenresSection({ currentGenreId }: Props) {
  const textColor = useThemeColor({}, "text");
  const cardBg = useThemeColor({}, "cardBackground");
  const subText=useThemeColor ({}, "subText")
  const router = useRouter();

  const related = genres.filter((g) => g.id !== currentGenreId).slice(0, 6); 

  return (
    <View style={{ marginTop: 0 }}>
      <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 18, marginBottom: 12, color: textColor }}>
        Related Genres
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {related.map((genre) => (
          <TouchableOpacity
            key={genre.id}
            onPress={() => router.push(`/screens/genre/${genre.id}`)}
            style={{
              marginRight: 12,
              backgroundColor: cardBg,
              borderRadius: 16,
              overflow: "hidden",
              width: 140,
            }}
          >
            <Image source={{ uri: genre.image }} style={{ width: "100%", height: 90 }} />
            <View style={{ padding: 8 }}>
              <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 14,color: textColor }}>{genre.name}</Text>
              <Text style={{ fontSize: 12, color: subText, fontFamily: "Poppins_400Regular" }}>
                {genre.reviewCount} reviews
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
