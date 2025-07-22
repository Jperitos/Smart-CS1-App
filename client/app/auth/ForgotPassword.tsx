import Input from "@/components/fields/Input";
import Label from "@/components/fields/Label";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@react-navigation/elements";
import { router } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");

  const handleSubmit = () => {
    console.log("Password reset link sent to:", email);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 30 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={15} style={[{ color: textColor }]} />
          </TouchableOpacity>
        </View>

        <View style={styles.upperContainer}>
          <Text style={[styles.logo, { color: textColor }]}>Forgot Password</Text>
          <Text style={[styles.description, { color: subText }]}>
            Enter your email and we'll send you {"\n"} instructions to reset your password.
          </Text>
        </View>

        <View style={styles.InputContainer}>
          <Label>Email</Label>
          <Input placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        </View>

        <Button color= "#347433" variant="filled" style={{ paddingVertical: 15, marginTop: 20 }} onPress={handleSubmit}>
          Send Reset Link
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 25,

    fontFamily: "Poppins_700Bold",
    letterSpacing: 0,
  },
  upperContainer: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  headerTitle: {
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
    alignSelf: "center",
    marginTop: 10,
  },
  InputContainer: {
    width: "100%",
    marginTop: 5,
    gap: 5,
  },
});
