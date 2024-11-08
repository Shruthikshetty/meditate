import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { SafeAreaView, ViewStyle } from "react-native";

const AppGradient = ({
  children,
  colors,
  style,
}: {
  children: React.ReactNode;
  colors: string[];
  style?: ViewStyle;
}) => {
  return (
    <LinearGradient colors={colors} className="flex-1" style={style}>
      <SafeAreaView className="flex-1 px-5 py-3 my-10 ">
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AppGradient;
