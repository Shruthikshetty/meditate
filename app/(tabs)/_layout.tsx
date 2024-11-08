import colors from "@/constants/colors";
import { Tabs } from "expo-router";
import React from "react";
import FlowerIcon from "@expo/vector-icons/Entypo";
import BookIcon from "@expo/vector-icons/Entypo";

/**
 * A component that renders the main tabs of the app.
 *
 * This component renders a <Tabs> component with two tabs, "Meditate" and "Affirmations", each
 * with their own icon and label. The active tab color is set to the primary color of the app.
 *
 * @returns {JSX.Element}
 */

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tabs.Screen
        name="meditate"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => (
            <FlowerIcon name="flower" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: "Affirmations",
          tabBarIcon: ({ color }) => (
            <BookIcon name="open-book" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
