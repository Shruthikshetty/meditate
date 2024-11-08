import React from "react";
import { View, Text, Modal } from "react-native";
import AppGradient from "./AppGradient";
import CustomButton from "./CustomButton";

/**
 * A modal that allows the user to select a duration for their meditation.
 * It displays several options for the user to choose from, and when the user
 * selects one, it calls the `handleTime` function with the selected time and
 * sets `visible` to false.
 * @param {{ visible: boolean; handleTime: React.Dispatch<React.SetStateAction<number>>; handleVisible: React.Dispatch<React.SetStateAction<boolean>> }} props
 * @returns {JSX.Element}
 */
const TimeModal = ({
  visible,
  handleTime,
  handleVisible,
}: {
  visible: boolean;
  handleTime: React.Dispatch<React.SetStateAction<number>>;
  handleVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  /**
   * Handles the closing of the modal
   * @param time The time the user has selected
   */
  function handleClose(time: number) {
    handleTime(time);
    handleVisible(false);
  }
  return (
    <Modal
      className="mt-[10vh] w-[90vw] z-10 "
      visible={visible}
      animationType="slide"
      transparent
    >
      <AppGradient
        colors={["#161b2e", "#0a4d4a", "#766e67"]}
        style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
      >
        <View>
          <Text className="text-center font-bold text-3xl text-white mb-8">
            Adjust your meditation duration
          </Text>
        </View>
        <View className="gap-[3vh] flex-col justify-center flex-1">
          <CustomButton
            handlePress={() => handleClose(30)}
            title={"30 seconds"}
          />
          <CustomButton
            handlePress={() => handleClose(60)}
            title={"1 minute"}
          />
          <CustomButton
            handlePress={() => handleClose(900)}
            title={"15 minutes"}
          />
          <CustomButton
            handlePress={() => handleClose(1800)}
            title={"30 minutes"}
          />
        </View>
      </AppGradient>
    </Modal>
  );
};

export default TimeModal;
