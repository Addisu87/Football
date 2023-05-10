import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

const MatchesCard = ({
  teamHomeImgUrl,
  teamAwayImgUrl,
  teamHome,
  teamAway,
  stadiumName,
  gameDate,
  goalHome,
  goalAway,
  leagueName,
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
          goalHome,
          goalAway,
          leagueName,
          season,
          country,
        })
      }
      className="relative overflow-hidden cursor-pointer"
    >
      <LinearGradient
        colors={["#60a5fa", "#34d399"]}
        className="m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg"
      >
        <View className="mx-auto rounded-lg drop-shadow-lg items-center">
          <Text className="mt-2 text-slate-900">
            {moment(gameDate).format("MMMM DD, YYYY")}
          </Text>
          <View className="flex-row space-y-1 space-x-3">
            <View className="shrink-0">
              <Image
                source={teamHomeImgUrl}
                className="w-14 h-14 object-cover"
              />
              <Text className="uppercase block mt-1 text-base leading-tight font-medium text-black ">
                {teamHome.length > 8 ? `${teamHome.slice(0, 8)}..` : teamHome}
              </Text>
            </View>

            <View className="items-center justify-center">
              <Text className="text-slate-900">Vs</Text>
            </View>

            <View className="shrink-0">
              <Image
                source={teamAwayImgUrl}
                className="w-14 h-14 object-cover"
              />
              <Text className="uppercase block mt-1 text-base leading-tight font-medium text-black ">
                {teamAway.length > 8 ? `${teamAway.slice(0, 8)}..` : teamAway}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MatchesCard;
