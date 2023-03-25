import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const MatchesCard = ({ item }) => {
  return (
    <TouchableOpacity className="">
      <LinearGradient
        colors={["#5ED2A0", "#339CB1"]}
        className="m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg md:max-w-2xl"
      >
        <View className="w-32 h-36">
          <View className="items-center justify-center">
            <Text className="text-base p-2 overflow-hidden">{item.name}</Text>
          </View>

          <View className="flex-row items-center justify-evenly md:shrink-0">
            <Image source={item.team1.logo} className="object-cover w-7 h-7" />
            <Image source={item.team2.logo} className="object-cover w-7 h-7" />
          </View>

          <View className="items-center justify-center">
            <Text className="tracking-normal text-sm font-semibold truncate">
              {item.team1.name}
            </Text>
            <Text className="font-thin">VS</Text>
            <Text className="tracking-normal text-sm font-semibold truncate">
              {item.team2.name}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MatchesCard;
