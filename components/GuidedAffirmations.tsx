import { GalleryPreviewData } from "@/constants/models/AffirmationsCategory";
import { Link } from "expo-router";
import React from "react";
import { View, Text, FlatList, Pressable, Image } from "react-native";

const GuidedAffirmationsGallery = ({
  title,
  previews,
}: GuidedAffirmationsGalleryProps) => {
  function renderAffermations({ item }: { item: GalleryPreviewData }) {
    return (
      <Link href={`/affirmations/${item.id}`}>
        <Pressable>
          <View className="h-36 w-32 rounded-md mr-4">
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
