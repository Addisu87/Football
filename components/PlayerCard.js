import React from "react";
import { View, Text, Image } from "react-native";

const PlayerCard = ({ Photo, Name, Age, Position }) => {
  return (
    <View className="grid grid-cols-2 gap-4">
      <View className="items-center justify-center flex-row space-x-2">
        <View>
          <Image
            source={Photo}
            className="w-20 h-20 rounded-full drop-shadow-lg"
          />
        </View>
        <View className="space-y-1">
          <Text className="text-neutral-700 dark:text-neutral-800">{Name}</Text>
          <Text className="text-neutral-700 dark:text-neutral-800">{Age}</Text>
          <Text className="text-neutral-700 dark:text-neutral-800">
            {Position}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PlayerCard;
