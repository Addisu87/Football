import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const MatchesCard = ({
  teamHome,
  teamAway,
  stadiumName,
  teamHomeImgUrl,
  teamAwayImgUrl,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Lineups", {
          teamHome,
          teamAway,
          stadiumName,
          teamHomeImgUrl,
          teamAwayImgUrl,
        })
      }
      className="bg-white mr-3 shadow"
    >
      <LinearGradient
        colors={["#5ED2A0", "#339CB1"]}
        className="m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg md:max-w-2xl"
      >
        <View className="w-32 h-40">
          <View className="items-center justify-center">
            <Text className="text-sm font-light p-2">
              {stadiumName?.length > 14
                ? `${stadiumName.slice(0, 14)}...`
                : stadiumName}
            </Text>
          </View>

          <View className="flex-row items-center justify-evenly md:shrink-0">
            <Image source={teamHomeImgUrl} className="object-cover w-7 h-7" />
            <Image source={teamAwayImgUrl} className="object-cover w-7 h-7" />
          </View>

          <View className="items-center justify-center">
            <Text className="tracking-normal text-sm font-light truncate">
              {teamHome}
            </Text>
            <Text className="font-thin">Vs</Text>
            <Text className="tracking-normal text-sm font-light truncate">
              {teamAway}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MatchesCard;
