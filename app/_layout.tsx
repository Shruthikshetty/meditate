import "../global.css"; // Import your global CSS file required for native wind
import { Slot } from "expo-router"; // this component acts as a children and will render the index file component in this case
import React from "react";

const RootLayout = () => {
  return <Slot />;
};

export default RootLayout;
