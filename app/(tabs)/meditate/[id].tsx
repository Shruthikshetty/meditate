import AppGradient from "@/components/AppGradient";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import BackIcon from "@expo/vector-icons/AntDesign";
import CustomButton from "@/components/CustomButton";
import { Audio } from "expo-av";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/meditation-data";
import TimeModal from "@/components/TimeModal";
const Meditate = () => {
  const { id } = useLocalSearchParams();
  const [secRemaining, setSecRemaining] = useState(10);
  const [isMeditating, setMeditating] = useState(false);
  const [audioSound, setSound] = useState<Audio.Sound>();
  const [isPlayingAudio, setPlayingAudio] = useState(false);
  const [timemodalVisible, setTimeModalVisible] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    //Exit
    if (secRemaining === 0) {
      setMeditating(false);
      return;
    }
    if (isMeditating) {
      timerId = setTimeout(() => {
        setSecRemaining((state) => state - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [secRemaining, isMeditating]);

  useEffect(() => {
    return () => {
      audioSound?.unloadAsync();
    };
  }, [audioSound]);

  // format time to ensure 2 digit value
  const formattedTimeMinutes = String(Math.floor(secRemaining / 60)).padStart(
    2,
    "0"
  );
  const formattedTimeSec = String(Math.floor(secRemaining % 60)).padStart(
    2,
    "0"
  );

  async function toggleMeditationSessionStatus() {
    if (secRemaining === 0) setSecRemaining(10);
    setMeditating(!isMeditating);
    await toggleSound();
  }

  async function initialSound() {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);
    setSound(sound);
    return sound;
  }

  async function toggleSound() {
    const sound = audioSound ? audioSound : await initialSound();
    const status = await sound?.getStatusAsync();
    if (status?.isLoaded && !isPlayingAudio) {
      console.log("playing");
      await sound.playAsync();
      setPlayingAudio(true);
    } else {
      await sound.pauseAsync();
      setPlayingAudio(false);
    }
  }
  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-15 left-6 z-10"
          >
            <BackIcon name="leftcircleo" size={50} color="white" />
          </Pressable>
          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
              <Text className="text-4xl text-blue-800 font-rmono">
                {formattedTimeMinutes}:{formattedTimeSec}
              </Text>
            </View>
          </View>
          <View className="mb-5 gap-[2vh]">
            <CustomButton
              title="Set time"
              handlePress={()=> setTimeModalVisible(true)}
            />
            <CustomButton
              title="Start Meditation"
              handlePress={toggleMeditationSessionStatus}
            />
          </View>
          <TimeModal visible={timemodalVisible} handleTime={setSecRemaining} handleVisible={setTimeModalVisible}/>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
