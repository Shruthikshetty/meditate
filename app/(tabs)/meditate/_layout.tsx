import { Stack } from "expo-router";
import React from "react";

const Meditatelayout = () => {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen name="[id]" options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  );
};

export default Meditatelayout;
