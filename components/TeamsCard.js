import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { View } from "react-native";

const TeamsCard = ({ imgUrl, name }) => {
  return (
    <TouchableOpacity className="relative p-3 mr-4 drop-shadow-lg max-w-md mx-auto rounded-xl overflow-hidden bg-gray-200">
      <View className="space-y-2">
        <Image source={imgUrl} className="rounded h-20 w-20 object-cover" />
        <Text className="absolute -bottom-3 left-1 text-black font-bold items-center justify-center">
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TeamsCard;
