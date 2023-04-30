import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const MatchesCard = ({
  teamHomeImgUrl,
  teamAwayImgUrl,
  teamHome,
  teamAway,
  stadiumName,
  gameDate,
  homeGoal,
  awayGoal,
  league,
  season,
  country,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("headToHead", {
          teamHomeImgUrl,
          teamAwayImgUrl,
          teamHome,
          teamAway,
          stadiumName,
          gameDate,
          homeGoal,
          awayGoal,
          league,
          season,
          country,
        })
      }
      className="bg-white mr-3 shadow"
    >
      <LinearGradient
        colors={["#5ED2A0", "#339CB1"]}
        className="m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg"
      >
        <View className="w-32 h-40">
          <View className="items-center justify-center space-y-2">
            <Image
              source={teamHomeImgUrl}
              className="object-cover w-14 h-14 shrink-0"
            />
            <Text className="font-thin">Vs</Text>
            <Image
              source={teamAwayImgUrl}
              className="object-cover w-14 h-14 shrink-0"
            />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MatchesCard;
