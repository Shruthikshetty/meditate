import React from "react";
import { Text, TouchableOpacity } from "react-native";

/**
 * A reusable button component with a white background, rounded corners, and a
 * minimum height of 62px. The button text will be centered and have a font
 * size of 1rem. The component accepts the following props:
 *
 * - `handlePress`: a function to be called when the button is pressed
 * - `title`: the text to display on the button
 * - `textStyles`: any additional CSS styles to apply to the button text
 * - `containerStyles`: any additional CSS styles to apply to the button
 *   container
 */

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
