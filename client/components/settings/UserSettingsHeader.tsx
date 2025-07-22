import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  totalReviews: number;
  averageRating: number;
  textColor: string;
  cardBackgroundColor: string;
  onEdit?: () => void;
};

export default function UserSettingsHeader({
  name,
  username,
  avatar,
  bio,
  totalReviews,
  averageRating,
  textColor,
  cardBackgroundColor,
  onEdit,
}: Props) {
  return (
    <View
      style={{
        backgroundColor: cardBackgroundColor,
        padding: 16,
        borderRadius: 16,
        marginBottom: 20,
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
      }}
    >
      <Image source={{ uri: avatar }} style={{ width: 64, height: 64, borderRadius: 32 }} />
      <View style={{ flex: 1 }}>
        <Text style={{ color: textColor, fontFamily: "Poppins_700Bold", fontSize: 16 }}>{name}</Text>
        <Text style={{ color: textColor, fontSize: 13, opacity: 0.7 }}>@{username}</Text>
        {bio ? <Text style={{ color: textColor, fontSize: 12, opacity: 0.7, marginTop: 4 }}>{bio}</Text> : null}
        <Text style={{ color: textColor, fontSize: 12, marginTop: 4 }}>
          {totalReviews} Reviews | ★ {averageRating.toFixed(1)}
        </Text>
      </View>
      <TouchableOpacity onPress={onEdit}>
        <Ionicons name="create-outline" size={20} color={textColor} />
      </TouchableOpacity>
    </View>
  );
}
