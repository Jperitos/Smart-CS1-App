import React from "react";
import { ScrollView, Text, View } from "react-native";
import ArtistCarouselCard from "../card/ArtistCarouselCard";

type Artist = {
  id: number;
  name: string;
  image: string;
  genre: string;
};

type ArtistCarouselSectionProps = {
  artists: Artist[];
  textColor?: string;
  title?: string;
};

export default function ArtistCarouselSection({
  artists,
  textColor,
  title = "Featured Artists",
}: ArtistCarouselSectionProps) {
  return (
    <View style={{ marginVertical: 10, paddingBottom: 50 }}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: "Poppins_700Bold",
          marginBottom: 20,
          color: textColor,
        }}
      >
        {title}
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {artists.map((artist) => (
          <ArtistCarouselCard
            key={artist.id}
            id={artist.id}
            name={artist.name}
            image={artist.image}
            genre={artist.genre}
            textColor={textColor}
          />
        ))}
      </ScrollView>
    </View>
  );
}
