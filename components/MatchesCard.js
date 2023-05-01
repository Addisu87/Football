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
      className="bg-white mr-3 shadow"
    >
      <LinearGradient
        colors={["#5ED2A0", "#339CB1"]}
        className="m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg"
      >
        <View className="max-w-md mx-auto rounded-xl drop-shadow-lg overflow-hidden items-center justify-evenly">
          <Text className="mt-2 text-slate-500">
            {moment(gameDate).format("MMMM DD, YYYY")}
          </Text>
          <View className="flex-row p-2">
            <View className="shrink-0 ">
              <Image
                source={teamHomeImgUrl}
                className="w-16 h-16 object-cover"
              />
              <Text className="uppercase block mt-1 text-lg leading-tight font-medium text-black ">
                {teamHome.length > 10 ? `${teamHome.slice(0, 10)}..` : teamHome}
              </Text>
            </View>

            <View className="items-center justify-center">
              <Text className="text-slate-500">Vs</Text>
            </View>

            <View className="shrink-0">
              <Image
                source={teamAwayImgUrl}
                className="w-16 h-16 object-cover"
              />
              <Text className="uppercase block mt-1 text-lg leading-tight font-medium text-black ">
                {teamAway.length > 10 ? `${teamAway.slice(0, 10)}..` : teamAway}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MatchesCard;
