import { useState } from "react";
import { Alert } from "react-native";
import API from "@/utils/api";

export default function useChangePassword() {
  const [loading, setLoading] = useState(false);

  const changePassword = async (currentPassword: string, newPassword: string, confirmPassword: string) => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return false;
    }

    if (newPassword.length < 8) {
      Alert.alert("Error", "New password must be at least 8 characters long.");
      return false;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "New passwords do not match.");
      return false;
    }

    try {
      setLoading(true);
      const res = await API.put("/user/change-password", {
        currentPassword,
        newPassword,
      });

      Alert.alert("Success", res.data.message || "Password changed successfully.");
      return true;
    } catch (err: any) {
      console.error("Password change failed:", err);
      Alert.alert("Error", err.response?.data?.error || "Failed to change password.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { changePassword, loading };
}
