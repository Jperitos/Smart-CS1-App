import Header from "@/app/header";
import { useThemeColor } from "@/hooks/useThemeColor";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const mockGenres = [
  {
    id: "1",
    name: "Hip-Hop",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUlQhnJUIlLtSCQNGdEEiFJBBsulnIvg9ntg&s",
    reviews: 240,
  },
  {
    id: "2",
    name: "Pop",
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pop-music-album-cover-design-template-%281%29-f3b873e61465d4524bb99bf02a56c649_screen.jpg?ts=1706311822",
    reviews: 180,
  },
  {
    id: "3",
    name: "Rock",
    image:
      "https://media.istockphoto.com/id/1449836337/vector/vintage-styled-illustration-of-the-skull-with-rock-music-themed-tattoos-on-it-for-t-shirt.jpg?s=612x612&w=0&k=20&c=krVp4xjZV0yXMAwoUk-sCSXj_QJd77b2Yx8dESLKOu8=",
    reviews: 220,
  },
  {
    id: "4",
    name: "R&B",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2RZ9tvnUhu-siW5NgUEXHKrJFmNiK5HvUQ&s",
    reviews: 130,
  },
  {
    id: "5",
    name: "Electronic",
    image: "https://cdn.venngage.com/template/thumbnail/small/79879260-0211-46bb-abcd-968fb4e2c0ea.webp",
    reviews: 200,
  },
  {
    id: "6",
    name: "Jazz",
    image:
      "https://marketplace.canva.com/EAE90oFC6zY/1/0/1600w/canva-black-orange-retro-dizzy-jazz-album-cover-varigMb33wc.jpg",
    reviews: 90,
  },
  {
    id: "7",
    name: "Classical",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZ23xs9__N6e46OEbWnr0_m9llyCGqGdOhg&s",
    reviews: 85,
  },
  {
    id: "8",
    name: "Indie",
    image: "https://i.pinimg.com/736x/9f/39/35/9f3935cd4b08d5ed66fe87255274798d.jpg",
    reviews: 150,
  },
  {
    id: "9",
    name: "Reggae",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGSf10rhGZZOslXAsDjo42ctMpNe45OLQiw&s",
    reviews: 110,
  },
  {
    id: "10",
    name: "Metal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXhQOI7eSZlhAKj7uevKLowzuM7gC5LTLwA&s",
    reviews: 160,
  },
];

export default function GenreScreen() {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const button = useThemeColor({}, "button");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const backgroundColor = useThemeColor({}, "background");

  const [likedGenres, setLikedGenres] = useState<string[]>([]);

  const toggleLike = (id: string) => {
    setLikedGenres((prev) => (prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]));
  };

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 30,
        backgroundColor: backgroundColor,
        flex: 1,
      }}
    >
      <Header title="Genres" textColor={textColor} />

      <Text
        style={{
          fontSize: 22,
          fontWeight: "700",
          marginBottom: 6,
          fontFamily: "Poppins_700Bold",
          color: textColor,
        }}
      >
        Explore Music Genres
      </Text>
      <Text
        style={{
          fontSize: 14,
          marginBottom: 20,
          fontFamily: "Poppins_400Regular",
          color: subText,
        }}
      >
        Discover different styles of music, from timeless classics to trending hits. Dive into reviews and see what
        people love.
      </Text>

      <FlatList
        data={mockGenres}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ gap: 12 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => {
          const isLiked = likedGenres.includes(item.id);

          return (
            <TouchableOpacity
              style={{
                backgroundColor: cardBackgroundColor,
                padding: 12,
                borderRadius: 16,
                alignItems: "center",
                justifyContent: "flex-start",
                marginBottom: 12,
                width: "48%",
                elevation: 2,
              }}
              onPress={() => console.log("Pressed:", item.name)}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: "100%",
                  height: 100,
                  borderRadius: 12,
                  marginBottom: 10,
                }}
                resizeMode="cover"
              />

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins_600SemiBold",
                  color: textColor,
                  textAlign: "center",
                  marginBottom: 6,
                }}
              >
                {item.name}
              </Text>

              {/* Stats + Like Button in One Row */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: subText,
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  {item.reviews} reviews
                </Text>

                <TouchableOpacity
                  style={{
                    padding: 4,
                  }}
                  onPress={() => toggleLike(item.id)}
                >
                  <AntDesign name={isLiked ? "heart" : "hearto"} size={16} color={isLiked ? "red" : subText} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
