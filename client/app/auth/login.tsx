import Input from "@/components/fields/Input";
import Label from "@/components/fields/Label";
import { useThemeColor } from "@/hooks/useThemeColor";
import { LoginScreenNavigationProp } from "@/types/navigation";
import { AntDesign, FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Button } from "@react-navigation/elements";
import { router } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useLogin from "@/hooks/auth/useLogin";
import useGoogleAuth from "@/hooks/auth/useGoogleAuth";
type Props = {
  navigation: LoginScreenNavigationProp;
};
export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const button = useThemeColor({}, "button");
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");
  const backgroundColor = useThemeColor({}, "background");
  const { login, loading } = useLogin();
  const { promptAsync } = useGoogleAuth();

  const handleLogin = () => {
    login(email, password);
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          padding: 30,
          backgroundColor: backgroundColor,
        }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Ionicons name="arrow-back" size={15} style={[{ color: textColor }]} />
          </TouchableOpacity>
        </View>

        <View style={styles.upperContainer}>
          <Text style={[styles.logo, { color: textColor }]}>ECOBIN</Text>
          <Text style={[styles.description, { color: subText }]}>
            Your cleaner choices start here 
          </Text>
        </View>

        <View style={styles.InputContainer}>
          <Label>Email</Label>
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

          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity onPress={() => router.push("/auth/ForgotPassword")}>
              <Text style={[styles.forgotPasswordText, { color: subText }]}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button
          color={"#347433"}
          onPress={handleLogin}
          variant="filled"
          style={{ paddingVertical: 15, marginTop: 15 }}
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
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
          Don’t have an account?{" "}
          <Text style={styles.signInLink} onPress={() => router.push("/auth/register")}>
            Register
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

  title: {
    fontSize: 26,
    fontFamily: "Poppins_700Bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    lineHeight: 22,

    marginBottom: 20,
    alignSelf: "center",
  },
  signWith: {
    fontSize: 13,
    fontFamily: "Poppins_400Regular",

    textAlign: "center",
  },
  registerButton: {
    marginTop: 20,
    width: "100%",
    backgroundColor: "black",
    borderRadius: 6,
  },

  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
    gap: 10,
    fontFamily: "Poppins_700Bold",
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
    color: "#347433",
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
  IconsContainer: {
    marginTop: 20,
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
  passwordInput: {
    paddingRight: 45,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: "20%",
  },
  forgotPasswordContainer: {
    marginTop: 8,
    alignItems: "flex-end",
  },

  forgotPasswordText: {
    fontSize: 14,
  },
});
