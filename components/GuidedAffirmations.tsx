import { GalleryPreviewData } from "@/constants/models/AffirmationsCategory";
import { Link } from "expo-router";
import React from "react";
import { View, Text, FlatList, Pressable, Image } from "react-native";

/**
 * A component that renders a gallery of guided affirmations
 * @param {{title: string, previews: GalleryPreviewData[]}} props
 * @prop {string} title - The title of the gallery
 * @prop {GalleryPreviewData[]} previews - An array of preview data for the affirmations
 * @returns {React.ReactElement} A React component that renders a gallery of guided affirmations
 */
const GuidedAffirmationsGallery = ({
  title,
  previews,
}: GuidedAffirmationsGalleryProps) => {
  /**
   * A function that renders a item of affirmation
   */
  function renderAffermations({ item }: { item: GalleryPreviewData }) {
    return (
      <Link href={`/affirmations/${item.id}`} asChild>
        <Pressable>
          <View className="h-[15vh] w-[30vw] rounded-md mr-4">
            <Image
              source={item.image}
              resizeMode="cover"
              className="w-full h-full"
            />
          </View>
        </Pressable>
      </Link>
    );
  }
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderAffermations}
          horizontal
        ></FlatList>
      </View>
    </View>
  );
};
type GuidedAffirmationsGalleryProps = {
  title: string;
  previews: GalleryPreviewData[];
};
export default GuidedAffirmationsGallery;
