
import { useThemeColor } from "@/hooks/useThemeColor";
import { Image, Text, TouchableOpacity } from "react-native";

type Props = {
  name: string;
  image: string;
  albumCount: number;
  onPress?: () => void;
};

export default function TopArtistCard({ name, image, albumCount, onPress }: Props) {
  const textColor = useThemeColor({}, "text");
  const cardBackgroundColor = useThemeColor({}, "cardBackground");

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 120,
        marginRight: 12,
        borderRadius: 16,
        backgroundColor: cardBackgroundColor,
        padding: 12,
        alignItems: "center",
      }}
    >
      <Image source={{ uri: image }} style={{ width: 64, height: 64, borderRadius: 32, marginBottom: 8 }} />
      <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 14, color: textColor }}>{name}</Text>
      <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 12, color: textColor }}>
        {albumCount} Albums
      </Text>
    </TouchableOpacity>
  );
}
