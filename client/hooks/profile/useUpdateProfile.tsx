import { useState } from "react";
import API from "@/utils/api";
import { Alert } from "react-native";

export default function useUpdateProfile() {
  const [loading, setLoading] = useState(false);

  const updateProfile = async (data: { fullName: string; username: string; bio: string; avatar?: string }) => {
    try {
      setLoading(true);
      const res = await API.put("/user/update-profile", data);
      Alert.alert("Success", "Profile updated successfully.");
      return res.data.user;
    } catch (error: any) {
      console.error("Update failed:", error);
      Alert.alert("Error", error.response?.data?.error || "Something went wrong.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { updateProfile, loading };
}
