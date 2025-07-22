import Header from "@/app/header";
import EditorsPicksGrid from "@/components/index/editors/EditorsPicksGrid";
import { useThemeColor } from "@/hooks/useThemeColor";
import { View } from "react-native";
export default function EditorsPicksScreen() {
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");

  return (
    <View style={{ flex: 1, backgroundColor, paddingTop: 70, paddingHorizontal: 20 }}>
      <Header title="All Editor's Choice" textColor={textColor} />
      <EditorsPicksGrid />
    </View>
  );
}
