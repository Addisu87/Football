import React from "react";
import { View, Text, Image } from "react-native";

const PlayerCard = ({ Photo, Name, Age, Position }) => {
  return (
    <View className="space-x-2">
      <View className="text-center">
        <Image
          source={Photo}
          className="w-16 h-16 mx-auto rounded-full drop-shadow-lg"
        />
        <View className="space-y-1">
          <Text className="text-neutral-500 dark:text-neutral-400">{Name}</Text>
          <Text className="text-neutral-500 dark:text-neutral-400">{Age}</Text>
          <Text className="text-neutral-500 dark:text-neutral-400">
            {Position}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PlayerCard;
