import React, { useEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { ArrowLeftIcon, ShareIcon } from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Trophies from "./Trophies";

const PlayerStatistics = () => {
  const navigation = useNavigation();

  const {
    params: {
      Photo,
      Name,
      Age,
      Number,
      Nationality,
      TeamLogo,
      TeamName,
      Position,
      Passes,
      Appearences,
      Goals,
      Cards,
    },
  } = useRoute();

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={Photo}
          className="w-full h-60 bg-gray-200 p-2 object-cover"
        />

        <TouchableOpacity
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>

        <TouchableOpacity className="absolute top-14 right-5 p-2 bg-gray-100 rounded-full">
          <ShareIcon size={20} color="#00CCBB" />
        </TouchableOpacity>

        <LinearGradient
          colors={["#60a5fa", "#34d399"]}
          className="m-2 max-w-md mx-auto h-full rounded-xl overflow-hidden drop-shadow-lg"
        >
          <View className="max-w-md mx-auto rounded-xl drop-shadow-lg overflow-hidden">
            <View className="flex-row justify-evenly">
              <View className="space-y-1 pl-2">
                <Image
                  source={TeamLogo}
                  className="rounded w-16 h-16 object-cover"
                />
                <Text className="uppercase block mt-1 text-lg leading-tight font-medium text-black">
                  {TeamName?.length > 12
                    ? `${TeamName.slice(0, 12)}...`
                    : TeamName}
                </Text>
              </View>

              <View className="p-4">
                <Text className="uppercase block mt-1 text-lg leading-tight font-medium text-black">
                  {Name}
                </Text>
                <Text className="mt-2 text-black">Age: {Age}</Text>
                <Text className="mt-2 text-black">Position: {Position}</Text>
                <Text className="mt-2 text-black">Position: {Number}</Text>
                <Text className="mt-2 text-black">
                  Nationality: {Nationality}
                </Text>
                <Text className="mt-2 text-black">
                  Appearance: {Appearences}
                </Text>
                <Text className="mt-2 text-black">Goals: {Goals}</Text>
                <Text className="mt-2 text-black">Passes: {Passes}</Text>
                <Text className="mt-2 text-black">Cards: {Cards}</Text>

                {/* Trophies */}
                <View className="p-4">
                  <Trophies />
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default PlayerStatistics;
