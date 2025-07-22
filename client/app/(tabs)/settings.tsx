import SettingsCard from "@/components/settings/card/SettingsCard";
import UserSettingsHeader from "@/components/settings/UserSettingsHeader";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useTheme } from "@/context/ThemeContext";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import API from "@/utils/api";
import { useColorScheme } from "@/hooks/useColorScheme";
import axios from "axios";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import * as SecureStore from "expo-secure-store";
export default function Dashboard() {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    profilePicture: "",
    bio: "",
  });

  const { theme, toggleTheme } = useTheme();

  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");

  const cardBackgroundColor = useThemeColor({}, "cardBackground");

  const router = useRouter();

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const [publicReviews, setPublicReviews] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const getUser = async () => {
        try {
          const res = await API.get("/user/me");
          console.log("Refetched user on focus:", res.data.user);
          setUser(res.data.user);
        } catch (err) {
          console.error("Failed to refetch user on focus:", err);
        }
      };

      getUser();
    }, [])
  );
  const handleLogout = async () => {
    Alert.alert("Confirm Logout", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          // Clear tokens or any saved user data
          await SecureStore.deleteItemAsync("token");
          await SecureStore.deleteItemAsync("user");

          // Navigate to landing page
          router.push("/");
        },
      },
    ]);
  };
  return (
    <ScrollView stickyHeaderIndices={[2]} showsVerticalScrollIndicator={false}>
      <Animatable.View
        animation="fadeInUp"
        duration={600}
        delay={50}
        style={{
          flex: 1,
          backgroundColor: backgroundColor,
          paddingTop: 50,
          paddingHorizontal: 20,
          paddingBottom: 100,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 28,
                fontFamily: "Poppins_700Bold",
                color: textColor,
                letterSpacing: 1,
              }}
            >
              M
            </Text>
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: textColor,
                opacity: 0.6,
                marginTop: 2,
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_700Bold",
              color: textColor,
              opacity: 0.7,
              textTransform: "uppercase",
              letterSpacing: 1,
              marginLeft: 18,
            }}
          >
            Settings
          </Text>

          <TouchableOpacity>
            <View style={{ position: "relative" }}>
              <Ionicons name="person-circle-outline" size={34} color={textColor} />
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: "red",
                  position: "absolute",
                  top: 2,
                  right: 2,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <UserSettingsHeader
          name={user.fullName || "Unnamed User"}
          username={user.username || "anonymous"}
          avatar={
            user.profilePicture?.trim()
              ? user.profilePicture
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnZO-HbYIOIzEYS_uNiCS2YtyAn53nJeWbw&s"
          }
          bio={user.bio}
          totalReviews={35}
          averageRating={4.2}
          textColor={textColor}
          cardBackgroundColor={cardBackgroundColor}
          onEdit={() => router.push("/settings/EditProfile")}
        />

        <View
          style={{
            backgroundColor: cardBackgroundColor,
            borderRadius: 16,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins_600SemiBold",
              color: textColor,
              padding: 12,
            }}
          >
            Account Settings
          </Text>

          <SettingsCard
            title="Edit Profile"
            icon="create-outline"
            onPress={() => router.push("/settings/EditProfile")}
            textColor={textColor}
          />

          <SettingsCard
            title="Change Password"
            icon="key-outline"
            onPress={() => router.push("/settings/change-password")}
            textColor={textColor}
          />
          <SettingsCard title="Delete Account" icon="trash-outline" onPress={() => {}} textColor={textColor} />
        </View>
        <View
          style={{
            backgroundColor: cardBackgroundColor,
            borderRadius: 16,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins_600SemiBold",
              color: textColor,
              padding: 12,
            }}
          >
            App Preferences
          </Text>
          <SettingsCard
            title="Dark Mode"
            icon="moon-outline"
            isToggle
            toggleValue={theme === "dark"}
            onToggleChange={toggleTheme}
            textColor={textColor}
          />

          <SettingsCard
            title="Notifications"
            icon="notifications-outline"
            isToggle
            toggleValue={notificationsEnabled}
            onToggleChange={setNotificationsEnabled}
            textColor={textColor}
          />
        </View>

        <View
          style={{
            backgroundColor: cardBackgroundColor,
            borderRadius: 16,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins_600SemiBold",
              color: textColor,
              padding: 12,
            }}
          >
            Privacy & Security
          </Text>

          <SettingsCard
            title="Public Reviews"
            icon="eye-outline"
            isToggle
            toggleValue={publicReviews}
            onToggleChange={setPublicReviews}
            textColor={textColor}
          />

          <SettingsCard
            title="Blocked Users"
            icon="ban-outline"
            onPress={() => {
              // Future: router.push("/blocked-users");
            }}
            textColor={textColor}
          />
        </View>

        <View
          style={{
            backgroundColor: cardBackgroundColor,
            borderRadius: 16,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Poppins_600SemiBold",
              color: textColor,
              padding: 12,
            }}
          >
            Support & About
          </Text>

          <SettingsCard
            title="Help & FAQ"
            icon="help-circle-outline"
            onPress={() => router.push("/settings/Help")}
            textColor={textColor}
          />

          <SettingsCard
            title="Contact Support"
            icon="chatbubble-ellipses-outline"
            onPress={() => router.push("/settings/Support")}
            textColor={textColor}
          />

          <SettingsCard
            title="Terms & Privacy"
            icon="document-text-outline"
            onPress={() => router.push("/settings/Terms")}
            textColor={textColor}
          />

          <SettingsCard
            title="App Version"
            icon="information-circle-outline"
            textColor={textColor}
            onPress={undefined}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            Alert.alert("Confirm Logout", "Are you sure you want to log out?", [
              { text: "Cancel", style: "cancel" },
              {
                text: "Logout",
                style: "destructive",
                onPress: () => {
                  handleLogout;
                },
              },
            ]);
          }}
          style={{
            backgroundColor: "#fff0f0",
            borderRadius: 16,
            padding: 16,
            alignItems: "center",
            marginBottom: 60,
          }}
        >
          <Text
            style={{
              color: "#d00",
              fontSize: 14,
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            Log Out
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  );
}
