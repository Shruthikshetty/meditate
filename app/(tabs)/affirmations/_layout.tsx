import { Stack } from "expo-router";
import React from "react";

const AffirmationsLayout = () => {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="[itemid]"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

export default AffirmationsLayout;
