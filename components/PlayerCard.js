import React from "react";
import { View, Text, Image } from "react-native";

const PlayerCard = ({ Photo, Name, Age, Position }) => {
  return (
    <View className="text-center items-center justify-center flex-row space-x-2 mx-">
      <Image source={Photo} className="w-20 h-20 rounded-full drop-shadow-lg" />
      <View className="space-y-1">
        <Text className="text-neutral-500 dark:text-neutral-400">{Name}</Text>
        <Text className="text-neutral-500 dark:text-neutral-400">{Age}</Text>
        <Text className="text-neutral-500 dark:text-neutral-400">
          {Position}
        </Text>
      </View>
    </View>
  );
};

export default PlayerCard;
