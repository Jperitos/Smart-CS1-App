import Input from "@/components/fields/Input";
import Label from "@/components/fields/Label";
import { useThemeColor } from "@/hooks/useThemeColor";
import { AntDesign, FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Button } from "@react-navigation/elements";
import { router } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useGoogleAuth from "@/hooks/auth/useGoogleAuth";
import useRegister from "@/hooks/auth/useRegister";
export default function RegisterScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const button = useThemeColor({}, "button");
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const backgroundColor = useThemeColor({}, "background");
  const { register, loading } = useRegister();
  const { promptAsync } = useGoogleAuth();

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 30, backgroundColor: backgroundColor }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={15} style={[{ color: textColor }]} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: textColor }]}>Sign In</Text>
        </View>

        <View style={styles.upperContainer}>
          <Text style={[styles.logo, { color: textColor }]}>MUSE</Text>
          <Text style={[styles.description, { color: subText }]}>
            Create an account to begin your{"\n"}musical journey with Muse.
          </Text>
        </View>

        <View style={styles.InputContainer}>
          <Label>Full Name</Label>
          <Input placeholder="Enter your full name" value={fullName} onChangeText={setFullName} />

          <Label style={{ marginTop: 16 }}>Email</Label>
          <Input placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" />

          <Label style={{ marginTop: 16 }}>Password</Label>
          <View style={styles.passwordWrapper}>
            <Input
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)} style={styles.eyeIcon}>
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={18}
                color="#999"
                style={{
                  marginTop: 5,
                }}
              />
            </TouchableOpacity>
          </View>

          <Label style={{ marginTop: 16 }}>Confirm Password</Label>
          <Input
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showPassword}
          />
        </View>

        <Button
          color={button}
          variant="filled"
          style={{ paddingVertical: 15, marginTop: 20 }}
          onPress={() => register(fullName, email, password, confirmPassword)}
          disabled={loading}
        >
          Create Account
        </Button>

        <View style={styles.IconsContainer}>
          <Text style={[styles.signWith, { color: subText }]}>or sign in with</Text>
          <View style={styles.socialContainer}>
            <TouchableOpacity onPress={() => promptAsync()}>
              <AntDesign name="google" size={15} color={textColor} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="facebook" size={15} color={textColor} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="apple" size={15} color={textColor} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={[styles.signInPrompt, { color: subText }]}>
          Already have an account?{" "}
          <Text style={styles.signInLink} onPress={() => router.push("/auth/login")}>
            Login
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 25,

    fontFamily: "Poppins_700Bold",
    letterSpacing: 4,
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
  },
  description: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    lineHeight: 22,

    marginBottom: 20,
    alignSelf: "center",
  },
  InputContainer: {
    width: "100%",
    marginTop: 20,
    gap: 5,
  },
  passwordWrapper: {
    width: "100%",
    position: "relative",
    justifyContent: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: "20%",
  },
  IconsContainer: {
    marginTop: 20,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  socialIcon: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  signWith: {
    fontSize: 13,
    fontFamily: "Poppins_400Regular",

    textAlign: "center",
  },
  signInPrompt: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",

    marginTop: 10,
  },
  signInLink: {
    fontSize: 13,
    fontFamily: "Poppins_400Regular",
    color: "#D72638",
  },
});
