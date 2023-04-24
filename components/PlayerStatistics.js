import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { ArrowLeftIcon, ShareIcon } from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";

const PlayerStatistics = () => {
  const navigation = useNavigation();

  const {
    params: {
      Photo,
      Name,
      Age,
      Nationality,
      TeamLogo,
      TeamName,
      Position,
      Appearance,
      Passes,
      Goals,
      Cards,
    },
  } = useRoute();

  return (
    <ScrollView>
      <View className="relative">
        <Image source={Photo} className="w-full h-36 bg-gray-200 p-4 " />

        <TouchableOpacity
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>

        <TouchableOpacity className="absolute top-14 right-5 p-2 bg-gray-100 rounded-full">
          <ShareIcon size={20} color="#00CCBB" />
        </TouchableOpacity>

        <View className="flex-row justify-between items-center">
          <View className="flex-row space-x-2">
            <View className="space-y-1">
              <Image source={TeamLogo} className="w-10 h-10 rounded-full" />
              <Text>{TeamName}</Text>
            </View>

            <View className="space-y-1">
              <Text className="text-base">{Name}</Text>
              <Text>Age: {Age}</Text>
              <Text>Position: {Position}</Text>
              <Text>Nationality: {Nationality}</Text>
              <Text>Appearance: {Appearance}</Text>
              <Text>Goals: {Goals}</Text>
              <Text>Passes: {Passes}</Text>
              <Text>Cards: {Cards}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PlayerStatistics;
