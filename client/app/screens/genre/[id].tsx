import Header from "@/app/header";
import { controversialAlbums } from "@/components/data/index/genre/controversialAlbums";
import { genres } from "@/components/data/index/genre/genres";
import { genreStats } from "@/components/data/index/genre/genreStats";
import { mockReviews } from "@/components/data/index/genre/mockReviews";
import { newReleases } from "@/components/data/index/genre/newReleases";
import { topAlbums } from "@/components/data/index/genre/topAlbums";
import { topArtistsByGenre } from "@/components/data/index/genre/topArtistsByGenre";
import { topContributors } from "@/components/data/index/genre/topContributors";
import CallToActionSection from "@/components/index/genres/CallToActionSection";
import ControversialAlbumsSection from "@/components/index/genres/ControversialAlbumsSection";
import GenreDescriptionSection from "@/components/index/genres/GenreDescriptionSection";
import GenreRecentReviews from "@/components/index/genres/GenreRecentReviews";
import GenreStatsSection from "@/components/index/genres/GenreStatsSection";
import NewReleasesSection from "@/components/index/genres/NewReleasesSection";
import RelatedGenresSection from "@/components/index/genres/RelatedGenresSection";
import TopAlbumsByGenre from "@/components/index/genres/TopAlbumsByGenre";
import TopArtistsByGenre from "@/components/index/genres/TopArtistsByGenre";
import TopContributorsSection from "@/components/index/genres/TopContributorsSection";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
export default function GenreDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const genre = genres.find((g) => g.id.toString() === id);
const userHasReviewedThisGenre = false; 

  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const backgroundColor = useThemeColor({}, "background");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");
  const button = useThemeColor({}, "button");

  if (!genre) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
        <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 16 }}>Genre not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ paddingTop: 30, padding: 30 }}>
      <Header title="Music" textColor={textColor} />
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image source={{ uri: genre.image }} style={{ width: 100, height: 100, borderRadius: 16, marginBottom: 12 }} />
        <Text style={{ fontSize: 24, fontFamily: "Poppins_700Bold" }}>{genre.name}</Text>
        <Text style={{ fontSize: 14, color: "#888", fontFamily: "Poppins_400Regular" }}>
          {genre.reviewCount} Reviews
        </Text>
      </View>

      <TopAlbumsByGenre albums={topAlbums} />
      <GenreRecentReviews reviews={mockReviews} />
      <TopArtistsByGenre artists={topArtistsByGenre}/>
      <GenreStatsSection
  totalAlbumsReviewed={genreStats.totalAlbumsReviewed}
  averageRating={genreStats.averageRating}
  numberOfReviewers={genreStats.numberOfReviewers}
  mostUsedTags={genreStats.mostUsedTags}
/>
<GenreDescriptionSection
  description={
    genre.description ||
    "This genre is characterized by experimental sound design and emotional storytelling. It has evolved over decades, influencing numerous subcultures and musical innovations."
  }
/>
<TopContributorsSection contributors={topContributors} />
<ControversialAlbumsSection albums={controversialAlbums} />
<NewReleasesSection albums={newReleases} />
<RelatedGenresSection currentGenreId={genre.id}/>
<CallToActionSection genreName={genre.name} userHasReviewed={userHasReviewedThisGenre} />

    </ScrollView>
  );
}
