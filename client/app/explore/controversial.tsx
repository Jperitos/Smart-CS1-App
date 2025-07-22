import Header from "@/app/header";
import ControversialAlbumsSection from "@/components/index/genres/ControversialAlbumsSection";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { ScrollView, Text } from "react-native";

const controversialAlbums = [
  {
    id: 1,
    title: "Yeezus",
    artist: "Kanye West",
    image: "https://i.scdn.co/image/ab67616d00001e021dacfbc31cc873d132958af9",
    averageRating: 6.8,
    totalReviews: 1050,
    highlight: "Polarizing production and themes sparked intense fan debate.",
  },
  {
    id: 2,
    title: "Reputation",
    artist: "Taylor Swift",
    image: "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
    averageRating: 7.0,
    totalReviews: 920,
    highlight: "Swift's sharp image shift divided her longtime audience.",
  },
  {
    id: 3,
    title: "Speedin' Bullet 2 Heaven",
    artist: "Kid Cudi",
    image: "https://i.scdn.co/image/ab67616d00001e02a4ea8c76f78b72ce3bda7625",
    averageRating: 5.5,
    totalReviews: 600,
    highlight: "Experimental grunge departure from hip-hop roots stunned fans.",
  },
  {
    id: 4,
    title: "Chemtrails Over the Country Club",
    artist: "Lana Del Rey",
    image: "https://i.scdn.co/image/ab67616d0000b273ca929c6e766cb8591a286e0d",
    averageRating: 7.1,
    totalReviews: 740,
    highlight: "Critics questioned the lyrical content and vintage aesthetics.",
  },
  {
    id: 5,
    title: "Revival",
    artist: "Eminem",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9rrbLuTjWiQfV9lCTYvxlFii2eHlcmGmNA&s",
    averageRating: 6.3,
    totalReviews: 890,
    highlight: "Mixed reviews over political lyrics and pop features.",
  },
  {
    id: 6,
    title: "Jesus Is King",
    artist: "Kanye West",
    image: "https://i.scdn.co/image/ab67616d0000b2731bb797bbfe2480650b6c2964",
    averageRating: 6.0,
    totalReviews: 960,
    highlight: "Gospel pivot challenged expectations and sparked theological takes.",
  },
  {
    id: 7,
    title: "Man on the Moon III",
    artist: "Kid Cudi",
    image: "https://i.scdn.co/image/ab67616d0000b2734fd23a4c21f50d54326a732d",
    averageRating: 6.9,
    totalReviews: 700,
    highlight: "Fans conflicted over return to old themes vs growth.",
  },
  {
    id: 8,
    title: "Queen",
    artist: "Nicki Minaj",
    image: "https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42",
    averageRating: 6.7,
    totalReviews: 830,
    highlight: "Feuds and delivery style stirred debate across fandoms.",
  },
  {
    id: 9,
    title: "Testimony",
    artist: "August Alsina",
    image: "https://i.scdn.co/image/ab67616d0000b273a131750f4f01507ad2a4d3af",
    averageRating: 7.0,
    totalReviews: 650,
    highlight: "Raw honesty in lyrics received mixed emotional reactions.",
  },
  {
    id: 10,
    title: "Born This Way",
    artist: "Lady Gaga",
    image: "https://i.scdn.co/image/ab67616d0000b273a47c0e156ea3cebe37fdcab8",
    averageRating: 8.1,
    totalReviews: 1100,
    highlight: "Religious and LGBTQ+ themes drew both praise and backlash.",
  },
];

export default function ControversialScreen() {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
        paddingTop: 20,
        paddingHorizontal: 20,
      }}
    >
      <Header title="Controversial Albums" textColor={textColor} />

      <Text
        style={{
          fontSize: 22,
          fontFamily: "Poppins_700Bold",
          color: textColor,
          marginBottom: 6,
        }}
      >
        Albums That Stirred Discussion
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Poppins_400Regular",
          color: subText,
          marginBottom: 20,
        }}
      >
        These albums sparked debate and strong opinions—whether for breaking boundaries or taking unexpected turns.
      </Text>

      <ControversialAlbumsSection albums={controversialAlbums} layout="grid" />
    </ScrollView>
  );
}
