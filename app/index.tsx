import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
} from "react-native";
import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";
/**
 * Main app compoenent
 * @returns {JSX.Element}
 */
const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <View className="flex-1 justify-between">
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
              handlePress={() => router.push("/nature-meditate")}
              title={"Get started"}
            />
            {/* status bar */}
            <StatusBar barStyle={"light-content"} />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
