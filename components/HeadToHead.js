import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon, ShareIcon } from "react-native-heroicons/outline";

const HeadToHead = () => {
  const navigation = useNavigation();

  const {
    params: {
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
    },
  } = useRoute();

  return (
    <SafeAreaView>
      <View className="relative">
        <View className="flex-row justify-between p-4">
          <View className="items-center justify-center">
            <Text className="font-normal uppercase">
              {country} - {league}
            </Text>
            <Text className="text-sm font-light p-2">{season}</Text>
            <Text className="text-sm font-light p-2">{stadiumName}</Text>
          </View>
          <Text>{gameDate}</Text>
        </View>

        <TouchableOpacity
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>

        <TouchableOpacity className="absolute top-14 right-5 p-2 bg-gray-100 rounded-full">
          <ShareIcon size={20} color="#00CCBB" />
        </TouchableOpacity>

        <View className="flex-row justify-evenly">
          <View className="space-y-2">
            <Image source={teamHomeImgUrl} className="object-cover w-16 h-16" />
            <Text className="font-semibold uppercase text-lg">{teamHome}</Text>
          </View>
          <View className="space-x-2 font-bold text-lg">
            <Text className="font-semibold uppercase text-lg space-x-2">
              {homeGoal}-
            </Text>
            <Text className="font-semibold uppercase text-lg space-x-2">
              {awayGoal}
            </Text>
          </View>
          <View>
            <Image source={teamAwayImgUrl} className="object-cover w-16 h-16" />
            <Text className="font-semibold uppercase text-lg">{teamAway}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeadToHead;
