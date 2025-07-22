
import { useThemeColor } from "@/hooks/useThemeColor";
import { FlatList, Text, View } from "react-native";
import TopArtistCard from "../card/genre/TopArtistCard";

type Artist = {
  id: number;
  name: string;
  image: string;
  albumCount: number;
};

type Props = {
  artists: Artist[];
};

export default function TopArtistsByGenre({ artists }: Props) {
  const textColor = useThemeColor({}, "text");

  return (
    <View style={{ marginVertical: 30 }}>
      <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 18, color: textColor, marginBottom: 12 }}>
        Top Artists
      </Text>
      <FlatList
        horizontal
        data={artists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TopArtistCard
            name={item.name}
            image={item.image}
            albumCount={item.albumCount}
            onPress={() => {
              // Navigate to artist profile if needed
              // router.push(`/artist/${item.id}`)
            }}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
