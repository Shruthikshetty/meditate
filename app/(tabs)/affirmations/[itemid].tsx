import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affermation-gallery";
import { GalleryPreviewData } from "@/constants/models/AffirmationsCategory";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import BackIcon from "@expo/vector-icons/AntDesign";

const AffirmationPractice = () => {
  const { itemid } = useLocalSearchParams();
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentances, setSentances] = useState<string[]>([]);

  // find the required affirmation
  useEffect(() => {
    for (let id = 0; id < AFFIRMATION_GALLERY.length; id++) {
      const affermationData = AFFIRMATION_GALLERY[id].data;
      const affirmationToStart = affermationData.find(
        (data) => data.id == Number(itemid)
      );
      if (affirmationToStart) {
        setAffirmation(affirmationToStart);
        const affirmationsArray = affirmationToStart.text.split(".");
        if (affirmationsArray[affirmationsArray.length - 1] === "") {
          affirmationsArray.pop();
        }
        setSentances(affirmationsArray);
        return;
      }
    }
  }, []);
  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-15 left-6 z-10"
          >
            <BackIcon name="leftcircleo" size={50} color="white" />
          </Pressable>
          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-4/5 justify-center">
                {sentances.map((sentance, index) => (
                  <Text
                    className="text-white font-bold text-3xl mb-12 text-center"
                    key={index}
                  >
                    {sentance}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
