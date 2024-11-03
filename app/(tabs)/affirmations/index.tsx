import AppGradient from "@/components/AppGradient";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmations";
import AFFIRMATION_GALLERY from "@/constants/affermation-gallery";
import React from "react";
import { View, Text, ScrollView } from "react-native";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f5a", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold">
            Change you'r belief's with affirmation
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((gallery) => (
              <GuidedAffirmationsGallery
                key={gallery.title}
                title={gallery.title}
                previews={gallery.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
