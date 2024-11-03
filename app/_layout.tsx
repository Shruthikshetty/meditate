import "../global.css"; // Import your global CSS file required for native wind
import { Slot, Stack } from "expo-router"; // this component acts as a children and will render the index file component in this case
import React from "react";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

export default RootLayout;
