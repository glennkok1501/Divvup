import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { themes } from "@tamagui/themes";

type CustomButtonProps = {
  onPress: any;
  title: string;
  disabled?: boolean;
};

const CustomButton = ({ onPress, title, disabled = false }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, disabled && styles.disabledText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: themes.dark.background,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: {
    backgroundColor: "#a0a0a0",
  },
  text: {
    fontSize: 16,
    color: themes.dark.color,
  },
  disabledText: {
    color: "#d3d3d3",
  },
});

export default CustomButton;
