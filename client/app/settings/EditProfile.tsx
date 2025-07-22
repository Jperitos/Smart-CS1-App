import Input from "@/components/fields/Input";
import Label from "@/components/fields/Label";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useState, useEffect } from "react";
import { Alert, ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import useUpdateProfile from "@/hooks/profile/useUpdateProfile";
import Header from "../header";
import API from "@/utils/api";

export default function EditProfile() {
  const router = useRouter();
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const border = useThemeColor({}, "border");
  const button = useThemeColor({}, "button");
  const subText = useThemeColor({}, "subText");

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState<string | null>(null);

  const { updateProfile } = useUpdateProfile();
  const handleSave = async () => {
    const updated = await updateProfile({
      fullName,
      username,
      bio,
      avatar: avatar ?? undefined,
    });
    if (updated) {
      router.back();
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setAvatar(result.assets[0].uri);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/user/me");
        const user = res.data.user;
        setFullName(user.fullName || "");
        setUsername(user.username || "");
        setBio(user.bio || "");
        setEmail(user.email || "");
        setAvatar(user.avatar || null); // if avatar is available
      } catch (err) {
        console.error("Failed to fetch user", err);
      }
    };
    fetchUser();
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor }}>
      <View style={{ padding: 20, paddingTop: 30, gap: 16 }}>
        <Header title="Edit Profile" textColor={textColor} />

        {/* Profile Picture */}
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Image
            source={
              avatar
                ? { uri: avatar }
                : {
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnZO-HbYIOIzEYS_uNiCS2YtyAn53nJeWbw&s",
                  }
            }
            style={{ width: 90, height: 90, borderRadius: 45, marginBottom: 10 }}
          />

          <TouchableOpacity onPress={pickImage}>
            <Text style={{ color: button, fontWeight: "500" }}>Update Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Full Name */}
        <Label>Full Name</Label>
        <Input value={fullName} onChangeText={setFullName} placeholder="Enter your name" />

        {/* Username */}
        <View style={{ marginTop: 16 }}>
          <Label>Username</Label>
          <Text style={{ fontSize: 12, color: subText, marginBottom: 4 }}>
            This will be shown on your public profile
          </Text>
          <Input value={username} onChangeText={setUsername} placeholder="Enter a username" />
        </View>

        {/* Email (read-only) */}
        <View style={{ marginTop: 16 }}>
          <Label>Email</Label>
          <Input value={email} editable={false} placeholder="Your email" />
        </View>

        {/* Bio */}
        <Label style={{ marginTop: 16 }}>Bio</Label>
        <Input value={bio} onChangeText={setBio} placeholder="Write a short bio" multiline />

        {/* Save Button */}
        <TouchableOpacity
          onPress={handleSave}
          style={{
            marginTop: 30,
            backgroundColor: button,
            paddingVertical: 15,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontFamily: "Poppins_600SemiBold" }}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
