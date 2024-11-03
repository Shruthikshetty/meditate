import AppGradient from "@/components/AppGradient";
import { MEDITATION_DATA, MeditationType } from "@/constants/meditation-data";
import React from "react";
import {
  View,
  Text,
  StatusBar,
  FlatList,
  Pressable,
  ImageBackground,
} from "react-native";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";

const NatureMeditate = () => {
  /** renders all the options in the Meditate tab  */
  function renderMeditationOptions({ item }: { item: MeditationType }) {
    return (
      <Pressable
        onPress={() => console.warn("pressed")}
        className="h-48 my-3 rounded-md overflow-hidden"
      >
        <ImageBackground
          source={MEDITATION_IMAGES[item.id - 1]}
          className="flex-1 rounded-lg justify-center"
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            className="flex-1 justify-center items-center"
          >
            <Text className="text-gray-100 text-3xl font-bold text-center">
              {item.title}
            </Text>
          </LinearGradient>
        </ImageBackground>
      </Pressable>
    );
  }

  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6 ">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Welcome Shruthik
          </Text>
          <Text className="text-indigo-100 text-xl font-medium">
            Start yout meditation practice today
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            renderItem={renderMeditationOptions}
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </AppGradient>
      <StatusBar barStyle={"light-content"} />
    </View>
  );
};

export default NatureMeditate;
