import colors from "@/constants/colors";
import { Tabs } from "expo-router";
import React from "react";
import FlowerIcon from "@expo/vector-icons/Entypo";
import BookIcon from "@expo/vector-icons/Entypo";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => (
            <FlowerIcon name="flower" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="affermations"
        options={{
          tabBarLabel: "Affermations",
          tabBarIcon: ({ color }) => (
            <BookIcon name="open-book" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
