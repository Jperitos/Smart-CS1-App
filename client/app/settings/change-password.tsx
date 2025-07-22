import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";
import Header from "../header";
import { useState } from "react";
import useChangePassword from "@/hooks/profile/useChangePassword";
export default function ChangePassword() {
  const router = useRouter();

  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");
  const border = useThemeColor({}, "border");
  const button = useThemeColor({}, "button");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { changePassword, loading } = useChangePassword();

  return (
    <View style={{ flex: 1, backgroundColor, padding: 20, paddingTop: 30 }}>
      <Header title="Change Password" textColor={textColor} />
      <Text style={{ color: textColor, marginBottom: 20, fontSize: 14 }}>
        You can update your password below to keep your account secure.
      </Text>
      <View style={{ position: "relative", marginBottom: 20 }}>
        <TextInput
          placeholder="Current Password"
          value={currentPassword}
          onChangeText={setCurrentPassword}
          secureTextEntry={!showCurrent}
          placeholderTextColor={border}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: border,
            paddingVertical: 12,
            fontSize: 16,
            color: textColor,
            paddingRight: 40,
          }}
        />
        <TouchableOpacity
          onPress={() => setShowCurrent(!showCurrent)}
          style={{ position: "absolute", right: 0, top: 12 }}
        >
          <Ionicons name={showCurrent ? "eye-off" : "eye"} size={22} color={border} />
        </TouchableOpacity>
      </View>

      <View style={{ position: "relative", marginBottom: 20 }}>
        <TextInput
          placeholder="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={!showNew}
          placeholderTextColor={border}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: border,
            paddingVertical: 12,
            fontSize: 16,
            color: textColor,
            paddingRight: 40,
          }}
        />
        <TouchableOpacity onPress={() => setShowNew(!showNew)} style={{ position: "absolute", right: 0, top: 12 }}>
          <Ionicons name={showNew ? "eye-off" : "eye"} size={22} color={border} />
        </TouchableOpacity>
      </View>

      <View style={{ position: "relative", marginBottom: 30 }}>
        <TextInput
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirm}
          placeholderTextColor={border}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: border,
            paddingVertical: 12,
            fontSize: 16,
            color: textColor,
            paddingRight: 40,
          }}
        />
        <TouchableOpacity
          onPress={() => setShowConfirm(!showConfirm)}
          style={{ position: "absolute", right: 0, top: 12 }}
        >
          <Ionicons name={showConfirm ? "eye-off" : "eye"} size={22} color={border} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: button,
          paddingVertical: 14,
          borderRadius: 10,
          alignItems: "center",
        }}
        onPress={() => {
          changePassword(currentPassword, newPassword, confirmPassword).then((success) => {
            if (success) {
              router.back();
            }
          });
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}
