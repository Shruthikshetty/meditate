import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  handlePress,
  title,
  textStyles = "",
  containerStyles = "",
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
      onPress={handlePress}
    >
      <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

type CustomButtonProps = {
  handlePress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
};

export default CustomButton;
