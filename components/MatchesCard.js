import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const MatchesCard = ({ item }) => {
  return (
    <TouchableOpacity className="">
      <LinearGradient
        colors={["#5ED2A0", "#339CB1"]}
        className="pl-2 pr-2 m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg md:max-w-2xl"
      >
        <View className="space-y-2">
          <View>
            <Text className="text-lg font-semibold text-gray-800">
              {item.name}
            </Text>
          </View>

          <View className="flex-row items-center justify-evenly md:shrink-0">
            <Image source={item.team1.logo} className="object-cover w-7 h-7" />
            <Image source={item.team2.logo} className="object-cover w-7 h-7" />
          </View>

          <View className="p-2">
            <Text className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {item.team1.name}
            </Text>
            <Text className="text-center justify-center">VS</Text>
            <Text className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {item.team2.name}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MatchesCard;
