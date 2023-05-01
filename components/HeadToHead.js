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
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";

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
      goalHome,
      goalAway,
      leagueName,
      season,
      country,
    },
  } = useRoute();

  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#5ED2A0", "#339CB1"]}
        className="m-2 max-w-md mx-auto rounded-xl overflow-hidden drop-shadow-lg"
      >
        <View className="relative">
          <View className="flex-row justify-between p-4 border-b-3 border-[#339CB1]">
            <View className="items-center justify-center">
              <Text className="font-normal uppercase">
                {country} - {leagueName}
              </Text>
              <Text className="text-sm font-light">{season}</Text>
              <Text className="text-sm font-light">
                {stadiumName.length > 16
                  ? `${stadiumName.slice(0, 16)}..`
                  : stadiumName}
              </Text>
            </View>
            <Text>{moment(gameDate).format("MMMM DD, YYYY")}</Text>
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
              <Image
                source={teamHomeImgUrl}
                className="object-cover w-16 h-16"
              />
              <Text className="font-semibold uppercase text-lg">
                {teamHome.length > 10 ? `${teamHome.slice(0, 10)}..` : teamHome}
              </Text>
            </View>
            <View className="space-x-2">
              <Text className="font-bold text-xl">
                {goalHome} - {goalAway}
              </Text>
            </View>
            <View>
              <Image
                source={teamAwayImgUrl}
                className="object-cover w-16 h-16"
              />
              <Text className="font-semibold uppercase text-lg">
                {teamAway.length > 10 ? `${teamAway.slice(0, 10)}..` : teamAway}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HeadToHead;
