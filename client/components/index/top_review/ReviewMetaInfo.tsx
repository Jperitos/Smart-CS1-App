import { useThemeColor } from "@/hooks/useThemeColor";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type Props = {
  createdAt: string;
  updatedAt?: string;
};

export default function ReviewMetaInfo({ createdAt, updatedAt }: Props) {
  const subText = useThemeColor({}, "subText");

  return (
    <View style={{ marginTop: 16, flexDirection: "row", alignItems: "center" }}>
      <MaterialIcons name="schedule" size={16} color={subText} style={{ marginRight: 6 }} />
      <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 12, color: subText }}>
        Reviewed on {createdAt}
        {updatedAt && updatedAt !== createdAt ? ` • Edited on ${updatedAt}` : ""}
      </Text>
    </View>
  );
}
