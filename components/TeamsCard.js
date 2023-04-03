import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TeamsCard = ({ imgUrl, name, foundedYear, Photo, Name }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Players", { Photo, Name })}
      className="relative p-2 m-2 drop-shadow-lg max-w-md mx-auto rounded-xl overflow-hidden bg-gray-200"
    >
      <View className="w-[90px]">
        <View className="items-center justify-center">
          <Image source={imgUrl} className="rounded w-10 h-10 object-cover" />
        </View>
        <View className="items-center justify-center">
          <Text className="left-1 text-black font-semibold ">{name}</Text>
          <Text className="left-1 text-black font-semibold">
            {`Est. ${foundedYear}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TeamsCard;
