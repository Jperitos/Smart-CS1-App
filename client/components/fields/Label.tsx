import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";
interface LabelProps extends TextProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children, style, ...props }) => {
  const textColor = useThemeColor({}, "text");
  const subText = useThemeColor({}, "subText");

  return (
    <Text style={[styles.label, style, { color: textColor }]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    textAlign: "left",
    lineHeight: 25,
  },
});

export default Label;
