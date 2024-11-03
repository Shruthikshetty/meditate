import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from "react-native";
import beachImage from "@/assets/meditation-images/beach.webp";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "@/components/CustomButton";
/**
 * Main app compoenent
 * @returns {JSX.Element}
 */
const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        >
          <SafeAreaView className="my-10 flex-1 px-1 mx-5 justify-between">
            {/* Headings  */}
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-slate-200 text-2xl mt-3 font-normal">
                Simplifying meditation for everyone
              </Text>
            </View>
            {/* button */}
            <CustomButton
              handlePress={() => {
                console.warn("button cliked");
              }}
              title={"Get started"}
            />
            {/* status bar */}
            <StatusBar barStyle={"light-content"} />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
