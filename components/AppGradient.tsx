import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { SafeAreaView } from "react-native";

const AppGradient = ({
  children,
  colors,
}: {
  children: React.ReactNode;
  colors: string[];
}) => {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <SafeAreaView className="flex-1 px-5 py-3 my-10">{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default AppGradient;
